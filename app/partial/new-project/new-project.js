angular.module('app').controller('NewProjectCtrl',function(
    $scope,
    projectService,
    $state,
    Upload,
    $timeout
){

    $scope.isCreating = false;
    $scope.isUploading = false;
    $scope.uploadData = {
        progress:0
    };

    $scope.projectService = {
        author:'',
        coverImage: null
    };

    $scope.authors = [
        {
            name:'Enej'
        },
        {
            name:'Alen'
        },
        {
            name:'Bojan'
        }
    ];



    $scope.onCreateClick = function(){

        $scope.isCreating = true;

        $scope.project.author = $scope.project.author.name;

        projectService.create($scope.project)
            .then(function(res){

                $scope.isCreating = false;
                $state.go('projects');

            });

    };

});
