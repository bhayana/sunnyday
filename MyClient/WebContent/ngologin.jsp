<!DOCTYPE html>
<html ng-app="videoManagement" ng-controller="videoController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href= "resources/js/css/bootstrap.min.css"/>
</head>
<body>

<form name="ngoform"></form>
<table >

 <div ng-include src="header.url"></div>
  <script type="text/ng-template" id="header.html"></script> 
	<tbody style="width:300px" >
	
	
	<tr>
	<label>Please login if already registered. If not, click on the register button to register yourself.</label>
		
		</tr>
	
		
		<tr>
		<td><label>Username</label></td>
		<td><input type="text" ng-model="username"/></td>
		</tr>
		
		<tr>
		<td><label>Password</label></td>
		<td><input type="text" ng-model="password"/></td>
		</tr>
		
		<tr>
		</tr>
		

</tbody>
</table>

	<a ng-click="login()" class="btn btn-small btn-primary">Login</a>
<button ng-click='registerNgo()' class="btn btn-small btn-primary">Register Us</button>
	<div class="footer">Please God! Make it work!</div>


	<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
	<script type="text/javascript" src="resources/js/lib/angular-resource.js"></script>
	<script type="text/javascript"
		src="resources/js/lib/angular-route.min.js"></script>

	<script type="text/javascript" src="https://www.google.com/jsapi"></script>


 	<script type="text/javascript"
		src="resources/js/controller/app-config.js"></script>
 	<script type="text/javascript"
		src="resources/js/service/video-service.js"></script>
	<script type="text/javascript"
		src="resources/js/controller/video-controller.js"></script>
	
	
</body>
</html>