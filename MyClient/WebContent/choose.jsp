<!DOCTYPE html>
<html ng-app="videoManagement" ng-controller="chooseController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href= "resources/js/css/bootstrap.min.css"/>
	<script>
	
	</script>
</head>
<body>
<form name="categoryForm">
 <div class="selectionBox">
 
      <h2>Please select your category</h2>
      <div id="optionsAreaTop">
         <label class="labelSize" for="NGO"><input type="radio" name='userCategory' ng-model="category" value="ngo" required/>NGO</label>
	 <label class="labelSize" for="Donator"><input type="radio" name='userCategory' ng-model="category" value="donator" required>Donator</label>
	 
<span class="error" ng-show="categoryForm.userCategory.$error.required && submitted == true"><i class="fa fa-exclamation-circle"></i>Please select an answer.</span>

	<a ng-click="submitCategory()" class="btn btn-small btn-primary">Start</a>

<a href="#/home">Home</a>
<div ng-view></div>

      </div>
   </div>
   </form>
	
	<div class="footer">Please God! Make it work!</div>


	<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
	<script type="text/javascript" src="resources/js/lib/angular-resource.js"></script>
	<script type="text/javascript"
		src="resources/js/lib/angular-route.min.js"></script>

 <!-- 	<script type="text/javascript"
		src="resources/js/controller/app-config.js"></script>
  -->
	<script type="text/javascript"
		src="resources/js/controller/choose-controller.js"></script>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js" type="text/javascript"></script>
</body>
</html>