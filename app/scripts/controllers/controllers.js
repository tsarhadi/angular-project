'use strict';

/* Controllers */

var onlineStoreControllers = angular.module('onlineStoreControllers', []);

onlineStoreControllers.controller('WelcomeCtrl', ['$scope','$http' ,'$location', 'guessDetails',
  function($scope, $http, $location, guessDetails) {
     $scope.guest = "";
     $scope.newArrivals=[];
     $http.get('resources/datasource/newArrivals.json')
	.success(function(data){
		$scope.newArrivals = data.newArrivals;
	       $scope.currentPhotoIndex = 0;
	       $scope.currentPhoto = $scope.newArrivals [$scope.currentPhotoIndex];
	});

     $scope.imageChange = function(){
  	   $('img.new-arrival').animate({
  		   opacity: 0
  	   }, 1400, $scope.slideToNextPhoto);
     }
     $scope.fadeout = function(){
  	   $('img.new-arrival').animate({
  		   opacity: 1
  	   }, 600, function(){});
     }
     $scope.slideToNextPhoto = function(){
  	   if($scope.currentPhotoIndex == $scope.newArrivals.length - 1){
  		   $scope.currentPhotoIndex = 0;
  	   }
  	   else{
  		   $scope.currentPhotoIndex =  $scope.currentPhotoIndex + 1;
  	   }
  	   console.log($scope.currentPhotoIndex);
  	   $scope.currentPhoto = $scope.newArrivals [$scope.currentPhotoIndex];
  	   $scope.$apply();
         $scope.fadeout();
     }
     $scope.enterSite = function(){
  	   clearInterval(newArrivalDisplay);
  	   guessDetails.setGuestName($scope.guest);
  	   $location.path('/shoesCatalogue');
         }
         var newArrivalDisplay = setInterval(function(){
      	   $scope.imageChange();
      	   } , 5000);
          
  }]);

onlineStoreControllers.controller('GuestNameCtrl', ['$scope', 'guessDetails',
      function($scope, guessDetails) {
  		$scope.guestName = guessDetails.getGuestName;
  }]);


onlineStoreControllers.controller('ShoesCatalogueCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.list = $http.get('resources/datasource/catalogue.json')
    					.success(function(data){
    						//console.log(data);
    						$scope.data = data;
    					});
    $scope.filterByOptions= {options: [{name:'Color', value:'color'}, 
                                       {name:'Price', value:'price'}, 
                                       {name:'Catergory', value:'category'}, 
                                       {name:'Name', value:'name'}]};
    $scope.filterByField = 'name';
    
    $scope.createArray = function(filterValues){
    	var arr = new Array();
    	for(var i=0 ; i <filterValues.length; i++){
    		var item = {};
    		item.label = filterValues[i];
    		item.value = false;
    		arr.push(item);
    	}
    	return arr;
    }
 
    $scope.guest = '' ;
    
    var colorCheckboxValues = ['All','Black','White','Silver','Blue','Red', 'Brown', 'Apricot'];
    $scope.colorFilter = $scope.createArray(colorCheckboxValues);

    var categoryCheckboxValues = ['All','High Heels','Low Heels','Flat','Boots'];
    $scope.categoryFilter = $scope.createArray(categoryCheckboxValues);
    
    $scope.setCheckboxesModel = function(arr, val){
    	for(var i = 0; i<arr.length; i++){
			arr[i].value = val;
		}
    }
    $scope.filterSelectAllChanged = function(arr){
    	var allChecked = arr[0] ;
    	if(allChecked) {
    		$scope.setCheckboxesModel(arr, true);
    	}
    	else {
    		$scope.setCheckboxesModel(arr, false);
    	}
    }
    $scope.filterByChanged = function(arr, index){
    	if(index == 0){
    		$scope.filterSelectAllChanged(arr);
    		return;
    	}
    	for(var i=1; i< arr.length; i++){
    		if (arr[i].value === false){
    			arr[0].value = false;
    			return;
    		}
    	}
    	arr[0].value = true;
    }
    $scope.menuIcon = { 
      		'category' : 'resources/images/icon/plus.png',
      		'color'    : 'resources/images/icon/plus.png',
    }
    
    $scope.expandOrCollapse = function(classNamePrefix){
    	var headerClassName = '.'+classNamePrefix + '-filter-header';
    	var bodyClassName = '.'+classNamePrefix + '-filter-body';
    	var dis = $(bodyClassName).css('display');
    	if(dis === 'none'){
    		$(bodyClassName).css('display','block');
    		$(headerClassName).addClass('filter-header-expanded');
    		$scope.menuIcon[classNamePrefix] = 'resources/images/icon/minus.png';
    	}
    	else{
    		$(bodyClassName).css('display','none');
    		$(headerClassName).removeClass('filter-header-expanded');
    		$scope.menuIcon[classNamePrefix] = 'resources/images/icon/plus.png';
    	}
    };
    //expand Color filter
    $scope.expandOrCollapse('color');
 //   $scope.$apply();
    
  }]);

onlineStoreControllers.controller('ShoesDetailsCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
       $scope.list = [];
       $http.get('resources/datasource/catalogue.json')
		.success(function(data){
			$scope.list = data.list;
			$scope.selectedShoes = $scope.findShoesById($routeParams.shoesId);
			$scope.mainImageURL = $scope.selectedShoes.photos[0];
		});
       $scope.findShoesById = function(id){
    	   for(var i=0; i<$scope.list.length; i++){
    		   if($scope.list[i].id === id){
    			   return $scope.list[i];
    		   }
    	   }
       }
       $scope.setMainImageURL = function(url){
    	   $scope.mainImageURL = url;
       }
}]);


