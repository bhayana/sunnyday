<!DOCTYPE html>
<html ng-app="videoManagement" ng-controller="videoController">
<head>
<meta charset="ISO-8859-1">
<title>Index</title>
<link type="text/css" rel="stylesheet"
	href="resources/js/css/bootstrap.min.css" />
</head>
<body>

<h2> Please fill all the mandatory fields</h2>

	<form name="myForm" class="form-horizontal" novalidate>
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Name:</label>
			<div class="col-sm-10">
				<input type="text" name="ngoname" ng-model="ngoname"
					placeholder="Ngo Name" required> <span style="color: red"
					ng-show="myForm.ngoname.$dirty && myForm.ngoname.$invalid">
					<span ng-show="myForm.ngoname.$error.required"> Ngoname is
						required </span>
				</span>
			</div>
		</div>

		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">Foundation Name:</label>
			<div class="col-sm-10">
				<input type="text" name="foundationname" ng-model="foundationname"
					placeholder="Foundation Name" required> 
					<span style="color: red"
					ng-show="myForm.ngoname.$dirty && myForm.ngoname.$invalid">
					<span ng-show="myForm.foundationname.$error.required"> Foundation Name is
						required </span>
				</span>
			</div>
		</div>

	
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo type</label>
			<div class="col-sm-10">
				<input type="text" ng-model="ngotype" name="ngotype"
					placeholder="Private/Government" required>
					<span style="color: red"
					ng-show="myForm.ngoname.$dirty && myForm.ngoname.$invalid">
					<span ng-show="myForm.ngoname.$error.required"> Ngoname is
						required </span>
				</span>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Email address:</label>
			<div class="col-sm-10">
				<input type="text" name="ngoemail" ng-model="ngoemail"
					placeholder="Ngo Email Address" required>
					<span style="color: red" ng-show="myForm.ngoemail.$dirty && myForm.ngoemail.$invalid">
					<span ng-show="myForm.ngoemail.$error.required"> Ngo Email is required </span>
					<span ng-show="myForm.ngoemail.$error.required"> Ngo Email is invalid </span>
				</span>
			</div>
		</div>
		
		
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Owner Name:</label>
			<div class="col-sm-10">
				<input type="text" name="ngoownername" ng-model="ngoownername"
					placeholder="Ngo Owner Name" required>
					<span style="color: red" ng-show="myForm.ngoownername.$dirty && myForm.ngoownername.$invalid">
					<span ng-show="myForm.ngoownername.$error.required"> ngoownername is required </span>
					</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Contact No:</label>
			<div class="col-sm-10">
				<input type="text" name="contactno" ng-model="contactno" numbers-only
					placeholder="Contact No." required>
					<span style="color: red" ng-show="myForm.contactno.$dirty && myForm.contactno.$invalid">
					<span ng-show="myForm.ngoownername.$error.required"> Contact no is required and should be numeric</span>
					</span>
			</div>
		</div>
		
		<div>
  
  <p>Demo of AngularJS Numbers Only Directive</p>
  
  <p>Input below will accept only numbers.</p>

  <p><input type="text" ng-model="val" numbers-only class="form-control" /></p>
      
  
