angular.module('app').controller('ProjectsCtrl',function(
    $scope,
    project
){

    $scope.projects = project.model.list;

});
