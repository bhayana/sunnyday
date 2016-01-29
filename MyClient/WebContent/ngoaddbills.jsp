<!DOCTYPE html>
<html ng-app="ngooneManagement" ng-controller="ngooneController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href="resources/js/css/bootstrap.min.css" />
</head>

<body>
<form>
	<div>
		<h3 style="padding-left: 5%; border: thin;">Add Invoive Details
			with Bills</h3>
		<div class="container">
			<table class="table-bordered">
				<thead>
					<tr>
						<th><label>Bill Description</label> <input type="text"
							ng-model="desc1" placeholder="Bill Description">
						</th>
						<th><label>Bill Amount</label> <input type="text"
							ng-model="amnt1" placeholder="Bill Amount" >
						</th>
						<th><label>Attach Bill</label> 
						<input type="file"	
						
						file-model=attach1 ></th>
							<th>
							
					</th>
							</tr>
							
							<tr>
						<th><label>Bill Description</label> <input type="text"
							ng-model="desc2" placeholder="Bill Description">
						</th>
						<th><label>Bill Amount</label> <input type="text"
							ng-model="amnt2" placeholder="Bill Amount" >
						</th>
						<th><label>Attach Bill</label> <input type="file"
							ng-model="attach2" name="attach2"
							file-model=attach2 ></th>
							</tr>
							
							<tr>
						<th><label>Bill Description</label> <input type="text"
							ng-model="desc3" placeholder="Bill Description">
						</th>
						<th><label>Bill Amount</label> <input type="text"
							ng-model="amnt3" placeholder="Bill Amount" >
						</th>
						<th><label>Attach Bill</label> <input type="file"
							ng-model="attach3" name="attach3"
							file-model=attach3 ></th>
							</tr>
				</thead>
			</table>
		</div>

		<h3 style="padding-left: 5%; border: thin;">Add Invoive Details
			without Bills</h3>
		<div class="container" ng-repeat="wobill in withoutbills">
			<table class="table-bordered">
				<thead>
					<tr>
						<th><label>Bill Description</label> <input type="text"
							ng-model="$parent[wobill.descwobills]" placeholder="Bill Description">
						</th>
						<th><label>Bill Amount</label> <input type="text"
							ng-model="$parent[wobill.amountwobills]" placeholder="Bill Amount">
						</th>
					</tr>
				</thead>
			</table>
		</div>




	</div>

	 <a  class="btn btn-small btn-primary" ng-click="nextNgo()" >Next</a> 
	<!-- <button type="submit" ng-click="nextNgo()" 
	ng-disabled="!(!!shipment.userPreference1 || !!shipment.userPreference2  || !!shipment.userPreference3)">Submit</button>
	 -->
	 </form>
</body>




<div class="footer">Please God! Make it work!</div>

<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
<script type="text/javascript"
	src="resources/js/lib/angular-resource.js"></script>
<script type="text/javascript"
	src="resources/js/lib/angular-route.min.js"></script>

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type="text/javascript"
	src="resources/js/controller/ngoone-controller.js"></script>
	<script type="text/javascript"
		src="resources/js/service/ngo-service.js"></script>



</body>
</html>