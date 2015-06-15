'use strict';

var directives = angular.module('onlineStoreDirectives', []);

directives.directive('filterMenu', function(){
    return {
        restrict: 'E',
        scope:
        {
        	classNamePrefix:"@",
        	label: "@",
        	addClass: "@",
            iconSrc: "=",
            filterArr: "=",
            menuClick: "&",
            filterValueChanged: "&"
            
        },
        templateUrl: 'scripts/directives/filter-menu.html'
//        template: 
//        	'<div class="filter-header category-filter-header" '
//        	+'ng-click="menuClick({className:classNamePrefix} );"'
//        	+'>'
//    		+'<img ng-src="{{iconSrc}}" class="expand-collapse"/> {{label}}'
//    		+'</div>'
//    		
//    		+'<div class="filter-body category-filter-body">'
//    		+'	<div ng-repeat="item in filterArr track by filterCheckboxArr[$index]" class="filter-item">'
//    		+'		<input type="checkbox"   ng-model="filterArr[$index]" '
//    		+'			ng-change="filterValueChanged( {filter:filterArr,index:$index} )" '
//    		+'		/>&nbsp;{{ filterCheckboxArr[$index] }}'
//    		+'	</div>'
//    		+'</div>'

    };

})


