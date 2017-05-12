'use strict';

angular.module('myApp.view3', ['ngRoute','ngStorage','ui.bootstrap', 'ui.bootstrap.datetimepicker','ngAnimate', 'toastr','btorfs.multiselect'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3.html',
            controller: 'View3Ctrl'
        });
    }])

.controller('View3Ctrl', function($scope,
                                  $localStorage, toastr) {
    $scope.$storage = $localStorage.$default({
        students : [
        ]
    });
    $scope.picker3 = {
        date: new Date()
    };
    $scope.options= [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    $scope.value=$scope.$storage.students;
    $scope.add = function(){
        if($scope.title!=null && $scope.picker3.date!=null) {
            if(typeof $scope.selection !== 'undefined' && $scope.selection.length > 0)
                $scope.$storage.students.push({title: $scope.title, time: $scope.picker3.date.toLocaleString([], {year : 'numeric', month : 'numeric', day : 'numeric', hour: '2-digit', minute:'2-digit'}), recurring: $scope.selection});
            else
                $scope.$storage.students.push({title: $scope.title, time: $scope.picker3.date.toLocaleString([], { year : 'numeric', month : 'numeric', day : 'numeric', hour: '2-digit', minute:'2-digit'}), recurring: 'Once'});
            $scope.title = null;
            $scope.picker3.date=null;
            $scope.selection= [];
            toastr.success('Alarm Notification', 'Alarm Added Successfully!', {
                closeButton: true
            });
        }
        else{
            $scope.title = null;
            $scope.picker3.date=null;
            $scope.selection=[];
            toastr.error('Alarm Notification', 'Failed to add!', {
                closeButton: true
            });
        }
    };
    $scope.deleteitem = function(collection,index){
        collection.splice(index,1);
    };
    $scope.openCalendar = function() {
        $scope.picker3.open = true;
    };
});