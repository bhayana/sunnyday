<!DOCTYPE html>
<html ng-app="videoManagement" ng-controller="ownerdetailsController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href= "resources/js/css/bootstrap.min.css"/>
</head>
<body>



<form name="myForm"class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Name:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="ownername" placeholder="Ngo Owner Name">
    </div>
  </div> 
   <div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Telephone No:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="ownertelno" placeholder="Ngo Owner Tel No.">
    </div>
  </div> 
   
   <div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Email address:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="owneremail" placeholder="Ngo Owner Email Address">
    </div>
  </div> 
  
  <div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Address Line1:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="owneraddressline1" placeholder="Ngo Owner Address Line1">
    </div>
  </div>
  <div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Address Line2:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="owneraddressline2" placeholder="Ngo Owner Address Line2">
    </div>
  </div>
<div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Country:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="ownercountry" placeholder="Ngo Owner Country">
    </div>
 </div>

<div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner City:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="ownercity" placeholder="City">
    </div>
  </div>
<div class="form-group">
    <label class="col-sm-2 control-label">Ngo Owner Pin:</label>
    <div class="col-sm-10">
    <input type="text" ng-model="ownerpin" placeholder="Area Pin">
    </div>
  </div>
<a ng-click="enroll()" class="btn btn-small btn-primary">Enroll</a>
</form>




	


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
		src="resources/js/controller/ownerdetails-controller.js"></script>
	
	
</body>
</html>