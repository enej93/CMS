angular.module('app').controller('EditProjectCtrl',function(
    $scope,
    projectService,
    $state
){

    $scope.authors = [
        {
            name:'Enej'
        },
        {
            name:'Bojan'
        },
        {
            name:'Alen'
        }
    ];


    $scope.project = projectService.model.item;

    $scope.saveClick = function(){

        projectService.update($scope.project._id, $scope.project)
        .then(function(res){

            $state.go('projects');

        });

    };

});
