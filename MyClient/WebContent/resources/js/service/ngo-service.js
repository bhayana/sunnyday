angular.module('ngooneManagement')
.factory('eventData', function ($resource, $log, $q,$http) {
	console.log('inside video put service');
	return $resource('http://localhost:8080/SpringAngJs/rest/user/uploadInvoicesDetail/uihello',{},{	
		setInvoiceDetails : 
		{ 
			method : 'PUT',
			params: 
			{taskid: '@taskid',
				uiusername : '@uiusername', 
				uiinvoicedescription :'@uiinvoicedescription',
				uiamount:'@uiamount'
				
				} ,
			headers: {'Content-Type':  'application/json ;charset=utf-8'}	,
			isArray: false, 
			transformResponse: [function(data, headersGetter) {
		            $log.info(data); // returns true
		            return { response: data };
			}].concat($http.defaults.transformResponse)		
		}})	
});