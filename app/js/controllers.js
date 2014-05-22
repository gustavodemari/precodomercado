'use strict';

/* Controllers */
var app = angular.module('precodomercado.controllers', []);

  app.controller('MyCtrl1', ['$scope', function($scope) {

  }]);

  app.controller('MyCtrl2', ['$scope', function($scope) {

  }]);

  app.controller('SectorsCtrl', ['$scope', function($scope) {
    $scope.sectors = [
      {
        name: 'Sector1'
      },
      {
        name: 'Sector2'
      },
      {
        name: 'Sector3'
      }
    ];
  }]);
