<?php
class Enum {
    const level1  = 1.2;
    const level2 = 1.375;
	const level3 = 1.55;
	const level4 = 1.725;
	const level5 = 1.9;
}

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

if (empty($_POST['name'])){
		$errors['name'] = 'Name is required.';
}
if (empty($_POST['age'])){
		$errors['age'] = 'Age is required.';
}else if(!filter_var($_POST['age'], FILTER_VALIDATE_INT) || $_POST['age']<1){
	$errors['age'] = 'Invalid age format.';
}

if (empty($_POST['weight'])){
		$errors['weight'] = 'Weight is required.';
}else if(!is_numeric($_POST['weight']) || $_POST['weight']<1){
	$errors['weight'] = 'Only numbers and not negative.';
} 
if (empty($_POST['height'])){
		$errors['height'] = 'Height is required.';
}else if(!is_numeric($_POST['height']) || $_POST['height']<1){
	$errors['height'] = 'Only numbers and not negative.';
}





if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		
$answerStyle;		
	$BMR;
$dailyKlNeeded;	
switch($_POST["lify-style"]){
	case "level1":
		$answerStyle=Enum::level1;
		break;
	case "level2":
		$answerStyle=Enum::level2;
		break;
	case "level3":
		$answerStyle=Enum::level3;
		break;
	case "level4":
		$answerStyle=Enum::level4;
		break;
	case "level5":
		$answerStyle=Enum::level5;
		break;
		
	}	
	
	if($_POST['isMetricValue']){
		if($_POST['isMale']){
			$BMR = 66.5 + ( 13.75 *(int)$_POST['weight'] ) + ( 5.003 * (int)$_POST['height']) - ( 6.755 *(int)$_POST['age'] );
		}else{
			$BMR = 655.1 + ( 9.563 *(int)$_POST['weight'] ) + ( 1.850 * (int)$_POST['height'] ) - ( 4.676 *(int)$_POST['age'] );
		}
	}else{
		if($_POST['isMale']){
			$BMR = 66 + ( 6.2 *(int)$_POST['weight'] ) + ( 12.7* (int)$_POST['height']) - ( 6.76*(int)$_POST['age'] );
		}else{
			$BMR = 655.1 + ( 4.35 *(int)$_POST['weight'] ) + ( 4.7 * (int)$_POST['height'] ) - ( 4.7 *(int)$_POST['age'] );
		}
	}
	
	
		$dailyKlNeeded=$BMR *$answerStyle;
		$data['success'] = true;
		$data['message'] = 'Success!';
		$data['constindex']=$answerStyle;
		$data['BMR']=(int)$BMR;
		$data['dailyKlNeeded']=(int)$dailyKlNeeded;
		$data['name']=$_POST['name'];


		

		
	}
echo json_encode($data);


?>