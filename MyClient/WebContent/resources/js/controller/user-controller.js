angular.module('userManagement')
.controller('userController',
['$scope','userService',
 function($scope,userService)
 {
	userService.getAllCategories()
	.success(function(response)
	{
		console.log("OMW");
		$scope.users=response;
		console.log(response);
		//console.log(JSON.parse(users));
		$scope.anya='im in a controller';
		//console.log(anya);
		
	}		
	);

	
	
 }
 
 ]		
);
