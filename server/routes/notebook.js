var express = require('express');
var router = express.Router();

var notebook = require('../models/NoteBook.model');
var notebookService = require('../services/notebook.service');

//routes

router.post('/search', search);
router.put('/:id', update );
router.delete('/:id', _delete);
module.exports = router;
function search(req,res)
{
    notebookService.search(req.body)
        .then(function(notebooks){
            if(notebooks)
                // search successful
                res.status(200).send(notebooks);
            else{
                // search fail
                res.status(400).send("No Result");
            }
        })
        .catch(
            function (err) {
                res.status(400).send(err);
            }
        );
}
function update(req,res)
{  
    // delete property _id
    delete req.body['_id'];

    //find by id and update
    notebook.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json("Update success!");
      });
}

function _delete(req, res) {
    notebookService.delete(req.params.id)
        .then(function () {
            res.status(200).send("delete ok");
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}