---
---
>Useful for writing single-page AJAX-style applications.

>MVW - Model View Whatever

>AngularJS "teaches browsers new tricks".

<pre>
[$scope, Ctrl, {'models': 'JSObjects'}, services, factory, providers, ]
</pre>

<pre>
angular.module('myApp', [])
.values('notificationsArchive', new NotificationsArchive())
.config(function(notificationsServiceProvider){})
.run(function($rootScope) {})
.controller('HelloCtrl',function($scope){})
.provider('notificationsService', function(){}})
.service(service('notificationsService', NotificationsService)
.factory('notificationsService',function(notificationsArchive){});
</pre>

##Philosophy
- Declarative UI
- Two way data binding
- Dependency Injection
- testability

##Build in attributes
- ng-init="name = 'hello world'"
- 

##$scope
- Instance of Scope class
- Scope has methods that control scope's lifecycle, provide event propagation, support template rendering
- scope.$new() creates new scope
- $rootScope is created when app is bootstrapped
- ng-controller is an scope-creating directive
- avoid using $parent as it links angularJS expressions to DOM structure
- As a rule of thumb, you should have a dot in an expression provided to the ng-model directive (for example, ng-model="thing.name").
- angular allows us to propagate named events up or down the hierarchy using $emit and $broadcast respectively.
- They provide isolated namespaces and avoid name collision

##Native events
- $scope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl){});

##General notes
- angular kicks in after the browser has created the DOM, reads it directives from the DOM

##Directives

#Testing

Karma, Unit Tests, Midway testing, E2E testing

>Creating npm folder manually if npm commands don't work

npm install -g bower protractor jasmine-node frisby grunt-cli

<pre>
project
	src
		app
			css
			img
			js
			sass
			lib		
		dist
		tests
			frisby
			protractor
			jasmine
	api
</pre>

- cd app  
- compass create --sass-dir "sass" --css-dir "css" --javascripts-dir "js" --images-dir "img"
- npm init
- npm install --save-dev frisby grunt grunt-contrib-uglify grunt-contrib-concat grunt-remove-logging grunt-contrib-copy grunt-contrib-clean grunt-htmlrefs
- Create file Gruntfile.js

##Using tools
* Jasmine node for frisby
    - jasmine-node api --junitreport
* protractor
	- webdriver-manager update
    - webdriver-manager start
    - protractor conf.js
* Jasmine 
    - Run SpecRunner.html


- $scope, $watch, $apply

##Filter
- Separate by pipe : lowercase, uppercase, reverse
<pre>
app.filter('makeUppercase', function () {
  return function (item) {
      return item.toUpperCase();
  };
});
</pre>

##Forms
- ng-valid: the model is valid
- ng-invalid: the model is invalid
- ng-valid-[key]: for each valid key added by $setValidity
- ng-invalid-[key]: for each invalid key added by $setValidity
- ng-pristine: the control hasn't been interacted with yet
- ng-dirty: the control has been interacted with
- ng-touched: the control has been blurred
- ng-untouched: the control hasn't been blurred
- ng-pending: any $asyncValidators are unfulfilled

##Directive
<pre>
myApp.directive('lineChart', function () {
    var baseWidth = 600;
    var baseHeight = 400;
    return {
        restrict: 'E',
        scope: {
            chartObject: '=dataset'
        },
        link: function (scope, element, attrs) {
            //element.append('&lt;canvas&gt;&lt;/canvas&gt;');
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

            scope.$watch('chartObject', function (newValue, oldValue) {
                if (newValue)
                    chart[options.type](scope.chartObject, {});
            }, true);
        },
        template : '&lt;canvas&gt;&lt;/canvas&gt;'
    };
});

</pre>

- ng-hide, ng-show, ng-enter, ng-leave

##ng-view
<pre>
&lt;div ng-view class=&quot;view-animate&quot;&gt;&lt;/div&gt;
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/Book/:bookId', {
        templateUrl: 'book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      });

    $locationProvider.html5Mode(true);
}])
</pre>