var onlineStoreAnimations = angular.module('onlineStoreAnimations', ['ngAnimate']);

onlineStoreAnimations.animation('.main-image', function(){
	var animateOnAddClass= function(element, className, done){
		if(className !== 'displayed'){
			return;
		}
		element.css({
			display: 'block',
			opacity: 0,
			top: '-500px'
		});
		
		jQuery(element).animate({
			//height:400
			opacity: 1,
			top: 0
			}, done);
		
		return function(cancel) {
		      if(cancel) {
		        element.stop();
		      }
		    };
	};
	var animateOnRemoveClass= function(element, className, done){
		if(className !== 'displayed'){
			return;
		}
		element.css({
			opacity: 1,
			top: 0
		});
		
		jQuery(element).animate({
			opacity: 0,
			top: 500
			}, done);

		return function(cancel) {
		      if(cancel) {
		        element.stop();
		      }
		 };
	};
	
	return {
		addClass : animateOnAddClass,
		removeClass: animateOnRemoveClass
	};
});