var express = require('express');
var router = express.Router();

var voteService = require('../services/vote.service');

router.post('/like', like);
router.get('/', function(req,res){ res.send("respone")});
router.get('/count/:id', countVote);
module.exports = router;
function like(req,res)
{
    //delete req.body['_id'];
    voteService.like(req.body).then(function (err, post) {
        res.status(200).send("insert ok");
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}
function countVote(req,res)
{
    voteService.countVote(req.params.id).then(function (c) {
        res.status(200).send(c);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}