'use strict';

var services = angular.module('onlineStoreServices', []);

services.factory('guessDetails', function(){
	var obj = {};
	obj.guestName = "";
	obj.setGuestName = function(name){
		obj.guestName = name;
	}
	obj.getGuestName = function(){
		return obj.guestName;
	}
	return obj;
})

