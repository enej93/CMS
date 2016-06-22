angular.module('app').controller('ProjectsCtrl',function(
    $scope,
    project
){

    $scope.projects = project.model.list;

    $scope.deleteClick = function(id){

        project.delete(id)
        .then(function(){



        });

    };

    $scope.editClick = function (id){

        

    };

});
