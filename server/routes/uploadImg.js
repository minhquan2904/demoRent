var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

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
      if (['png', 'jpg','PNG','JPG'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
          return callback(new Error('Wrong extension type'));
      }
      callback(null, true);
  }
}).single('file');
//** API path that will upload the files */
router.post('/', function(req,res)
{
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
        res.status(200).send(req.file.filename);
        
    });
});
module.exports = router;