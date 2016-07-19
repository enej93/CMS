angular.module('app').controller('LocationsCtrl',function(
    $scope,
    locationsService
){

    $scope.locations = locationsService.model.list;

    $scope.state = {
        new:false
    };

    $scope.deleteClick = function(id){

        locationsService.delete(id)
            .then(function(){



            });

    };

    $scope.editClick = function (id){



    };

    $scope.newClick = function(){

        console.log('New click');
        $scope.state.new = true;

    };

});
