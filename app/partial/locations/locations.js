angular.module('app').controller('LocationsCtrl',function(
    $scope,
    locationsService
){

    $scope.locations = locationsService.model.list;

    $scope.deleteClick = function(id){

        locationsService.delete(id)
            .then(function(){



            });

    };

    $scope.editClick = function (id){



    };

});
