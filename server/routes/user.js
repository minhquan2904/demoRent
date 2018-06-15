var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var service = require('../services/user.service');

// routes
router.get('/:lim',getLimit);
router.post('/authenticate', authenticate);
router.post('/register', register);
router.post('/find-mod',findMod);
router.post('/find-by-id', findById );
router.put('/:id', update);
router.put('/change-password/:id', changePassword);
router.delete('/:id', _delete);
module.exports = router;
function findById(req,res) {
    service.findById(req.body.id)
            .then(function (user) {
                if (user) {
                    // authentication successful
                    res.send(user);
                } else {
                    // authentication failed
                    res.status(404).send('Not found');
                }
            })
            .catch(function (err) {
                res.status(400).send(err);
            });
}
function authenticate(req, res) {
    service.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    service.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getLimit(req, res) {
    service.getListNewest(req.params.lim)
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function findMod(req, res) {
    service.findMod()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function _delete(req, res) {
    service.delete(req.params.id)
        .then(function () {
            res.status(200).send("delete ok");
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function update(req, res) {
    delete req.body['_id'];
    
    service.update(req.params.id, req.body)
        .then(function () {
            res.status(200).send("update ok");
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function changePassword(req,res) {
    service.changePassword(req.params.id, req.body) 
        .then(function () {
            res.status(200).send("update ok");
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}