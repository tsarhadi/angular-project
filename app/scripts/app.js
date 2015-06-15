'use strict';

// Declare app level module which depends on views, and components
angular.module('onlineStoreApp', [
  'ngRoute',
  'onlineStoreControllers',
  'onlineStoreFilters',
  'onlineStoreAnimations',
  'onlineStoreServices',
  'onlineStoreDirectives'
]).
config(['$routeProvider',
	  function($routeProvider) {
		    $routeProvider.
		      when('/welcomePage', {
		        templateUrl: 'views/welcome.html',
		        controller: 'WelcomeCtrl'
		      }).
		      when('/shoesCatalogue', {
			        templateUrl: 'views/shoes-catalogue.html',
			        controller: 'ShoesCatalogueCtrl'
			  }).
		      when('/shoesDetails/:shoesId', {
		        templateUrl: 'views/shoes-details.html',
		        controller: 'ShoesDetailsCtrl'
		      }).
		      otherwise({
		        redirectTo: '/welcomePage'
		      });
		  }]);