</div>
		
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Address Line1:</label>
			<div class="col-sm-10">
				<input type="text" name="ngoaddressline1" ng-model="ngoaddressline1"
					placeholder="Ngo Address Line1" required>
					<span style="color: red" ng-show="myForm.ngoaddressline1.$dirty && myForm.ngoaddressline1.$invalid">
					<span ng-show="myForm.ngoaddressline1.$error.required"> ngo Address line 1 is required </span>
					</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Address Line2:</label>
			<div class="col-sm-10">
				<input type="text" name="ngoaddressline2" ng-model="ngoaddressline2"
					placeholder="Ngo Address Line2" required>
					<span style="color: red" ng-show="myForm.ngoaddressline2.$dirty && myForm.ngoaddressline2.$invalid">
					<span ng-show="myForm.ngoaddressline2.$error.required"> Ngo Address line2 is required </span>
					</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Country:</label>
			<div class="col-sm-10">
				<input type="text" name="ngocountry" ng-model="ngocountry"
					placeholder="Ngo Country" required>
					<span style="color: red" ng-show="myForm.ngocountry.$dirty && myForm.ngocountry.$invalid">
					<span ng-show="myForm.ngocountry.$error.required"> Ngo Country is required </span>
					</span>
			</div>
		</div>

		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo City:</label>
			<div class="col-sm-10">
				<input type="text" name="ngocity" ng-model="ngocity" ng-model="ngocity"
					placeholder="City" required>
					<span style="color: red" ng-show="myForm.ngocity.$dirty && myForm.ngocity.$invalid">
					<span ng-show="myForm.ngocity.$error.required"> Ngo City is required </span>
					</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Pin:</label>
			<div class="col-sm-10">
				<input type="text" name="ngopin" ng-model="ngopin" ng-model="ngopin" numbersOnly
					placeholder="Area Pin" required>
					<span style="color: red" ng-show="myForm.ngopin.$dirty && myForm.ngopin.$invalid">
					<span ng-show="myForm.ngocountry.$error.required"> Area pin is required </span>
					</span>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">Ngo Authorization
				Letter:</label>
			<div class="col-sm-10">
				<input type="file" name="upload_file" ng-model="upload_file" file-model="upload_file"
					placeholder="Ngo Authorization Letter" required>
					<span style="color: red" ng-show="myForm.image.$dirty && myForm.image.$invalid">
					<span ng-show="myForm.image.$error.required"> Authorization letter from government is required </span>
					</span>
			</div>
		</div>
		
		 
		
		
		
		
		<p ng-show="myForm.username.$error.required">Your username is
			required.</p>

<!-- 		<input type="button" value="Next" ng-click="ShowHide()"
			ng-disabled="myForm.$invalid" />
 -->			
		<div >
			<table>

			<div class="form-group">
				<label class="col-sm-2 control-label">Ngo Owner Name:</label>
				<div class="col-sm-10">
					<input type="text" ng-model="ownername"
						placeholder="Ngo Owner Name">
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-2 control-label">Ngo Owner Telephone 
					No:</label>
				<div class="col-sm-10">
		<input type="text" ng-model="ownertelno"
						placeholder="Ngo Owner Tel No." numbersOnly>
						<p class="alert" ng-show="myForm.ownertelno.$error.pattern">Numbers only, please.</p> 
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-2 control-label">Ngo Owner Email
					address:</label>
				<div class="col-sm-10">
					<input type="text" ng-model="owneremail"
						placeholder="Ngo Owner Email Address">
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-2 control-label">Ngo Owner Address
					Line1:</label>
				<div class="col-sm-10">
					<input type="text" ng-model="owneraddressline1"
						placeholder="Ngo Owner Address Line1">
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-2 control-label">Ngo Owner Address
					Line2:</label>
				<div class="col-sm-10">
					<input type="text" ng-model="owneraddressline2"
						placeholder="Ngo Owner Address Line2">
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-2 control-label">Ngo Owner Country:</label>
				<div class="col-sm-10">
					<input type="text" ng-model="ownercountry"
						placeholder="Ngo Owner Country">
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

		</div>
	</tr>	
		<tr>
		
		<a ng-click="nextNgo()" class="btn btn-small btn-primary" >Next</a>
		 <!-- <a ng-click="handleClick()" class="btn btn-small btn-primary">handlebroad</a> -->
</tr>
		
		</table>
	</form>









	<div class="footer">Please God! Make it work!</div>

	<script type="text/javascript" src="resources/js/lib/angular.min.js"></script>
	<script type="text/javascript"
		src="resources/js/lib/angular-resource.js"></script>
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