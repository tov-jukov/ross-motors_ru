<?php

	$project_name = "dfdfdf";
	$admin_email  = "tov-jukof@ya.ru";
	$form_subject = "fdfdf";


$message = "test";


$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, $form_subject, $message, $headers );

?>