<!DOCTYPE html>
<html ng-app="imageapp" ng-controller="imageController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href= "resources/js/css/bootstrap.min.css"/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js" type="text/javascript"></script>
	<script>
	
	function upload(){
	    var file = $('input[name="upload_file"]').get(0).files[0];

	    var formData = new FormData();
	    formData.append('file', file);
	    
var hello='hello';
	    $.ajax({
	        url: 'http://localhost:8080/SpringAngJs/rest/user/upload_file',
	        type: 'POST',
	        data: formData,
	        
	        contentType: false,
	        headers: {
                'Access-Control-Allow-Origin' : 'http://localhost:8080',

            },

	        
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
	        }
	    });
	}
	
	
	function uploadtest(){
		console.log('inside uploadtest method');
	    var file = $('input[name="upload_file"]').get(0).files[0];

	    var formData = new FormData();
	    formData.append('file', file);
	    
			var hello='hello';
			var xhr = new XMLHttpRequest();
			var url='http://localhost:8080/SpringAngJs/rest/user/upload_file/'+hello;
		
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
	
	
	</script>
	
	
</head>
<body>

  
 	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <p>Choose : <input type="file" name="upload_file" /></p>
    <button id="upload_btn" onclick="uploadtest()">Start Uploading</button>
 
 
<h1>RESTful Web Service - File Upload Example</h1>  
 <!-- <form action="http://localhost:8080/SpringAngJs/rest/user/upload_file" method="post"
                                               enctype="multipart/form-data">  
 <p>  
   Select a file to Upload to server: <input type="file" name="file" size="60" />  
 </p>  
 <input type="submit" value="Upload File" />  
</form> 
 -->
</body>
</html>