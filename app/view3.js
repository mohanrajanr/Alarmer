/**
 * Created by karthickramjee on 10/05/17.
 */
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
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.$storage = $localStorage.$default({
        x: 0,
        y: 0,
        students : [
        ]
    });
    $scope.value=$scope.$storage.students;
    $scope.add = function(){
        $scope.$storage.students.push({ name: $scope.firstName, grade: "A" });
    };
    $scope.deleteitem = function(collection,index){
        collection.splice(index,1);
    };
    $scope.deleteX = function() {
        delete $scope.$storage.x;
    };

    $scope.deleteY = function() {
        delete $localStorage.y;
    };
});