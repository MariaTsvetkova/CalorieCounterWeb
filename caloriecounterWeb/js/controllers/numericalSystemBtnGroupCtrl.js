mainApp.controller('NumSystemCtrl', function($scope, $http) {


	
	$scope.MetricBtnClick=function(){
		document.getElementById("label-weight").innerHTML ="Weight (kg):";
		document.getElementById("label-height").innerHTML ="Height (cm):"; 

	}

	$scope.ImperialBtnClick=function(){
		document.getElementById("label-weight").innerHTML ="Weight (pounds):";
		document.getElementById("label-height").innerHTML ="Height (inches):";
	}



});