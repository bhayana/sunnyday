var scotchApp = angular.module('videoManagement', []);

    
    scotchApp.controller('chooseController', function($scope,$window,$rootScope) {

       
        $scope.message = 'Everyone come and see how good I look!';
        $rootScope.currentUser = $scope.category;
        $scope.submitCategory=function(){
    		console.log($scope.category);
    		$window.sessionStorage.setItem('usertype',$scope.category);
    	if($scope.category == 'donator')
    		{
    		var url = $window.location.host
    		console.log(url);
    		$window.location.href = 'ngologin.jsp';
    		}
    	else
    	{
    		
    		var url = $window.location.host
    		console.log(url);
    		$window.location.href = 'ngologin.jsp';
    		
    	}
    	};
        
        
        
    });