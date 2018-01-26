<?php
function json_response($code = 200, $message = null)
{
    // clear the old headers
    header_remove();
    // set the header to make sure cache is forced
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    // treat this as json
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        500 => '500 Internal Server Error'
        );
    // ok, validation error, or failure
    header('Status: '.$status[$code]);
    // return the encoded json
    return json_encode(array(
    'status' => $code < 300, // success or not?
    'message' => $message
    ));
}

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

// if you did not send files by using FormData() // Если небыл использован FormData()
if(empty($_FILES))
{
	$_POST = json_decode(file_get_contents('php://input'),true);
}

$method = $_SERVER['REQUEST_METHOD'];
$email = "rossmotors@yandex.ru";
$separator = md5(date('r', time()));
//--------
//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = $email;
	$form_subject = trim($_POST["form_subject"]);
	//echo '<script type="text/javascript">'.json_encode((array) $_FILES).'   '.json_encode((array) $_POST).'</script>';
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
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	// $admin_email  = trim($_GET["admin_email"]);
	$admin_email  = $email;
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
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

$message = "<table style='width: 100%;'>".$message."</table>";


$headers = "From: ".adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
"Reply-To: ".$admin_email.'' . PHP_EOL.
"MIME-Version: 1.0" . PHP_EOL .
"Content-Type: multipart/mixed; boundary=\"".$separator."\"". PHP_EOL. PHP_EOL;

/*$bodyMail = "--".$separator . PHP_EOL; // начало тела письма, выводим разделитель
$bodyMail .= "Content-Type: text/html; charset=UTF-8". PHP_EOL; // кодировка письма
$bodyMail .= "Content-Transfer-Encoding: 7bit". PHP_EOL. PHP_EOL;*/
//$bodyMail .= $message. PHP_EOL; // добавляем текст письма  

//echo '<script type="text/javascript">'.json_encode((array) $_FILES).'   '.json_encode((array) $_POST).'</script>';
if(!empty($_FILES)){

		$file = $_FILES['file'];

		echo '<script type="text/javascript">'.$file['name'][0].'</script>';
        $bodyMail = "--$separator". PHP_EOL; // начало тела письма, выводим разделитель
        $bodyMail .= "Content-type: text/html; charset='utf-8'". PHP_EOL; // кодировка письма
        $bodyMail .= "Content-Transfer-Encoding: quoted-printable". PHP_EOL. PHP_EOL; // задаем конвертацию письма
        $bodyMail .= $message. PHP_EOL. PHP_EOL; // добавляем текст письма
        for($item = 0; $item < count($file['name']); ++$item)
        {
			$bodyMail .= "--$separator". PHP_EOL;
	        //echo '<script type="text/javascript"> '.json_encode($file[$item]).' '.json_encode($item).'  '.json_encode($file['tmp_name'][$item]).'</script>';
	        $fileRead = fopen($file['tmp_name'][$item], "r"); // открываем файл
	        $contentFile = fread($fileRead, filesize($file['tmp_name'][$item])); // считываем его до конца
	        fclose($fileRead); // закрываем файл
	        $bodyMail .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode(basename($file['name'][$item]))."?=". PHP_EOL; 
	        $bodyMail .= "Content-Transfer-Encoding: base64". PHP_EOL. PHP_EOL;
	        $bodyMail .= chunk_split(base64_encode($contentFile))."". PHP_EOL; 

	        
        }
         // кодировка файла
        //echo '<script type="text/javascript">'.json_encode(contentFile).'   '.json_encode((array) $_POST).'</script>';
        //$bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file['name'][0]))."?=". PHP_EOL. PHP_EOL;
        // кодируем и прикрепляем файл
        $bodyMail .= "--".$separator ."--";
        //echo json_response(200, "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.");
    // письмо без вложения
    }else{
    	$bodyMail = "--$separator". PHP_EOL;
    	$bodyMail .= "Content-Type: text/html; charset=UTF-8". PHP_EOL; // кодировка письма
		$bodyMail .= "Content-Transfer-Encoding: quoted-printable". PHP_EOL. PHP_EOL;
        $bodyMail .= $message. PHP_EOL;
        $bodyMail .= "--".$separator."--"; 
        //echo json_response(200, "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.");
    }
mail($admin_email, adopt($form_subject),  $bodyMail, $headers );
?>