var express = require('express');
var router = express.Router();

var statisticService = require('../services/statistic.service');

// router.get('/create', create);

router.get('/get-info', getInfo);
module.exports = router;

function create(req,res) {
    statisticService.create().then(function(item){
        if(item)
        // search successful
         res.status(200).send(item);
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

function getInfo(req, res) {
    statisticService.getData().then(function(item){
        if(item){// search successful 
            // console.log(item);
            res.status(200).send(item);
        }
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