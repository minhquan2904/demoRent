var votes = require('../models/Vote.model');

var Q = require('q');
var _ = require('lodash'); 
var service = {};
service.like = like;
service.countVote = countVote;
module.exports = service;
function like(data)
{
    var deferred = Q.defer();
    
    votes.findOne({
        customer_id: data.customer_id, 
        motel_id : data.motel_id
    },function (err,motel){
            if(err)
                deferred.reject(err.name + ': ' + err.message);
            if(motel)
            {
                // motel hava already existed
                deferred.reject("you have already rated this motel");
            }
            else
            {
                //create new motel
                createVote();
            }

    })

    function createVote()
    {       
        votes.create(
            data,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }
   // console.log(deferred.promise);
    return deferred.promise;
}
function countVote(id)
{
    var deferred = Q.defer();
    
    votes.count({motel_id: id}, function (err, count){
        if(err)
        {
            deferred.reject(err.name + ': ' + err.message);
        }
           
          deferred.resolve({count});
        
    });
    console.log(deferred.promise);
    return deferred.promise;
}