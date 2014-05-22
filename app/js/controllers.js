'use strict';

/* Controllers */
var app = angular.module('precodomercado.controllers', []);

  app.controller('MyCtrl1', ['$scope', function($scope) {

  }]);

  app.controller('MyCtrl2', ['$scope', function($scope) {

  }]);

  app.controller('SectorsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.sectors = [];

    var YAHOO_API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.sectors&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';

    $http.get(YAHOO_API_URL)
    .success(function(data){
      console.log(data);
      if(data.query.results){
        $scope.sectors = data.query.results.sector;
      }
    });

  }]);

  app.controller('IndustryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.industry = [];

    var YAHOO_API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.industry%20where%20id%3D%22'+$routeParams.industryId+'%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';

    $http.get(YAHOO_API_URL)
    .success(function(data){
      console.log(data);
      if(data.query.results){
        $scope.industry = data.query.results.industry;
      }
    });

  }]);
