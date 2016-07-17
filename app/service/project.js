angular.module('app').factory('project',function($http) {

    var project = {

        model:{
            list:[],
            item:null,
        },

        create:function(data){

            var promise = $http.post('http://localhost:3010/project', data);

            return promise;

        },
        getOne:function(id){

            var promise = $http.get('http://localhost:3010/project/'+id);

            promise.then(function(res){

                console.log(res);
                project.model.item = res.data;

            });

            return promise;

        },
        getList:function(){

            var promise = $http.get('http://localhost:3010/projects');

            promise.then(function(res){

                project.model.list = res.data;

            });

            return promise;

        },
        delete:function(id){

            var c = confirm('Are you sure?');

            if(c === false){
                return false;
            }

            var promise = $http.delete('http://localhost:3010/project/'+id);

            promise.then(function(){

                angular.forEach(project.model.list, function(_project, i){

                    if(_project._id === id){
                        project.model.list.splice(i,1);
                    }

                });

            });

            return promise;

        },
        update:function(id, data){

            var promise = $http.put('http://localhost:3010/project/'+id, data);

            promise.then(function(res){

                console.log(res);

            });

            return promise;

        }
    };

    return project;
});
