var app = angular.module('ngooneManagement', ['ngResource']);


app.directive('fileModel', ['$parse', function ($parse) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function(){
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
}]);

app.controller('ngooneController',['$scope','$resource', 'eventData',function($scope,$resource,eventData) {

	$scope.withoutbills = [
	                       {descwobills: "desc1wobills", amountwobills: "amount1wobills"},
	                       {descwobills: "desc2wobills", amountwobills: "amount2wobills"},
	                       {descwobills: "desc3wobills", amountwobills: "amount3wobills"}
	                       ];


	function getRandomSpan(){
		return Math.floor((Math.random()*1024)+1);
	};

	function setInvoicewithoutbills(){
		console.log('im in without bills');
		/*
		$scope.result=eventData.setInvoiceDetails({
			taskid:$scope.number,
			uiusername:$scope.username,
			uiinvoicedescription:[$scope.desc1wobills,$scope.desc2wobills],
			uiamount:[$scope.amount1wobills,$scope.amount2wobills]
		});
		$scope.result.$promise.then(function(test){
			$scope.onscreen=test.response;
			console.log($scope.onscreen);   				    	
		});

	*/}

	function setthirdInvoicedetails(){

		console.dir($scope.attach3);
		console.log(angular.isUndefined($scope.attach3));
		if(!(angular.isUndefined($scope.attach3))){
			$scope.number=3;
			var number=3;
			var file = $scope.attach1;
			var formData = new FormData();
			formData.append('file',file);
			var xhr = new XMLHttpRequest();
			var randomnumber=getRandomSpan();
			var url='http://localhost:8080/SpringAngJs/rest/user/uploadInvoices/'+number;
			console.log(url);
			xhr.open('POST', url);
			xhr.onload = function () {
				if (xhr.status === 200) {		
					success1='true';
					$scope.result=eventData.setInvoiceDetails({
						taskid:$scope.number,
						uiusername:$scope.username,
						uiinvoicedescription:$scope.desc3,
						uiamount:$scope.amnt3
					});
					$scope.result.$promise.then(function(test){
						$scope.onscreen=test.response;
						console.log($scope.onscreen);   				    	
					});

					console.log('all done: ' + xhr.status);  				    
				} else {
					console.log('Something went terribly wrong...');
				}
			};

			xhr.send(formData);
			return true;		
		}else{
			setInvoicewithoutbills();
		}
	}


	function setsecondInvoicedetails(){
		console.dir($scope.attach2);
		console.log(angular.isUndefined($scope.attach2));
		if(!(angular.isUndefined($scope.attach2)))
		{
			$scope.number=2;
			var number=2;
			var file = $scope.attach2;
			var formData = new FormData();
			formData.append('file',file);
			var xhr = new XMLHttpRequest();
			var randomnumber=getRandomSpan();
			var url='http://localhost:8080/SpringAngJs/rest/user/uploadInvoices/'+number;
			console.log(url);
			xhr.open('POST', url);
			xhr.onload = function () {
				if (xhr.status === 200) {		
					success1='true';
					$scope.result=eventData.setInvoiceDetails({
						taskid:$scope.number,
						uiusername:$scope.username,
						uiinvoicedescription:$scope.desc2,
						uiamount:$scope.amnt2
					});
					$scope.result.$promise.then(function(test){
						$scope.onscreen=test.response;
						console.log($scope.onscreen);   				    	
					});
					setthirdInvoicedetails();
					console.log('all done: ' + xhr.status);  	

				} else {
					console.log('Something went terribly wrong...');
				}
			};

			xhr.send(formData);
			return true;
		}else
			{
			setthirdInvoicedetails();
			}

	}


	$scope.nextNgo=function(){



		$scope.username='testusername';
		var file = $scope.attach1;
		console.log(angular.isUndefined($scope.attach1));

		console.log('file is');
		console.dir($scope.attach1);
		var success1='false';
		if(!(angular.isUndefined($scope.attach1)))
		{
			$scope.number=1;
			var number=1;
			var file = $scope.attach1;
			var formData = new FormData();
			formData.append('file',file);
			var xhr = new XMLHttpRequest();
			var randomnumber=getRandomSpan();
			var url='http://localhost:8080/SpringAngJs/rest/user/uploadInvoices/'+number;
			console.log(url);
			xhr.open('POST', url);
			xhr.onload = function () {
				if (xhr.status === 200) {		
					success1='true';
					$scope.result=eventData.setInvoiceDetails({
						taskid:$scope.number,
						uiusername:$scope.username,
						uiinvoicedescription:$scope.desc1,
						uiamount:$scope.amnt1
					});
					$scope.result.$promise.then(function(test){
						$scope.onscreen=test.response;
						console.log($scope.onscreen);   				    	
					});

					console.log('all done: ' + xhr.status); 
					setsecondInvoicedetails();
				} else {
					console.log('Something went terribly wrong...');
				}
			};

			xhr.send(formData);
			return true;
		}else{
			setsecondInvoicedetails();
		}




	}

}]);