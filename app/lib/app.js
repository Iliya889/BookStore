
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
        when('/main', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).
        when('/tab1', {
            templateUrl: 'partials/tab1.html',
            controller: 'Tab1Ctrl'
        }).
        when('/tab2', {
            templateUrl: 'partials/tab2.html',
            controller: 'Tab2Ctrl'
        }).
        when('/tab3', {
            templateUrl: 'partials/tab3.html',
            controller: 'Tab3Ctrl'
        }).
        when('/tab4', {
            templateUrl: 'partials/tab4.html',
            controller: 'Tab4Ctrl'
        }).
        otherwise({
            redirectTo: '/main'
        });
        
}]);

myApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

