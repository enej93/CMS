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

        $scope.isCreating = true;

        $scope.project.author = $scope.project.author.name;

        project.create($scope.project)
            .then(function(res){

                $scope.isCreating = false;
                $state.go('projects');

            });

    };

});
