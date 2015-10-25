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
           when('/candidates/1', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           when('/candidates/2', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           when('/candidates/3', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           when('/candidates/4', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           when('/candidates/5', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           when('/candidates/6', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           when('/candidates/7', {
             templateUrl: 'partials/candidates.html',
             controller: 'candidatesController'
           }).
           otherwise({
             redirectTo: '/'
           });
      }]);


    // create the controller and inject Angular's $scope

    votersEdApp.controller('mainController', function($scope, $http) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';

        $http.get('js/articles.json').success(function(data){
          $scope.articles = data;
        });
    });

    votersEdApp.controller('candidatesController', function($scope) {
        $scope.message = 'Look! I am an candidates page.';
    });

    votersEdApp.controller('regInfoController', function($scope) {
        $scope.message = 'Registration information goes here.';
    });

    votersEdApp.controller('subsController', function($scope) {
        $scope.message = 'Subscribe to receive notifications here.';

        $scope.email = {
          text: 'me@example.com'
        };
        $scope.phone = {
          number: 5555555555
        };
        $scope.carriers = [
          {name:'sprint', email: '@messaging.sprintpcs.com'},
          {name : 'att', email: '@txt.att.net'},
          {name : 'verizon', email: '@vtext.com'}
        ];

        $scope.myCarrier = $scope.carriers[0];
    });

    votersEdApp.controller('candidatesController', function($scope) {
        $scope.democrats = [
          {'name': 'Hillary Clinton',
           'pic': 'img/cands/1.jpg',
           'link': 1},
          {'name': "Martin O'Malley",
           'pic': 'img/cands/2.jpg',
           'link': 2},
          {'name': 'Bernie Sanders',
           'pic': 'img/cands/3.jpg',
           'link': 3}
        ];

        $scope.republicans = [
        {'name': 'Jeb Bush',
         'pic': 'img/cands/4.jpg',
          'link': "#candidates"},
        {'name': "Ben Carson",
         'pic': 'img/cands/5.jpg',
          'link': "#candidates"},
        {'name': 'Chris Christie',
         'pic': 'img/cands/6.jpg',
          'link': "#candidates"},
         {'name': 'Ted Cruz',
         'pic': 'img/cands/7.jpg',
          'link': "#candidates"},
        {'name': "Carly Fiorina",
         'pic': 'img/cands/8.jpg',
          'link': "#candidates"},
        {'name': 'Jim Gilmore',
         'pic': 'img/cands/9.jpg',
          'link': "#candidates"},
         {'name': 'More republicans here ...',
         'pic': 'img/cands/10.jpg',
          'link': "#candidates"},

      ];
  });
