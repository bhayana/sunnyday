var app = angular.module('donateoneManagement', ['ngResource']);
app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                alert('image is loaded');
            });
        }
    };
});
app.controller("donateoneController",['$scope','$resource','eventData','GetInvoice', function($scope,$resource,eventData,GetInvoice) {
	$scope.city = {
	        name: "Lucknow"     
	    };
	 $scope.src ="https://www.google.com.ua/images/srpr/logo4w.png";
	
	$scope.activities =
	    [
	        "Delhi",
	        "Lucknow",
	        "Bangalore",
	        "Gurgaon"
	        
	    ];  
	
	
	
	$scope.$watch("city.name", function(newValue , oldValue)
			{
		console.log('hello');
		console.log($scope.city.name);
		$scope.ngolist=eventData.getNgoList({
			taskid:$scope.city.name
		});
		
		$scope.ngolist.$promise.then(function(test){
	    	$scope.onscreen=test.response;
	    	var parsed = JSON.parse($scope.onscreen);

	    	var arr = [];

	    	for(var x in parsed){
	    	  arr.push(parsed[x]);
	    	 
	    	  
	    	}
	    	 console.log(arr);
	    	 $scope.ngonames = arr;
	    	});
				
	
		
				return newValue;
			});
	
	
	$scope.username='testusername';
	$scope.invoicesImage=GetInvoice.getinvoices({
		taskid:$scope.username
	});
	
	
	 var xhr = new XMLHttpRequest();
     
     
     var hello='hello';
		var url='http://localhost:9999/SpringAngJs/rest/user/getInvoicesImage/uihello';
		console.log(url);
		xhr.open('POST', url);
		xhr.onload = function () {
		  if (xhr.status === 200) {
			  $scope.imageinvoice=xhr.responseText;
			  /*
			  
		    console.log('all done: ' + xhr.status);
		    retval ="";
	        for (var i=0; i<=xhr.responseText.length-1; i++)
	              retval += String.fromCharCode(xhr.responseText.charCodeAt(i) & 0xff);		
	                 
		  */} else {
		    console.log('Something went terribly wrong...');
		  }
		};
		
		xhr.send(null);
		
/*			"data:image/jpeg;base64," + encode64(xhr.responseText);
*/	/*	return false;*/
	
	
	
	

	
	
	
	
/*	
	$scope.invoicesImage.$promise.then(function(test){
    	var rt=test.data;
    	var rtlen=test.data.length;
    	for(var j=0;j<rtlen;j+=1)
    		{
    		binary+=String.fromCharCode(rt.charCodeAt(j) & 0xff)
    		}
    	 base64Image = 'data:image/jpeg;base64,' + window.btoa(binary);
    	
    	var parsed = JSON.parse($scope.onscreen);
    	var arr = [];
    	for(var x in parsed){
    	  arr.push(parsed[x]);
    	}
    	 
    	 $scope.images = arr;
    	});
*/
	
	/*$scope.$watch("ngo.name", function(newValue , oldValue)
			{
		console.log('hello');
		
		$scope.username='testusername';
		$scope.ngolist=eventData.getInvoice({
			taskid:$scope.username
		});
		
		$scope.ngolist.$promise.then(function(test){
	    	$scope.onscreen=test.response;
	    	var parsed = JSON.parse($scope.onscreen);

	    	var arr = [];

	    	for(var x in parsed){
	    	  arr.push(parsed[x]);
	    	 
	    	  
	    	}
	    	 console.log(arr);
	    	 $scope.ngonames = arr;
	    	});
		
		
    	$scope.ngonames = arr;
				
				return newValue;
			});*/
	
	
	
   /* $scope.event = eventData.getEvent();
*/    }]);