var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var service = require('../services/level.service');

router.get('/', getAll);
router.post('/insert', insert);
router.put('/update', update);
router.post('/get-progress', progress);
module.exports = router;

function getAll(req, res) {
    service.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function insert(req,res)
{
    delete req.body['_id'];
    service.create(req.body).then(function (id) {
        res.status(201).send("Create success");
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function update(req,res) {
    delete req.body['_id'];
    service.update(req.body).then(function (id) {
        res.status(200).send("Update success");
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}
function progress(req, res) {
    service.progress(req.body).then(function (result) {
        res.send(result);
    })
    .catch( function(err) {
        res.status(400).send(err);
    });
}