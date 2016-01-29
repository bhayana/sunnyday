<!DOCTYPE html>
<html lang="en">
  <head>
    <title>AngularJS Routing example</title>
  </head>
 
  <body ng-app="sampleApp">
 
    <div class="container">
        <div class="row">
        <div class="col-md-3">
            <ul class="nav">
                <li><a href="#AddNewOrder"> Add New Order </a></li>
                <li><a href="#ShowOrders"> Show Order </a></li>
            </ul>
        </div>
        <div class="col-md-9">
            <div ng-view></div>
        </div>
        </div>
    </div>
    <script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
	<script type="text/javascript" src="resources/js/lib/angular-resource.js"></script>
	<script type="text/javascript"
		src="resources/js/lib/angular-route.min.js"></script>
		<script type="text/javascript"
		src="resources/js/lib/angular-route.js"></script>
 	<script type="text/javascript"
		src="resources/js/controller/routing-config.js"></script>
  </body>
</html>