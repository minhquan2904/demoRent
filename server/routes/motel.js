var express = require('express');
var router = express.Router();

var motel = require('../models/Motel.model');
var motelService = require('../services/motel.service');

//routes
router.delete('/:id', _delete );
router.post('/insert', insert);
router.put('/:id', update );
router.post('/get-lat-lng', getLatLng);
router.post('/find-by-user', findByUser);
router.post('/get-list-nearby', getListNearBy);
router.post('/find-lt-price', findLtPrice);
router.get('/find-by-id/:id', findById);
router.get('/statistic/num-post', getNumPost);
router.post('/search', search); // advance search
router.get('/full-search/:q', fullSearch);
router.get('/find-by-status/:status', findByStatus);
module.exports = router;

function getNumPost(req, res) {
    motel.count({}, function (err, rs) {
        if(err) {
            res.send(err);
        } else {
            res.json(rs);
        }
    });
}
function findByStatus(req, res) {

    
    motelService.findByStatus(req.params.status).then(function(motels){
        if(motels)
        // search successful
        res.status(200).send(motels);
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

function fullSearch(req, res) {
   motelService.fullSearch(req.params.q).then(function (motels) {
        if (motels) {
            res.status(200).send(motels);
        } else {
            res.status(404).send("No results");
        }
   })
   .catch(function (err) {
       res.status(400).send(err);
   })
}
function search(req, res) {
    
    param = req.body;
    var h = [];
    var gt;
    var lt;
    var query = {};
    for(var k in param) {
        if(param.hasOwnProperty(k)) {
            query[k] = {$regex: '.*' + param[k] + '.*'};
            if(param[k] === "") {
                delete query[k];
            }
            if(k === "top_price" && param[k] != "") {
                lt = param[k];
                delete query[k];
            }
            if(k === "bottom_price" && param[k] != "") {
                gt = param[k];
                delete query[k];
            }
        }
    }
    // h[0] = str;
    // console.log(h);
    if(lt || gt) {
        if(gt && !lt) {
            motel.where('price').gt(gt).find(query).exec( (err, resp ) => {
                if(err) res.status(400).send(err);
                
                res.status(200).send(resp);
            });
        }
        if (!gt && lt) {
            motel.where('price').lt(lt).find(query).exec( (err, resp ) => {
                if(err) res.status(400).send(err);
                
                res.status(200).send(resp);
            });
        }
        if( gt && lt) {
            motel.where('price').gt(gt).lt(lt).find(query).exec( (err, resp ) => {
                if(err) res.status(400).send(err);
                
                res.status(200).send(resp);
            });
        }
        
    } else {
        motel.find(query).exec( (err, resp ) => {
            if(err) res.status(400).send(err);
                
            res.status(200).send(resp);
        });
    }
   
    // param.forEach(element => {
    //     console.log(element);
    // });


}

function findLtPrice(req,res)
{
    motelService.findLtPrice(req.body['price']).then(function(motels){
        if(motels)
        // search successful
        res.status(200).send(motels);
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
function getListNearBy(req,res)
{
    motelService.getListNearBy(req.body).then(function(motels){
        if(motels)
        // search successful
        res.status(200).send(motels);
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
function findById(req,res)
{
    motelService.findById(req.params.id).then(function(motel){
        if(motel)
        // search successful
        res.status(200).send(motel);
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
function insert(req,res)
{
    delete req.body['_id'];
    motelService.create(req.body).then(function (id) {
        res.status(200).send(id);
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}
function update(req,res)
{  
    // delete property _id
    delete req.body['_id'];

    //find by id and update
    motel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json("Update success!");
      });
}
function _delete(req, res) {
    motelService.delete(req.params.id)
        .then(function () {
            res.status(200).send("delete ok");
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
function findByUser(req,res)
{
    motelService.findByUser(req.body["id"])
        .then(function(motels){
            if(motels)
            // search successful
            res.status(200).send(motels);
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
function getLatLng(req,res)
{
    motelService.getLatLng(req.body["id"])
        .then(function(motels){
            if(motels)
            // search successful
            res.status(200).send(motels);
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