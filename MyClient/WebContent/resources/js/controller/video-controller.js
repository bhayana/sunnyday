

		angular.module('videoManagement')
		.controller('videoController',
['$scope','UsersFactory','UserFactory','fileUpload','DataFactory','$location','$window', '$rootScope','fileUpload',
 function($scope,UsersFactory,UserFactory,fileUpload,DataFactory,$location,$window, $rootScope,fileUpload)
 {
	console.log('im in the controller');
	
	console.log($rootScope.currentUser);
	console.log($window.sessionStorage.getItem('usertype',$scope.category));
	
	
	$scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }
	
	
	$scope.$watch("ngoname", function(newValue , oldValue)
			{
				if($scope.ngoname !='f')
				{
					$scope.hellomessage = "Hello "+$scope.ngoname;
				}
				return newValue;
			}		
			);
	
	
	//start of choose.jsp page sumbit button
	$scope.submitCategory=function(){
		console.log($scope.category);
	if($scope.category == 'donator')
		{
		var url = $window.location.host
		console.log(url);
		$window.location.href = 'ngologin.jsp';
		}
	else
	{
		fileUpload.loggedIn('ngo');
		var url = $window.location.host
		console.log(url);
		console.log($rootScope.test);
		$window.location.href = 'ngologin.jsp';
		
	}
	};
	
	//end of choose.jsp page sumbit button	
	
	//start of ngologin.jsp page register us button
	
	$scope.registerNgo = function(){
		
		$window.location.href = 'fillngodetails.jsp';
	}
	
   $scope.login = function(){
	   /*console.log($rootScope.msg);
	   fileUpload.loggedIn('ngo');
	   var test = fileUpload.currentUser();
	   console.log(test);
	   */
	   /*UserFactory.update({
			taskid:$scope.carcolor,
			uingoname:$scope.ngoname,
			uifoundationname:$scope.foundationname,
				
		});*/
	   console.log($window.sessionStorage.getItem('usertype',$scope.category));
	   $scope.logincategory = $window.sessionStorage.getItem('usertype',$scope.category);
	   if($scope.logincategory='ngo'){
		   console.log('inside ngo login ');
		   $window.location.href = 'ngoaddbills.jsp';
	   }else{
		   $window.location.href = 'donatorviewinvoices.jsp';
		   console.log('inside donator login ');
	   }
	    		
	}
	
	//start of fillngodetails.jsp page register us button

	$scope.add = function()
	{
		var f=document.getElementById('file').files[0],
			r= new FileReader();
		r.onloadend = function(e)
		{
			var image=e.target.result;
			console.log(image);
			var fd = new FormData();
			fd.append('file',image);
			fd.append('file_name',f.name);
			fileUpload.uploadFileToUrl({fileid:fd});
		}
		r.readAsBinaryString(f);
	}
	
	function getRandomSpan(){
	    return Math.floor((Math.random()*6)+1);
	  };
	
	$scope.nextNgo = function(){
		console.log('inside nextngo');
		 var file = $scope.upload_file;
		 var formData = new FormData();
		 
		 formData.append('file',file);
		 formData.append("key", "6528448c258cff474ca9701c5bab6927");
	     
		 var xhr = new XMLHttpRequest();
	     
	     var randomnumber=getRandomSpan();
	     console.log(randomnumber);
	     
	     var hello='hello';
			var url='http://localhost:8080/SpringAngJs/rest/user/upload_file/'+randomnumber;
			console.log(url);
			xhr.open('POST', url);
			xhr.onload = function () {
			  if (xhr.status === 200) {
				  
			    console.log('all done: ' + xhr.status);

			    console.log('inside next ngo')
				$scope.carcolor = 'red';
				$scope.result=UserFactory.update({
					taskid:$scope.randomnumber,
					uingoname:$scope.ngoname,
					uifoundationname:$scope.foundationname,
					
					uingotype :$scope.ngotype,
					uingoemail:$scope.ngoemail,
					uingoownername:$scope.ngoownername,
					uicontactno :$scope.contactno,
					
					uingoaddressline1:$scope.ngoaddressline1,
					uingoaddressline2:$scope.ngoaddressline2,
					uingocountry:$scope.ngocountry,
					uingocity:$scope.ngocity,
					uingopin:$scope.ngopin,
					
					uiownername:$scope.ownername,
					uiownertelno:$scope.ownertelno,
					uiowneremailid:$scope.owneremail,
					uiowneraddressline1:$scope.owneraddressline1,
					uiowneraddressline2:$scope.owneraddressline2,
					uiownercountry:$scope.ownercountry,
					uiownercity:$scope.ownercity,
					uiownerpin:$scope.ownerpin
					
				});
				console.log('the result');
			    $scope.result.$promise.then(function(test){
			    	$scope.onscreen=test.response;
			    	console.log($scope.onscreen);   				    	
			    	});
			  } else {
			    console.log('Something went terribly wrong...');
			  }
			};
			
			xhr.send(formData);
			return false;
		
		
		
		
		
		
		/*UserFactory.enrollNgo({
			uingoname:$scope.ngoname,
			uifoundationname:$scope.foundationname,
			uingotype :$scope.ngotype,
			uingoemail:$scope.ngoemail,
			uingoownername:$scope.ngoownername,
			uicontactno :$scope.contactno,
			uingoaddressline1:$scope.ngoaddressline1,
			uingoaddressline2:$scope.ngoaddressline2,
			uingocountry:$scope.ngocountry,
			uingocity:$scope.ngocity,
			uingopin:$scope.ngopin
			});
		*/
		
		 /*$rootScope.rootngoname =$scope.ngoname; 
		 console.log($rootScope.rootngoname);
     	 DataFactory.dataflow($scope.ngoname);
		$window.location.href = 'ownerdetails.jsp';*/
	}
	
	function uploadtest(){
		console.log('inside uploadtest method');
		nextNgo();
	    var file = $('input[name="upload_file"]').get(0).files[0];

	    var formData = new FormData();
	    formData.append('file', file);
	    
			var hello='hello';
			var xhr = new XMLHttpRequest();
			var url='http://localhost:8080/SpringAngJs/rest/user/upload_file/'+$scope.hello;
		
			console.log(url);
			xhr.open('POST', url, true);
			xhr.onload = function () {
			  if (xhr.status === 200) {
			    console.log('all done: ' + xhr.status);
			  } else {
			    console.log('Something went terribly wrong...');
			  }
			};
			
			xhr.send(formData);
			return false;

	}

	
	//start of query
	$scope.query=function(){
	$scope.users=UsersFactory.query();
	//console.log(users);
    console.log($scope.users);
    
    $scope.users.$promise.then(function(test){
	$scope.onscreen=test.response;
	console.log($scope.onscreen);
	console.log(JSON.parse($scope.onscreen));
	$scope.ot = JSON.parse($scope.onscreen);
	
	
		console.log(angular.toJson($scope.onscreen));
		
		
	
	});
	
 };
    //end of query
	
 //start of create new user function
	$scope.createNewUser=function(){
		console.log('im in the function');
		console.log($scope.user);
	UsersFactory.create($scope.user);
	console.log('im in the function');
	
	};
	//end of createnewuser function
	
	//start of update function
	//******************************
	
	$scope.updateUser=function(){
		$scope.carcolor = 'red';
		UserFactory.update({taskid:$scope.carcolor});
	
	};
	
	//******************************
	//end of update function
	
	/*$scope.uploadedFile = function(element) {
		 $scope.$apply(function($scope) {
		   $scope.files = element.files;         
		 });
		}*/
	
	 
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var fd = new FormData();
        	 fd.append('file',file);
                
        jQuery.ajax({
            url: 'http://localhost:8080/SpringAngJs/rest/user/upload_file',
            type: 'POST',
            data: fd,
            cache: false,
            contentType: false,
            processData: false,
            success: function(){
                alert('file upload complete');
            },
            error: function(response){
                var error = "error";
                if (response.status === 409){
                    error = response.responseText;
                }
                alert(error);
            },
            xhr: function() {
                var myXhr = $.ajaxSettings.xhr();
                if (myXhr.upload) {
                    myXhr.upload.addEventListener('progress', progress, false);
                } else {
                    console.log('Upload progress is not supported.');
                }
                return myXhr;
            }
        });
        
        function progress(e) {
            if (e.lengthComputable) {
                $('#progress_percent').text(Math.floor((e.loaded * 100) / e.total));
                $('progress').attr({value:e.loaded,max:e.total});
            }
        }
        
    };
    
	
	
 }
	 
 ]		
);
		
		angular.module('videoManagement').directive('fileModel', ['$parse', function ($parse) {
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
		
		
		  angular.module('videoManagement').directive('numbersOnly', function () {
			      return {
			          require: 'ngModel',
			          link: function (scope, element, attr, ngModelCtrl) {
			              function fromUser(text) {
			                  if (text) {
			                      var transformedInput = text.replace(/[^0-9]/g, '');

			                      if (transformedInput !== text) {
			                          ngModelCtrl.$setViewValue(transformedInput);
			                          ngModelCtrl.$render();
			                      }
			                      return transformedInput;
			                  }
			                  return undefined;
			              }            
			              ngModelCtrl.$parsers.push(fromUser);
			          }
			      };
			  });