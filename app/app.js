angular.module('app', [
    'ui.bootstrap',
    'ui.router',
    'ngAnimate',
    'ngFileUpload'
]);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html',
        controller: 'HomeCtrl'
    });
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html',
        controller: 'ProjectsCtrl',
        resolve:{
            projects: function(projectService){

                return projectService.getList();

            }
        }
    });
    $stateProvider.state('new-project', {
        url: '/new-project',
        templateUrl: 'partial/new-project/new-project.html',
        controller: 'NewProjectCtrl'
    });
    $stateProvider.state('edit-project', {
        url: '/edit-project/:id',
        templateUrl: 'partial/edit-project/edit-project.html',
        controller: 'EditProjectCtrl',
        resolve:{
            item:function(project, $stateParams){

                return project.getOne($stateParams.id);

            }
        }
    });
    $stateProvider.state('inventory', {
        url: '/inventory',
        templateUrl: 'partial/inventory/inventory.html',
        controller: 'InventoryCtrl'
    });
    $stateProvider.state('locations', {
        url: '/locations',
        templateUrl: 'partial/locations/locations.html',
        controller:'LocationsCtrl'
    });
    $stateProvider.state('new-location', {
        url: '/new-location',
        templateUrl: 'partial/new-location/new-location.html',
        controller: 'NewLocationCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
