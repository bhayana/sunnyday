<!DOCTYPE html>
<html ng-app="donateoneManagement" ng-controller="donateoneController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href="resources/js/css/bootstrap.min.css" />
</head>
<body>

<h2> Choose the city in which you want to do donation</h2>
<form>
Choose a city
        <select data-ng-model="city.name"
                data-ng-options="city for city in activities">                
        </select>

Choose the Ngo Name
 <select data-ng-model="ngo.name"
                data-ng-options="ngo for ngo in ngonames" class="dropdown" width="200" >   
                 <option value="">Select one</option>             
        </select>
        
      <!--   <input type="file" name="image" ng-model="image" file-model="image"
					placeholder="Ngo Authorization Letter" required> -->
       <img ng-src="{{base64Image}}" style="height: 15em ; width: 15em " imageonload>
<div >
       <img ng-src="data:image/JPEG;base64,{{imageinvoice}}" imageonload />
       <a href="http://localhost:9999/SpringAngJs/rest/user/getInvoicesImage/uihello">clickme</a>
</div>
<div>
Pay as per invoices:
List of invoices:

Pay without invoices:

Pay Random:

Button Pay

</div>



</form>

	<form name="myForm" class="form-horizontal" novalidate>
	
	<!-- <img ng-src="http://localhost:9999/SpringAngJs/rest/user/getInvoices/hello" width="120" height="120"/>
	 --></form>


	<div class="footer">Please God! Make it work!</div>

	<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
	<script type="text/javascript"
		src="resources/js/lib/angular-resource.js"></script>
	<script type="text/javascript"
		src="resources/js/lib/angular-route.min.js"></script>
	<script type="text/javascript"
		src="resources/js/controller/donatorone-controller.js"></script>
<script type="text/javascript"
		src="resources/js/service/donatorone-service.js"></script>
</body>
</html>