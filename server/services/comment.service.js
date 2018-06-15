var comments = require('../models/Comment.model');

var Q = require('q');
var _ = require('lodash'); 
var service = {};

//service.create = create; 
service.insert = insert;
service.findByMotel = findByMotel;
// service.search = search;
service.delete = _delete;
module.exports = service;

function insert(comment)
{
    var deferred = Q.defer();
    comments.create(comment, function (err, item) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        deferred.resolve();
    });
    return deferred.promise;
}
function findByMotel(id)
{
    var deferred = Q.defer();
    comments.find({motel_id: id}, function(err, items){
        if (err) deferred.reject(err.name + ': ' + err.message);
        if(items)
            deferred.resolve(items);
        else{
            deferred.reject();
        }
    })
    return deferred.promise;
}
function _delete(_id) {
    var deferred = Q.defer();

   comments.findByIdAndRemove(_id, function(err, res){
    if(err) deferred.reject(err);

    deferred.resolve();
    });

    return deferred.promise;
}