mainApp.controller('contactCtrl', function($scope, $http) {
		var headerTitleMsg="Get in touch!";	
		$scope.setTitle(headerTitleMsg);



			$scope.GetInTouchBtnClick = function(){
		cleanAllCon();

					$.ajax({
					type: "POST",
					url:  "messageConnect.php", 
					data: $('form.message-form').serialize(),
					dataType    : 'json', 
					encode          : true,
					success: function(data){
		
						if ( ! data.success) {
					
								// handle errors
								if (data.errors.name) {
									$('#name-group').addClass('has-error'); // add the error class to show red input
									$('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
								}
								if (data.errors.mail) {
									$('#email-group').addClass('has-error'); // add the error class to show red input
									$('#email-group').append('<div class="help-block">' + data.errors.mail + '</div>'); // add the actual error message under our input
								}
								if (data.errors.mailText) {
									$('#message-group').addClass('has-error'); // add the error class to show red input
									$('#message-group').append('<div class="help-block">' + data.errors.mailText + '</div>'); // add the actual error message under our input
								}


							} else {

								alert("Thank you for your message");
								
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