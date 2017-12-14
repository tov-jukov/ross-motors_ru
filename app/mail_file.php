<?php

$method = $_SERVER['REQUEST_METHOD'];
$email = "tov-jukof@ya.ru";
$c = true;
if ( $method === 'POST' ) {
    $project_name = trim($_POST["project_name"]);
    $admin_email  = $email;
    $form_subject = trim($_POST["form_subject"]);
    foreach ( $_POST as $key => $value ) {
        if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
            </tr>
            ";
        }
    }
}


if (array_key_exists('file', $_FILES)) {
    require '../vendor/autoload.php';
    // Create a message
    $mail = new PHPMailer;
    $mail->setFrom($admin_email, '');
    $mail->addAddress($admin_email, $project_name);
    $mail->Subject = $form_subject;
    $mail->isHTML(true);
    $mail->Body = $message;
    //Attach multiple files one by one
    for ($ct = 0; $ct < count($_FILES['file']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['file']['name'][$ct]));
        $filename = $_FILES['file']['name'][$ct];
        if (move_uploaded_file($_FILES['file']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
    if (!$mail->send()) {
        $msg .= "Mailer Error: " . $mail->ErrorInfo;
    } else {
        $msg .= "Message sent!";
    }
}

?>