'use strict';

/* Filters */

angular.module('onlineStoreFilters', []).filter('filterBy', function() {
  return function(items, filterByField, value) {
	  if(typeof(filterByField) == 'undefined' || typeof(value) == 'undefined' ){
		  return items;
	  }
	  var anyFilterSelected = false;
  	  for(var i=0; i<value.length; i++){
  		  if(value[i].value){
  			anyFilterSelected = true;
  		  }
  	  }
  	  if(!anyFilterSelected){
  		return items;
  	  }
	  var result=[];
	  if(items != null ){
		  var size = items.length;
		  var item;
		    for(var index= 0; index < size; index++ ){
		    	item = items[index];
		    	//console.log(item[filterByField]);
		    	for(var i=0; i<value.length; i++){
		    		if( value[i].value && value[i].label=== item[filterByField] ){
			  	  		result.push(item);
			  	  	}	
		    	}
		    	
		    	
		    }  
	  }
	  
	    return result;
  };
});
