mainApp.controller('bmiCalculatorCtrl', function($scope, $http) {
		var headerTitleMsg="Body mass index (BMI)!";	
		$scope.setTitle(headerTitleMsg);



		$scope.BmiBtnClick = function(){
		cleanAllCon();

					$.ajax({
					type: "POST",
					url:  "bmiTest.php", 
					data: $('form.bmi-form').serialize(),
					dataType    : 'json', 
					encode          : true,
					success: function(data){
		
						if ( ! data.success) {
					
								// handle errors
								if (data.errors.weight) {
									$('#weight-group').addClass('has-error'); // add the error class to show red input
									$('#weight-group').append('<div class="help-block">' + data.errors.weight + '</div>'); // add the actual error message under our input
								}
								if (data.errors.height) {
									$('#height-group').addClass('has-error'); // add the error class to show red input
									$('#height-group').append('<div class="help-block">' + data.errors.height + '</div>'); // add the actual error message under our input
								}

							} else {

								$('.result-group').removeClass("hidden");
								$resultMessage="Dear friend,<br> Your body mass index (BMI) is <b>"+data.BMI; 
								$('.result-content').append('<div class="result-block" id="result-block" >' + $resultMessage + '</div>');
								$('.result-content').append('<img  src="public/sagome_danzanti.png" alt="have fun">');
								
							}

					},
					error: function(){
						alert("failure");
					}
				});
				event.preventDefault();

		

		}

		function cleanAllCon(){
			cleanErrMsg();
			$('.result-content').html("");
			$('.result-group').addClass('hidden');
		
		}
		function cleanErrMsg(){
				$('.form-group').removeClass('has-error'); // remove the error class
				$('.help-block').remove(); // remove the error text
		}




	});