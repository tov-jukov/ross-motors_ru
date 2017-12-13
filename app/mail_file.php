<?php
/**
 * Created by PhpStorm.
 * User: Jakim
 * Date: 08.11.2017
 * Time: 3:37
 */
function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$method = $_SERVER['REQUEST_METHOD'];

$email = "tov-jukof@ya.ru";

$c = true;
if ( $method === 'POST' ) {

    $project_name = trim($_POST["project_name"]);
    // $admin_email  = trim($_POST["admin_email"]);
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

$EOL = PHP_EOL; // "\r\n" ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём 
$boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.
$subject_text = $form_subject;
$subject= adopt($subject_text);
$message = "<table style='width: 100%;'>$message</table>";
$headers    = "MIME-Version: 1.0;" . $EOL . "";
$headers   .= "Content-Type: multipart/mixed; boundary=\"" . $boundary . "\"" . $EOL . "";
$headers   .= "From: ".adopt($project_name).' <'.$admin_email.'>' . $EOL .'Reply-To: '.$admin_email.''.$EOL;

$multipart  = "--" . $boundary . $EOL;
$multipart .= "Content-Type: text/html; charset=utf-8" . $EOL . "";
$multipart .= "Content-Transfer-Encoding: base64" . $EOL . "";
$multipart .= $EOL; // раздел между заголовками и телом html-части
$multipart .= chunk_split(base64_encode($message));

#начало вставки файлов
$_FILESarr = $_FILES["file"];
$_POSTarr = (array)$_POST;
echo $_FILESarr;
$js_objFILES = json_encode($_FILESarr);
$js_objPOST = json_encode($_POSTarr);
print "<script language='javascript'> var obrt = $_FILESarr2; var obj2=$js_objPOST;console.log(obj2); var obj=$js_objFILES;console.log(js_objFILES); alert(obj);</script>";

//["file"]["name"] 
foreach($_POST['file'] as $value){
    echo  $value;
    /*$filename = $_FILES["file"]["tmp_name"][$key];
    $file = fopen($filename, "rb");
    $data = fread($file,  filesize( $filename ) );
    fclose($file);
    $NameFile = $_FILES["file"]["name"][$key]; // в этой переменной надо сформировать имя файла (без всякого пути);
    $File = $data;
    $multipart .=  "" . $EOL . "--" . $boundary . $EOL . "";
    $multipart .= "Content-Type: application/octet-stream; name=\"" . $NameFile . "\"" . $EOL . "";
    $multipart .= "Content-Transfer-Encoding: base64" . $EOL . "";
    $multipart .= "Content-Disposition: attachment; filename=\"" . $NameFile . "\"" . $EOL . "";
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла
    $multipart .= chunk_split(base64_encode($File));*/

}
$array = (array)$_POST['file'];
for ($ct = 0; $ct < count($_POST['file']); $ct++) {
        echo  $ct;
    }
#>>конец вставки файлов

$multipart .= "" . $EOL . "--" . $boundary . "--" . $EOL . "";

if(!mail($admin_email, $subject, $multipart, $headers)){
    echo 'Письмо не отправлено';
} //Отправляем письмо
else{
    echo 'Письмо отправлено';
}
?>