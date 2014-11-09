var myApp = angular.module('myApp', ['ngAnimate']);
var elem;
myApp.controller('AppCtrl', ['$scope', '$compile', function ($scope, $compile) {
        var columnCount = 0;
        var showHideDelBtns = function (show) {
            $scope.rowPresent = show;
            $scope.columnPresent = show;
            if (!show) {
                $scope.titles = [];
                $scope.rows = [[]];
                $scope.titles = [];
                columnCount = 0
            }
        };
        showHideDelBtns(false);
        $scope.addRow = function () {
            var tdArray = [];
            for (var i = 0; i < columnCount; i++) {
                tdArray.push({text: ""});
            }
            $scope.rows.push(tdArray);
            showHideDelBtns(true);
        };

        $scope.addColumn = function () {
            columnCount++;
            $scope.titles.push({text: ""});
            for (var i = 0; i < $scope.rows.length; i++) {
                $scope.rows[i].push({text: ""});
            }
            showHideDelBtns(true);
        };

        $scope.deleteRow = function (index) {
            $scope.rows.splice(index, 1);
            if ($scope.rows.length === 0 || $scope.rows[0].length === 0) {
                showHideDelBtns(false);
            }
        };

        $scope.deleteCol = function (index) {
            columnCount--;
            for (var i = 0; i < $scope.rows.length; i++) {
                $scope.rows[i].splice(index, 1);
            }
            $scope.titles.splice(index, 1);
            if ($scope.rows.length === 0 || $scope.rows[0].length === 0) {
                showHideDelBtns(false);
            }
        };

    }]);