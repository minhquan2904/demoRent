
var users = require('../models/User');
var bcrypt = require('bcryptjs');
var Q = require('q');
var _ = require('lodash'); 
var moment      = require('moment');
var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
//service.getById = getById;
service.create = create;
service.update = update;
service.changePassword = changePassword;
service.delete = _delete;
service.findMod = findMod;
service.findById = findById;
service.getListNewest = getListNewest;
module.exports = service;

function getListNewest(lim) {
    var deferred = Q.defer();
    
    var result;
    users.find({}, {}, {sort: {'created_at': -1}, limit: Number.parseInt(lim)}, function(err, users) {
        if(err) {
          deferred.reject(err.name + ': ' + err.message);  
        }

        users.forEach(function(user) {
           user.hash = '404';
           user.username = '404';
       });
       result = users;
       deferred.resolve(result);
        
    })

    return deferred.promise;
}

function findById(id) {
    var deferred = Q.defer();
    users.findOne({"_id": id}, function (err, user) {
        if(err)
          deferred.reject(err.name + ': ' + err.message);
        if(user) {
            // success
            user.hash = 'ahihi';
            deferred.resolve(user);
        } else {
            //create new motel
            deferred.reject("No result found");
        };
    });
            return deferred.promise;
}
function findMod()
{
    var deferred = Q.defer();
    users.find(
        {role: 2}).exec(function (err, users) {
            if (err) deferred.reject(err.name + ': ' + err.message);
    
            // return users (without hashed passwords)
            users = _.map(users, function (user) {
                return _.omit(user, 'hash');
            });
    
            deferred.resolve(users);
        });
    
        return deferred.promise;
}
function authenticate(username, password)
{
    var deferred = Q.defer();

    users.findOne({username: username}, function(err,user){
        if(err) 
            deferred.reject(err.name + ':' + err.message);
        if(user && bcrypt.compareSync(password, user.hash))
        {
            // authentication successful
            deferred.resolve({
                _id: user.id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role

            });
        }
        else
        {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam)
{
    var deferred = Q.defer();

    users.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

        function createUser() {
            // set user object to userParam without the cleartext password
            var user = _.omit(userParam, 'password');
    
            // add hashed password to user object
            user.hash = bcrypt.hashSync(userParam.password, 10);
            if(!userParam.role) {
                user.role = 3;
            }
            
            users.create(
                user,
                function (err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
    
                    deferred.resolve();
                });
        }
        return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    users.find().exec(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function update(id, userParam) {
    var deferred = Q.defer();
   
    // validation
    users.findById(id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if(user) {
            updateUser();
        } else {
            deferred.reject("user not found");
        }

    });

    function updateUser() {
        // fields to update
        var set = {
            firstname: userParam.firstname,
            lastname: userParam.lastname,
            email: userParam.email,
            phone: userParam.phone
        };

        users.update({_id: id}, {$set: set}, {new: false}, function(err, user) {
            if(err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve();
        })

       
    }

    return deferred.promise;
}
function changePassword(id, userParam) {
    var deferred = Q.defer();

    users.findById(id, function(err, user) {
        if(err) deferred.reject(err.name + ': ' + err.message);

        if(user && bcrypt.compareSync(userParam.oldPassword, user.hash)) {
            user.hash = bcrypt.hashSync(userParam.newPassword, 10);
            user.save(function(err, user) {
                if(err) deferred.reject(err.name + ': ' + err.message); 
                deferred.resolve();
            })
            deferred.resolve();
        } else {
            deferred.reject("user not found or password is incorect")
        }
    });
    return deferred.promise;
}
    

function _delete(_id) {
    var deferred = Q.defer();

   users.findByIdAndRemove(_id, function(err, res){
    if(err) deferred.reject(err);

    deferred.resolve();
    });

    return deferred.promise;
}
