mainApp.controller('mainCtrl', function($scope, $http) {
		$scope.setTitle=function(titleMsg){
			$scope.headerTitleMsg=titleMsg;
		}


		$(".nav a").on("click", function(){
		   $(".nav").find(".active").removeClass("active");
		   $(this).parent().addClass("active");
		});





});