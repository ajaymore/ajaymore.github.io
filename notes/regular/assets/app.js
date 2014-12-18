var showHide = function ($scope, showArr, hideArr) {
    for (var i = 0; i < hideArr.length; i++) {
        $scope[hideArr[i]] = false;
    }
    for (var i = 0; i < showArr.length; i++) {
        $scope[showArr[i]] = true;
    }
};
angular.module('myApp', ['ngMaterial'])
    .directive("setCss", function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                element.css({
                    'overflow': 'auto'
                });
            }
        };
    })
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $http) {
        var jsonLocation = 'assets';
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        $scope.close = function () {
            $mdSidenav('left').close();
        };
        $scope.sideNavToolBarText = "Subjects";
        $scope.showSubjects = true;
        $scope.subChaptList = [];
        $scope.subjects = [];
        $scope.titleText = "How to use notes application";
        $scope.template = {
            url: 'tools/how to.html'
        };

        $http.get(jsonLocation + '/subjects.json').success(function (data, status, headers, config) {
            $scope.subChaptList = data;
            $scope.subjects = data;
        }).error(function (data, status, headers, config) {
            console.log('subjects fetch error');
        });

        var currentSubject;
        $scope.itemClicked = function (item) {
            $scope.titleText = item;
            if (!currentSubject) {
                currentSubject = item;
                $http.get(jsonLocation + '/' + item + '.json').success(function (data, status, headers, config) {
                    $scope.subChaptList = data;
                    showHide($scope, ['showBackBtn'], []);
                }).error(function (data, status, headers, config) {
                    console.log('chapters fetch error');
                });
            } else {
                $scope.template.url = currentSubject + '/' + item + '.html';
                if ($mdSidenav('left').isOpen()) {
                    $mdSidenav('left').close();
                }
            }
        };

        $scope.backBtnPress = function () {
            console.log('back pressed');
            showHide($scope, [], ['showBackBtn']);
            currentSubject = undefined;
            $scope.subChaptList = $scope.subjects;
        }

    });