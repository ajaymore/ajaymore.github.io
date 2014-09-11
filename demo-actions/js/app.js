// Include app dependencies on ngAnimate and ngMaterial
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'angular-gestures', 'fsCordova']);
myApp
        .directive('ig', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    fid: '@'
                },
                template:
                        '<material-input-group>' +
                        '<label for="{{fid}}">Description</label>' +
                        '<material-input id="{{fid}}" type="text" ng-model="data.description">' +
                        '</material-input-group>'
            };
        })
        .directive('autoFocus', function() {
            return {
                link: {
                    pre: function(scope, element, attr) {
                    },
                    post: function(scope, element, attr) {
                        element[0].focus();
                    }
                }
            }
        })
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'templates/actions.html',
                controller: 'ActionsCtrl'
            }).when('/activities', {
                templateUrl: 'templates/activities.html',
                controller: 'ActivitiesCtrl'
            }).when('/editor', {
                templateUrl: 'templates/editor.html',
                controller: 'EditorCtrl'
            });
        })
        .factory('Data', function() {
            var content = {};
            content.keys = ['activities', false];
            if (typeof localStorage['content'] === 'undefined' || localStorage.length == 0) {
                content.activities = [
                    {
                        title: 'Book Reading',
                        description: 'Target to read the books: Anna Karenina, War & peace',
                        done: false
                    }
                ];
                content.actions = [
                    {
                        title: '',
                        description: 'Touble click to edit or delete',
                        done: false
                    }
                ];
            } else {
                var localJSON = JSON.parse(localStorage['content']);
                content.activities = localJSON.activities;
                content.actions = localJSON.actions;
            }

            var save = function(content) {
                localStorage['content'] = JSON.stringify(content);
            };

            return {
                content: content,
                save: save
            };
        })
        .controller('TabsCtrl', ['$scope', '$location', function($scope, $location) {
                $scope.navigate = function(index) {
                    if (index === 0) {
                        $location.url('/');
                    } else {
                        $location.url('/activities');
                    }
                };
            }])
        .controller('ActionsCtrl', ['Data', '$scope', '$location', 'CordovaService',
            function(Data, $scope, $location, CordovaService) {
                CordovaService.ready.then(function() {
                    // Cordova is ready
                });

                $scope.actions = Data.content.actions;

                $scope.navigateToCreate = function() {
                    myAppUtils.getEditor($location, Data, 'actions', false);
                };

                $scope.doubleClick = function(index) {
                    $scope.target = index;
                    $scope.showOverlay = true;
                };

                $scope.editItem = function() {
                    $scope.showOverlay = false;
                    myAppUtils.getEditor($location, Data, 'actions', $scope.target);
                };
                $scope.deleteItem = function() {
                    Data.content.actions.splice($scope.target, 1);
                    Data.save(Data.content);
                    $scope.showOverlay = false;
                };
            }])
        .controller('ActivitiesCtrl', ['Data', '$scope', '$location', function(Data, $scope, $location) {
                $scope.activities = Data.content.activities;
                $scope.selectedIndex = 1;
                $scope.navigateToCreate = function() {
                    myAppUtils.getEditor($location, Data, 'activities', false);
                };
                $scope.doubleClick = function(index) {
                    $scope.target = index;
                    $scope.showOverlay = true;
                };
                $scope.editItem = function() {
                    $scope.showOverlay = false;
                    myAppUtils.getEditor($location, Data, 'activities', $scope.target);
                };
                $scope.deleteItem = function() {
                    Data.content.activities.splice($scope.target, 1);
                    Data.save(Data.content);
                    $scope.showOverlay = false;
                };
            }])
        .controller('EditorCtrl', ['Data', '$scope', '$location', function(Data, $scope, $location) {
                if (Data.content.keys[0] === 'actions') {
                    if (Data.content.keys[1] === false) {
                        $scope.createForm = true;
                        $scope.inputPlaceholderVal = "";
                        $scope.textPlaceholderVal = "Description";
                    } else {
                        $scope.editForm = true;
                        var index = Data.content.keys[1],
                                pointer = Data.content.keys[0];
                        $scope.title = Data.content[pointer][index].title;
                        $scope.description = Data.content[pointer][index].description;
                    }

                } else {
                    if (Data.content.keys[1] === false) {
                        $scope.createForm = true;
                        $scope.inputPlaceholderVal = "Title";
                        $scope.textPlaceholderVal = "Description";
                    } else {
                        $scope.editForm = true;
                        var index = Data.content.keys[1],
                                pointer = Data.content.keys[0];
                        $scope.title = Data.content[pointer][index].title;
                        $scope.description = Data.content[pointer][index].description;
                    }
                }
                $scope.create = function() {
                    var pushObj = {
                        title: $scope.title,
                        description: $scope.description,
                        done: false
                    };
                    Data.content[Data.content.keys[0]].push(pushObj);
                    Data.save(Data.content);
                    $location.url(Data.content.keys[0] === 'actions' ? '/' : '/activities');
                };
                $scope.modify = function() {
                    var editObj = {
                        title: $scope.title,
                        description: $scope.description,
                        done: false
                    };
                    Data.content[Data.content.keys[0]][Data.content.keys[1]] = editObj;
                    Data.save(Data.content);
                    $location.url(Data.content.keys[0] === 'actions' ? '/' : '/activities');
                };
            }]);
var myAppUtils = myAppUtils || {};
myAppUtils.getEditor = function($location, Data, key0, key1) {
    Data.content.keys = [key0, key1];
    $location.url('/editor');
};