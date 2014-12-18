var showHide = function ($scope, showArr, hideArr) {
    for (var i = 0; i < hideArr.length; i++) {
        $scope[hideArr[i]] = false;
    }
    for (var i = 0; i < showArr.length; i++) {
        $scope[showArr[i]] = true;
    }
};
var createLinks = function ($scope) {
    var log = angular.element(document.querySelectorAll('li'));
    angular.forEach(log, function (value, key) {
        value = angular.element(value);
        var url = value.text();
        if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
            var liElem = angular.element('<li />');
            var anchorElem = angular.element('<a />');
            anchorElem.text(url).attr('href', url).attr('target', '_blank');
            liElem.append(anchorElem);
            value.replaceWith(liElem);
        }
    });
};

function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }
    var difference = to - $(window).scrollTop();
    var perTick = difference / duration * 10;
    this.scrollToTimerCache = setTimeout(function () {
        if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(0, $(window).scrollTop() + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }.bind(this), 10);
}
angular.module('myApp', ['ngMaterial'])
    .directive("scrollOnClick", function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                element.on('dblclick', function () {
                    smoothScroll(angular.element(window), 0, 300);
                });
                var hammertime = new Hammer(element[0], {});
                hammertime.on('doubletap', function (ev) {
                    smoothScroll(angular.element(window), 0, 300);
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
        };

        $scope.createLinks = function () {
            createLinks($scope);
        };

    });