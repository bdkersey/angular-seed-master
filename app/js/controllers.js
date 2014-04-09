'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
	$scope.car = {make: 'honda',
				  model: 'Civic',
				  year: 2014,
				  price: 24000
				  };
				  
	$scope.AvailableYears = ["2010","2011","2012","2013","2014"];
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
	$scope.cars =[{make: 'Honda',model: 'Civic',year: 2014, price: 24000},
				  {make: 'honda',model: 'Civic2',year: 2012, price: 24000},
				  {make: 'honda',model: 'Civic3',year: 2013, price: 24000},
				  {make: 'honda',model: 'Civic4',year: 2011, price: 24000}];
				  

  }]);