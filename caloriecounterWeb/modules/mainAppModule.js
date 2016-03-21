var mainApp = angular.module("webApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: 'partials/bmrCalculator.html', controller: 'bmrCalculatorCtrl'
   }).
   
   when('/bmiCalculator', {
      templateUrl: 'partials/bmiCalculator.html', controller: 'bmiCalculatorCtrl'
   }).
      when('/contact', {
      templateUrl: 'partials/contactForm.html', controller: 'contactCtrl'
   }).
    otherwise({
        redirectTo: '#/'
    });
	
}]);