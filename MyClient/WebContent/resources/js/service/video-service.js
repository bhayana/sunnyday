var app = angular.module('videoManagement', ['ngResource']);
//var app = angular.module('orderdetailsManagement', ['ngResource']);

app.factory('UsersFactory',function($resource, $http,$log){
	console.log('inside video get post service');
	return $resource('http://localhost:8080/SpringAngJs/rest/user',{},{	
	query : {
		method : 'GET',
			params: {user :'@user'} ,
			headers: {
                'Content-Type':  'application/json ;charset=utf-8'
            }	,
			isArray: false, 
			 transformResponse: [function(data, headersGetter) {
	                $log.info(data); // returns true
	                return { response: data };
	            }].concat($http.defaults.transformResponse)
	}
	// end of get query method	
	})
}
);

app.factory('UsersFactory',function($resource, $http,$log){
	console.log('inside video get post service');
	return $resource('http://localhost:8080/SpringAngJs/rest/getInvoices/ihello',{},{	
		getInvoices : {
		method : 'GET',
			params: {user :'hi'} ,
			headers: {
                'Content-Type':  'application/json ;charset=utf-8'
            }	,
			isArray: false, 
			 transformResponse: [function(data, headersGetter) {
	                $log.info(data); // returns true
	                return { response: data };
	            }].concat($http.defaults.transformResponse)
	}
	// end of get query method	
	})
}
);



app.factory('UserFactory',function($resource, $http,$log){
	console.log('inside video get post service');
	return $resource('http://localhost:8080/SpringAngJs/rest/user',{},{
		
	/*	create : {
			method : 'POST',
				params: {id: 'testdata'} ,
				headers: {
	                'Content-Type':  'application/json ;charset=utf-8'
	            }	
		},
	*/
	//start of get query method 
	query : {
		method : 'GET',
			params: {user :'@user'} ,
			headers: {
                'Content-Type':  'application/json ;charset=utf-8'
            }	,
			isArray: false, 
			 transformResponse: [function(data, headersGetter) {
	                $log.info(data); // returns true
	                return { response: data };
	            }].concat($http.defaults.transformResponse)
	}
	// end of get query method	
		
	})
}
);

//start of enrollNgo function
//******************************

app.factory('UserFactory',function($resource , $http,$log){
	console.log('inside video put service');
	return $resource('http://localhost:8080/SpringAngJs/rest/user/enrollNgo/ihello',{},{	
		enrollNgo : 
		{ 
			method : 'PUT',params: {
				
					uingoname:'@uingoname',
					uifoundationname:'@uifoundationname',
					uingotype :'@uingotype',
					uingoemail:'@uingoemail',
					uingoownername:'@uingoownername',
					uicontactno :'@uicontactno',
					uingoownername:'@uingoownername',
					uingoaddressline1:'@uingoaddressline1',
					uingoaddressline2:'@uingoaddressline2',
					uingocountry:'@uingocountry',
					uingocity:'@uingocity',
					uingopin:'@uingopin'
					}, 
			headers: {'Content-Type':  'application/json ;charset=utf-8'}	,
			isArray: false, 
			transformResponse: [function(data, headersGetter) {
		            $log.info(data); // returns true
		            return { response: data };
			}].concat($http.defaults.transformResponse)		
		}})	
});


//******************************
//end of enrollNgo function

//start of update function
//******************************

app.factory('UserFactory',function($resource , $http,$log){
	console.log('inside video put service');
	return $resource('http://localhost:8080/SpringAngJs/rest/user/update/uihello',{},{	
		update : 
		{ 
			method : 'PUT',
			params: 
			{taskid: '@taskid',uingoname : '@uingoname', uifoundationname:'@uifoundationname',uingotype :'@uingotype',
				uingoemail:'@uingoemail',
				uingoownername:'@uingoownername',
				uicontactno :'@uicontactno',
				
					uingoaddressline1:'@uingoaddressline1',
					uingoaddressline2:'@uingoaddressline2',
					uingocountry:'@uingocountry',
					uingocity:'@uingocity',
					uingopin:'@uingopin',

						uiownername:'@uiownername',
						uiownertelno:'@uiownertelno',
						uiowneremailid:'@uiowneremailid',
						uiowneraddressline1:'@uiowneraddressline1',
						uiowneraddressline2:'@uiowneraddressline2',
						uiownercountry:'@uiownercountry',
						uiownercity:'@uiownercity',
						uiownerpin:'@uiownerpin'		
			
			
			
			}, 
			headers: {'Content-Type':  'application/json ;charset=utf-8'}	,
			isArray: false, 
			transformResponse: [function(data, headersGetter) {
		            $log.info(data); // returns true
		            return { response: data };
			}].concat($http.defaults.transformResponse)		
		}})	
}



);


//******************************
//end of update function


app.factory('DataFactory',function($rootScope,$timeout)

		{
		var service = {};
		service.ngoname=false;
		
		service.dataflow = function(msg){
			console.log(msg);
			this.ngoname = msg;
			 $timeout(function(){
			$rootScope.$broadcast('DataFactory');
			 },100);

		};
	service.getdata = function()
		{
			console.log(this.ngoname);
			return this.ngoname;
		}
		return service;
			}
	);


app.factory('fileUpload',function($rootScope){
	
	return {
	currentUser : function() { return  $rootScope.currentUser; },
	loggedIn : function(user) 
	{ 
		
		 $rootScope.currentUser = user; 
		}
}

}
);