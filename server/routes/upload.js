var express = require('express');
var router = express.Router();
var multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
var fs = require('fs');
var notebookService = require('../services/notebook.service');

var upload = multer({dest: './uploads'});

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
});
var upload = multer({ //multer settings
              storage: storage,
              fileFilter : function(req, file, callback) { //file filter
                if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                    return callback(new Error('Wrong extension type'));
                }
                callback(null, true);
            }
          }).single('file');
/** API path that will upload the files */
router.post('/', function(req, res) {
  var exceltojson;
  upload(req,res,function(err){
      if(err){
           res.status(400).send(err);;
           return;
      }
      /** Multer gives us file info in req.file object */
      if(!req.file){
        res.status(400).send(err);;
        return;
    }
    //start convert process
     /** Check the extension of the incoming file and 
     *  use the appropriate module
     */
    if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
         exceltojson = xlsxtojson;
        } else {
            exceltojson = xlstojson;
        }
        try {
            exceltojson({
                input: req.file.path, //the same path where we uploaded our file
                output: null, //since we don't need output.json
                lowerCaseHeaders:true
            }, function(err,result){
                if(err) {
                    return res.status(400).send(err);
                } 
               
                //convert to json successful , insert object to server
                notebookService.convert(result).then(function () {
                    // try {
                    //     fs.unlinkSync(req.file.path);
                    // } catch(e) {
                    //     console.log(e);
                    // }
                    res.sendStatus(200);
                })
                .catch(function (err) {
                    res.status(400).send(err);
                });
               
            });
        } catch (e){
            res.status(400).send("Corupted excel file");
        }
      
  });
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
module.exports = router;