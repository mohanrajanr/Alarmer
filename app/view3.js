'use strict';

angular.module('myApp.view3', ['ngRoute','ngStorage','ui.bootstrap', 'ui.bootstrap.datetimepicker','ngAnimate', 'toastr','btorfs.multiselect'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3.html',
            controller: 'View3Ctrl'
        });
    }])

.controller('View3Ctrl', function($scope,$interval,
                                  $localStorage, toastr) {
    $scope.$storage = $localStorage.$default({
        listed : [
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
    $scope.value=$scope.$storage.listed;
    $scope.add = function(){
        if($scope.title!=null && $scope.picker3.date!=null) {
            if(typeof $scope.selection !== 'undefined' && $scope.selection.length > 0)
                $scope.$storage.listed.push({title: $scope.title, time: $scope.picker3.date.toLocaleString([], {year : 'numeric', month : 'numeric', day : 'numeric', hour: '2-digit', minute:'2-digit'}), recurring: $scope.selection});
            else
                $scope.$storage.listed.push({title: $scope.title, time: $scope.picker3.date.toLocaleString([], {year : 'numeric', month : 'numeric', day : 'numeric', hour: '2-digit', minute:'2-digit'}), recurring: 'Once'});
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

    var compalarm;
    compalarm = $interval(function () {
        var date = new Date();
        var tolocal = date.toLocaleString([], {year : 'numeric', month : 'numeric', day : 'numeric', hour: '2-digit', minute:'2-digit'})

        for (var i = 0; i < $scope.value.length; i++) {
            console.log($scope.value[i].time);
            console.log(tolocal);
            if($scope.value[i].time==tolocal)
            {
                toastr.success('Alarm Notification', 'Alarm !!!!', {
                    closeButton: true
                });
            }
        }
    }, 60000);

    $scope.deleteitem = function(collection,index){
        collection.splice(index,1);
    };
    $scope.openCalendar = function() {
        $scope.picker3.open = true;
    };
});