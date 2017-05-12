var app = angular.module('app', ['ui.bootstrap', 'ui.bootstrap.datetimepicker']);

app.controller('MyController', ['$scope', function($scope) {

    var that = this;


    // date and time picker
    this.picker3 = {
        date: new Date()
    };



    this.openCalendar = function(e, picker) {
        that[picker].open = true;
    };


}]);