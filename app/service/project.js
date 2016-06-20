angular.module('app').factory('project',function($http) {

    var project = {
        create:function(data){

            var promise = $http.post('http://localhost:3010/project', data);

            return promise;

        },
        getOne:function(){

        },
        getList:function(){

        },
        delete:function(){

        },
        update:function(){}
    };

    return project;
});
