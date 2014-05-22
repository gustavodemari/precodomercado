'use strict';


// Declare app level module which depends on filters, and services
angular.module('precodomercado', [
  'ngRoute',
  'precodomercado.filters',
  'precodomercado.services',
  'precodomercado.directives',
  'precodomercado.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/sectors', {templateUrl: 'partials/sectors.html', controller: 'SectorsCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
