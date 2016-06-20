angular.module('app').controller('NewProjectCtrl',function(
    $scope,
    project
){

    $scope.project = {
        author:''
    };

    $scope.authors = [
        {
            name:'Gorazd'
        },
        {
            name:'Matija'
        },
        {
            name:'Andrej'
        }
    ];

    $scope.onCreateClick = function(){

        project.create($scope.project)
            .then(function(res){

                console.log(res);

            });

    };

});
