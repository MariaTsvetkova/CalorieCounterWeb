//mainApp.module('mainApp.controllers').controller('bmrCalculatorCtrl', ['$scope', '$http', function($scope, $http) {}]);

mainApp.controller('bmrCalculatorCtrl', function($scope, $http) {
	var headerTitleMsg="Harris Benedict equation - Determination of the basal metabolic rate (BMR)!";	
	$scope.setTitle(headerTitleMsg);




	$scope.CalculateBtnClick = function(){
		cleanAllCon();

					$.ajax({
					type: "POST",
					url:  "test.php", 
					data: $('form.userDatas').serialize(),
					dataType    : 'json', 
					encode          : true,
					success: function(data){
					console.log($('form.userDatas').serialize);
						if ( ! data.success) {
					
								// handle errors
								if (data.errors.name) {
									$('#name-group').addClass('has-error'); // add the error class to show red input
									$('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
								}
								if (data.errors.age) {
									$('#age-group').addClass('has-error'); // add the error class to show red input
									$('#age-group').append('<div class="help-block">' + data.errors.age + '</div>'); // add the actual error message under our input
								}
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
								$resultMessage="Dear <b>"+data.name+ "</b>,<br> Your estimated Basal Metabolic Rate (BMR) is <b>"+data.BMR+ "kcal/day</b>. <br>A rough estimate of the number of calories required per day based on your current activity level is: <b>"+data.dailyKlNeeded+"kcal/day</b>";

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
				
	



	$('.modal').on('hidden.bs.modal', function(){
			cleanErrMsg();
			$(this).find('form')[0].reset();				
	});





	

		function cleanAllCon(){
			cleanErrMsg();
			$('.result-content').html("");
			$('.result-group').addClass('hidden');
		
		}
		function cleanErrMsg(){
				$('.form-group').removeClass('has-error'); // remove the error class
				$('.help-block').remove(); // remove the error text
		}







	$scope.SendEmailBtnClick=function(){

		$mail=$("input#email").val();
				var node = document.getElementById('result-block'),
				$mailText = node.textContent;
				cleanErrMsg();
				$.ajax({
					type: "POST",
					url:  "emailtest.php", 
					data: {"mail": $mail, "mailText":$mailText},
					dataType    : 'json', 
					encode          : true,
					success: function(data){
					console.log($('modalSendToEmail').serialize);	
					if ( ! data.success) {
								// handle errors
								if (data.errors.mail) {
									$('#email-group').addClass('has-error'); // add the error class to show red input
									$('#email-group').append('<div class="help-block">' + data.errors.mail + '</div>'); 
								}else{
									alert(data.answer);
							
								}

							} else {
								alert(data.answer);
							
								
							}

					},
					error: function(){
						alert("failure, maybe there is some errors to send the mail, verify your server options");
					
					}
				});
				event.preventDefault();

	}

	$scope.CleanFormBtnClick=function(){
		cleanAllCon();	
	}




});