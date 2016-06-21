angular.module('app').factory('project',function($http) {

    var project = {

        model:{
            list:[]
        },

        create:function(data){

            var promise = $http.post('http://localhost:3010/project', data);

            return promise;

        },
        getOne:function(){

        },
        getList:function(){

            var promise = $http.get('http://localhost.3010/projects');

            promise.then(function(res){

                project.model.list = res.data;

            });

        },
        delete:function(){

        },
        update:function(){}
    };

    return project;
});
