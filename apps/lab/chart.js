window.onload = function () {


};

var myApp = angular.module('myApp', []);
myApp.directive('lineChart', function () {
    var baseWidth = 600;
    var baseHeight = 400;
    return {
        restrict: 'E',
        scope: {
            chartObject: '=dataset'
        },
        link: function (scope, element, attrs) {
            element.append('<canvas></canvas>');
            var canvas = element.find('canvas')[0],
                    context = canvas.getContext('2d'),
                    chart;
            var options = {
                type: attrs.type || "Line",
                width: attrs.width || baseWidth,
                height: attrs.height || baseHeight
            };
            canvas.width = options.width;
            canvas.height = options.height;
            chart = new Chart(context);

            //Update when charts data changes
//            scope.$watch(function () {
//                return scope.chartObject;
//            }, function (value) {
//                if (!value)
//                    return;
//                var chartType = options.type;
//                console.log(scope.chartObject);
//                chart[chartType](scope.chartObject, {});
//                console.log('changed data');
//            });
            scope.$watch('chartObject', function (newValue, oldValue) {
                if (newValue)
                    chart[options.type](scope.chartObject, {});
            }, true);
        }
    };
});
myApp.controller('ChartCtrl', ['$scope', function ($scope) {
        $scope.hello = "hello world";
        $scope.data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        $scope.changeData = function () {
            for (var i = 0; i < $scope.data.datasets[0].data.length; i++) {
                $scope.data.datasets[0].data[i] = $scope.data.datasets[0].data[i] + 2;
            }
        }
    }]);