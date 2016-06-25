angular.module('app').factory('locationsService',function($http) {

    var locationsService = {

        model:{
            list:[],
            item:null,
        },

        create:function(data){

            var promise = $http.post('http://localhost:3010/location', data);

            return promise;

        },
        getOne:function(id){

            var promise = $http.get('http://localhost:3010/location/'+id);

            promise.then(function(res){

                console.log(res);
                locationsService.model.item = res.data;

            });

            return promise;

        },
        getList:function(){

            var promise = $http.get('http://localhost:3010/locations');

            promise.then(function(res){

                locationsService.model.list = res.data;

            });

        },
        delete:function(id){

            var c = confirm('Are you sure?');

            if(c === false){
                return false;
            }

            var promise = $http.delete('http://localhost:3010/location/'+id);

            promise.then(function(){

                angular.forEach(locationsService.model.list, function(location, i){

                    if(location._id === id){
                        locationsService.model.list.splice(i,1);
                    }

                });

            });

            return promise;

        },
        update:function(id, data){

            var promise = $http.put('http://localhost:3010/location/'+id, data);

            promise.then(function(res){

                console.log(res);

            });

            return promise;

        }
    };

    return locationsService;
});
