
		angular.module('videoManagement')
		.controller('ownerdetailsController',
['$scope','UsersFactory','UserFactory','DataFactory','$location','$window', '$rootScope',
 function($scope,UsersFactory,UserFactory,DataFactory,$location,$window, $rootScope)
 {
	console.log('im in the controller');
	$scope.text='';
	/*$scope.$on(DataFactory,function(){
		
		var text = DataFactory.getdata();
		$scope.text=text;
		console.log($scope.text);
	}
			
	
	);
	
	*/
	var text = DataFactory.getdata();
	$scope.text=text;
	console.log($scope.text);
	
	console.log(DataFactory.getdata);
console.log(DataFactory.ngoname);
	
	
	$scope.enroll = function(){
		
		
		console.log('inside ownerdetails controller enroll function');
		
	}
	
	
	
	

	
		
	
	
	
	
 }
	 
 ]		
);
