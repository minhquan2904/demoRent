var statistics  = require('../models/Statistic.model');
var motels      = require('../models/Motel.model');
var users       = require('../models/User');
var Q           = require('q');
var _           = require('lodash'); 
var service     = {};
var moment      = require('moment');

service.getData = createMontlyRecord;
module.exports = service;


function createMontlyRecord() {
    
    var deferred = Q.defer();

    let moment = require('moment');
    
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 1); // firstday of month
    var lastDay = new Date(y, m + 1, 0); // lastday of month
    // check date, if the first day on the month, create new record
    statistics.findOne({}, {},{sort: {'created_at': -1}}, function(err, statistic) {
        if (err) {
            deferred.reject(err.name + ': ' + err.message)
        }
        
        if (moment(statistic.created_at).isBetween(firstDay, lastDay)) {
            deferred.resolve({
                num_motels: statistic.num_motels,
                num_users: statistic.num_users,
                visitors: statistic.visitors,
                stopped_at: statistic.stopped_at ? moment(statistic.stopped_at).format('MMMM Do YYYY, h:mm:ss a') : 'Pending',
                created_at: moment(statistic.created_at).format('MMMM Do YYYY, h:mm:ss a')
            });
        } else {
            statistic.update({stopped_at: Date.now()}, function(err, raw) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message)
                }
            })
            create();
        }
       
    })
    function create() {
    
        let statistic = {
            num_motels:  0,
            num_users:   0,
            visitors:   0,
            created_at: Date.now()
        }
      
        motels.count({}, function (err, rs) {
            if (err) {
                deferred.reject(err.name + ': ' + err.message);
            }
    
            statistic.num_motels = Number.parseInt(rs);
    
            users.count({}, function (err, rs) {
                if (err) {
                    deferred.reject(err.name + ': ' + err.message);
                }
        
                statistic.num_users = Number.parseInt(rs);
                
                statistics.create(statistic, function(err, statistic) {
                    if (err) {
                        deferred.reject(err.name + ': ' + err.message);
                    }
            
                    deferred.resolve({
                        num_motels: statistic.num_motels,
                        num_users: statistic.num_users,
                        visitors: statistic.visitors,
                        stopped_at: statistic.stopped_at ? moment(statistic.stopped_at).format('MMMM Do YYYY, h:mm:ss a') : 'Pending',
                        created_at: moment(statistic.created_at).format('MMMM Do YYYY, h:mm:ss a')
                    });
                });
            });
        });
    
    }

    return deferred.promise;
  }