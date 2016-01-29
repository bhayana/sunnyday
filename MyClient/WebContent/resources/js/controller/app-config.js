/*var myModule = angular.module('videoManagement',[]);
myModule.factory('mySharedService',function($rootScope)

	{
	var sharedService = {};
	sharedService.ngoname='';
	sharedService.prepForBroadcast = function(msg){
		this.ngoname();

	};
	sharedService.ngoname=function(){
		$rootScope.$broadcast('handleBroadcast');

	};
	return sharedService;
		}
);

function videoController($scope, mySharedService)
{
	$scope.handleClick=function(msg){
		mySharedService.prepForBroadcast(msg);
	};
	$scope.message = 'ONE' + mySharedService.ngoname;
}

*/

/*angular
.module('videoManagement',['ngRoute']);

angular
.module('videoManagement')
.config(['$routeProvider',
         function($routeProvider) {
	$routeProvider
	.when('/user',{
		templateUrl : 'user.html',
		controller : 'videoController'

	})
},*/

function videoController($scope)
{
	
	$scope.$watch("name", function(newValue , oldValue)
	{
		if($scope.ngoname.length > 0)
		{
			$scope.hellomessage = "Hello"+$scope.ngoname;
		}
		
	}		
	
	);
	
	
	}

angular.module('videoManagement',[])
.config(['$routeProvider',function($routeProvider)
         {
			$routeProvider.when(
					'/home',{templateUrl:'fillngodetails.jsp',
					controller:videoController	
					}).otherwise({redirctTo:'/home'});
         }
         ]
);

var app = angular.module('videoManagement', ['ngResource']);

app.controller('videoController', function($scope, $http){
  $scope.myForm = {};
});


angular.module('videoManagement',[]);
angular.module('videoManagement').factory('messages',function(){
	var messages={};
	messages.list=[];
	
	messages.add=function(message){
		messages.list.push({id:messages.list.length,text:message})
	};
	
	return messages;
});



