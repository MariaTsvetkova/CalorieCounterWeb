<?php
$headers         = $_POST['mail']. "\r\n";
$name       = '$_POST['name']';
$subject    = 'Get in touch';
$text       = $_POST['mailText'];
$headers 	= "MIME-Version: 1.0" . "\r\n";
$headers 	.= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$to 	.= 'From: <noreplay@test.ee>';


$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

if (empty($_POST['mail'])){
		$errors['mail'] = 'Email is required.';
}else if (!filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
		$errors['mail'] = "Invalid email format"; 
}
if (empty($_POST['name'])){
		$errors['name'] = 'Name is required.';
}
if (empty($_POST['mailText'])){
		$errors['mailText'] = 'Message is required.';
}


	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		$message =' You received  a mail from '.$name;
		$message .='. Results : '.$text;

		if(mail($to, $subject,$message, $headers)){
			$data['success'] = true;
			$data['answer']= 'mail successful send';
		}
		
	}
	echo json_encode($data);


?>