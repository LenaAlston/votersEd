 // create the module and name it votersEdApp
    var votersEdApp = angular.module('votersEdApp', ['ngRoute']);

    // configure our routes
    votersEdApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'partials/home.html',
            controller: 'mainController'
          }).
          when('/candidates', {
            templateUrl: 'partials/candidates.html',
            controller: 'candidatesController'
          }).
          when('/regInfo', {
            templateUrl: 'partials/regInfo.html',
            controller: 'regInfoController'
          }).
          when('/subs', {
            templateUrl: 'partials/subs.html',
            controller: 'subsController'
          }).
          otherwise({
            redirectTo: '/'
          });
      }]);


    // create the controller and inject Angular's $scope

    votersEdApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.email = {
          text: 'me@example.com'
        };
        $scope.phone = {
          number: 5555555555
        };
    });

    votersEdApp.controller('candidatesController', function($scope) {
        $scope.message = 'Look! I am an candidates page.';
    });

    votersEdApp.controller('regInfoController', function($scope) {
        $scope.message = 'Registration information goes here.';
    });

    votersEdApp.controller('subsController', function($scope) {
        $scope.message = 'Subscribe to receive notifications here.';
    });
