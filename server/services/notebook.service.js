var notebooks = require('../models/NoteBook.model');

var Q = require('q');
var _ = require('lodash'); 
var service = {};

//service.create = create; 
service.convert = convertRS;
service.search = search;
service.delete = _delete;
module.exports = service;



function convertRS(result)
{
    var deferred = Q.defer();


    result.forEach(item => {

        // set up object 
        var obj = item; 
        obj.student_code       = item['mã sinh viên'];
        obj.firstname          = item['họ'];
        obj.lastname           = item['tên'];
        obj.sx                 = item['giới tính'];
        obj.birthday           = item['ngày sinh'];
        obj.join_date          = item['ngày vào đoàn'];
        obj.join_place         = item['nơi vào đoàn'];
        obj.year               = item['khóa'];
        obj.faculty            = item['khoa'];
        obj.major              = item['ngành'];
        obj.s_class              = item['lớp sinh viên'];
        obj.save_place         = item['vị trí lưu trữ'];
               
       console.log(item);
       // insert object to db
        create(item)
            .then(function()
            {
                deferred.resolve();
            })
            .catch(function (err) {
               deferred.reject(err);
            });
    });

    return deferred.promise;

    
     
}

function create(notebookParam)
{
    var deferred = Q.defer();

    notebooks.findOne(
        {student_code : notebookParam.student_code},
        function(err,notebook)
        {
            if(err)
                deferred.reject(err.name + ': ' + err.message);
            if(notebook)
            {
                // notebook hava already existed
                deferred.resolve();
            }
            else
            {
                //create new notebook
                createNoteBook();
            }

        }
    )

    function createNoteBook()
    {       
        notebooks.create(
            notebookParam,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function search(param)
{
    var deferred = Q.defer();
   
    // set up value to find
    var value = param.content;
    var key = param.selectedValue;

    
    notebooks.find({ [key] : value},
        function(err,docs)
        {
            if(err) deferred.reject(err.name + ': ' + err.message);
            if(docs)           
            {
                // search successfull
                deferred.resolve({
                    docs

                });
            }
           //search fail
            else {
                deferred.reject("No result found!");
            }
            
        }
    )
    
   
    
    return deferred.promise;
}

function _delete(id)
{
    var deferred = Q.defer();
    //find by id and remove
    notebooks.findByIdAndRemove(id, function(err, res){
        if(err) deferred.reject(err);

        deferred.resolve();
    });

    return deferred.promise;
}