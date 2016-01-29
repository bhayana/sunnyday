var app=angular.module('donateoneManagement')

app.factory('eventData', function ($resource, $log, $q,$http) {
	console.log('inside video put service');
	return $resource('http://localhost:9999/SpringAngJs/rest/user/ngolist/uihello',{},{	
		getNgoList : 
		{ 
			method : 'GET',
			params: 
			{taskid: '@taskid'			}, 
			headers: {'Content-Type':  'application/json ;charset=utf-8'}	,
			isArray: false, 
			transformResponse: [function(data, headersGetter) {
		            $log.info(data); // returns true
		            return { response: data };
			}].concat($http.defaults.transformResponse)		
		}})	
});

app.factory('GetInvoice', function ($resource, $log, $q,$http) {
	console.log('inside video put service');
	return $resource('http://localhost:9999/SpringAngJs/rest/user/getInvoicesImage/uihello',{},{	
		getinvoices : 
		{ 
			method : 'GET',
			params: 
			{taskid: '@taskid'			}, 
			headers: {'Content-Type': 'image/jpeg'}	,
			isArray: false, 
			transformResponse: [function(data, headersGetter) {
		            $log.info(data); // returns true
		            return { response: data };
			}].concat($http.defaults.transformResponse)		
		}})	
});


