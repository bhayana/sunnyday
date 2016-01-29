angular
.module('userManagement')
.factory('userService',
['$http',
 function($http) {
	var factory = {};
	
	/*get code commented
	 * factory.getAllCategories = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/SpringAngJs/rest/user/findall'
		});
	};*/
	
	factory.getAllCategories = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/SpringAngJs/rest/user/findall',
				 headers : {
			            'Content-Type' : "application/json"
			        }
		});
	};
	
	
	
	return factory;
}]);