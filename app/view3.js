'use strict';

angular.module('myApp.view3', ['ngRoute','ngStorage'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3.html',
            controller: 'View3Ctrl'
        });
    }])

.controller('View3Ctrl', function($scope,
                                  $localStorage) {
    $scope.$storage = $localStorage.$default({
        students : [
        ]
    });
    $scope.value=$scope.$storage.students;
    $scope.add = function(){
        $scope.$storage.students.push({ title: $scope.title, time: $scope.time });
        $scope.title="";
        $scope.time="";
    };
    $scope.deleteitem = function(collection,index){
        collection.splice(index,1);
    };
});