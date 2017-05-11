'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngStorage',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3'
]).
config(['$routeProvider', function($routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view3'});
}]).
controller('MainCtrl',function($scope,$timeout,dateFilter){
    $scope.updateTime = function(){
        $timeout(function(){
            $scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
            $scope.updateTime();
        },1000);
    };
    $scope.updateTime();
});
