var showHide = function ($scope, showArr, hideArr) {
    for (var i = 0; i < showArr.length; i++) {
        $scope[showArr[i]] = true;
    }
    for (var i = 0; i < hideArr.length; i++) {
        $scope[hideArr[i]] = false;
    }
};
var showLoading = function ($scope, show) {
    $scope.$parent.showLoading = show;
}
var createLinks = function ($scope) {
    showLoading($scope, false);
    $("li").each(function (index) {
        var url = $(this).text();
        if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
            var liElem = $('<li />')
            var anchorElem = $('<a />', {text: url, href: url, target: '_blank'})
            liElem.append(anchorElem);
            $(this).replaceWith(liElem);
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
$(document).ready(function () {
    $('body').doubleTap(function () {
        smoothScroll($(window), 0, 300);
    });
    $('body').dblclick(function () {
        smoothScroll($(window), 0, 300);
    });
});

var jsonLocation = 'assets';
var myApp = angular.module('myApp', ['ngAnimate']);
myApp.controller('MobileCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
        showLoading($scope, false);
        $scope.template = {};
        var titleArr = ['Subjects'];
        $scope.title = titleArr[titleArr.length - 1];
        $http.get(jsonLocation + '/subjects.json').success(function (data, status, headers, config) {
            $scope.subjects = data;
        }).error(function (data, status, headers, config) {
            console.log('subjects fetch error');
        });
        showHide($scope, ['showSubjects'], ['showBackBtn', 'showChapters', 'showNote']);
        var level = 0;
        var currentSubject;
        $scope.subjectClicked = function (subject) {
            showLoading($scope, true);
            currentSubject = subject;
            $http.get(jsonLocation + '/' + subject + '.json').success(function (data, status, headers, config) {
                showLoading($scope, false);
                $scope.chapters = data;
                showHide($scope, ['showChapters', 'showBackBtn'], ['showSubjects']);
                level++;
                titleArr.push(subject);
                $scope.title = titleArr[titleArr.length - 1];
            }).error(function (data, status, headers, config) {
                console.log('chapters fetch error');
            });
        };

        var currentChapter;
        $scope.chapterClicked = function (chapter) {
            if (currentChapter !== chapter) {
                showLoading($scope, true);
            }
            currentChapter = chapter;
            $scope.template.url = currentSubject + '/' + chapter + '.html';
            level++;
            titleArr.push(chapter);
            $scope.title = titleArr[titleArr.length - 1];
            showHide($scope, ['showNote'], ['showSubjects', 'showChapters']);
        };
        $scope.createLinks = function () {
            createLinks($scope);
        };

        $scope.backClicked = function () {
            level--;
            titleArr.pop();
            $scope.title = titleArr[titleArr.length - 1];
            switch (level) {
                case 0:
                    showHide($scope, ['showSubjects'], ['showNote', 'showChapters', 'showBackBtn']);
                    break;
                case 1:
                    showHide($scope, ['showChapters', 'showBackBtn'], ['showSubjects', 'showNote']);
                    break;
            }
        };
    }]).controller('DesktopCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
        showLoading($scope, false);
        $scope.template = {url: 'tools/how to.html'};
        var titleArr = ['Subjects'];
        $scope.title = titleArr[titleArr.length - 1];
        $http.get(jsonLocation + '/subjects.json').success(function (data, status, headers, config) {
            $scope.subjects = data;
        }).error(function (data, status, headers, config) {
            console.log('subjects fetch error');
        });
        showHide($scope, ['showSubjects', 'showNote'], ['showBackBtn']);

        var currentSubject;
        $scope.subjectClicked = function (subject) {
            currentSubject = subject;
            showLoading($scope, true);
            $http.get(jsonLocation + '/' + subject + '.json').success(function (data, status, headers, config) {
                showLoading($scope, false);
                $scope.chapters = data;
                showHide($scope, ['showChapters', 'showBackBtn', 'showNote'], ['showSubjects']);
                titleArr.push(subject);
                $scope.title = titleArr[titleArr.length - 1];
            }).error(function (data, status, headers, config) {
                console.log('chapters fetch error');
            });
        }

        var currentChapter;
        $scope.chapterClicked = function (chapter) {
            if (currentChapter !== chapter) {
                showLoading($scope, true);
            }
            currentChapter = chapter;
            $scope.template.url = currentSubject + '/' + chapter + '.html';
            titleArr.push(chapter);
            $scope.title = titleArr[titleArr.length - 1];
        }
        $scope.createLinks = function () {
            createLinks($scope);
        };

        $scope.backClicked = function () {
            titleArr.splice(1, 2);
            $scope.title = titleArr[titleArr.length - 1];
            showHide($scope, ['showSubjects'], ['showChapters', 'showBackBtn']);
        };
    }]);