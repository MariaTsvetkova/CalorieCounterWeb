<?php 


$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data



if (empty($_POST['weight'])){
		$errors['weight'] = 'Weight is required.';
}else if(!is_numeric($_POST['weight']) || $_POST['weight']<1 ){
	$errors['weight'] = 'Only numbers and not negative.';
}
if (empty($_POST['height'])){
		$errors['height'] = 'Height is required.';
}else if(!is_numeric($_POST['height']) ||  $_POST['height']<1 ){
	$errors['height'] = 'Only numbers and not negative.';
}

if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		$BMI = (int)$_POST['weight'] / pow( ((int)$_POST['height'])/100,2) ;


		$data['success'] = true;
		$data['message'] = 'Success!';
		$data['BMI']=number_format($BMI,2);
		
		
}

echo json_encode($data);


 ?>