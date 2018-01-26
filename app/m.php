<?php

	$project_name = "dfdfdf";
	$admin_email  = "tov-jukof@ya.ru";
	$form_subject = "fdfdf";


$message = "test";


$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
// 'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
// 'Reply-To: '.$admin_email.'' . PHP_EOL;
// пример использования
$file = "./files/test.txt"; // файл
$mailTo = "admin@vk-book.ru"; // кому
$from = "test@files.com"; // от кого
$subject = "Test file"; // тема письма
$message = "Тестовое письмо с вложением"; // текст письма
$r = sendMailAttachment($mailTo, $from, $subject, $message, $file); // отправка письма c вложением
echo ($r)?'Письмо отправлено':'Ошибка. Письмо не отправлено!';



sendMailAttachment($admin_email, $form_subject, $message, $headers );
//$r = sendMailAttachment($mailTo, $from, $subject, $message); // отправка письма без вложения
//echo ($r)?'Письмо отправлено':'Ошибка. Письмо не отправлено!';
 
/**
* Отправка письма с вложением
* @param string $mailTo
* @param string $from
* @param string $subject
* @param string $message
* @param string|bool $file - не обязательный параметр, путь до файла
* 
* @return bool - результат отправки
*/
 
function sendMailAttachment($mailTo, $from, $subject, $message, $file = false){
    $separator = "---"; // разделитель в письме
    // Заголовки для письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from\nReply-To: $from\n"; // задаем от кого письмо
    $headers .= "Content-Type: multipart/mixed; boundary=\"$separator\""; // в заголовке указываем разделитель
    // если письмо с вложением
    foreach($files as $key=>$value) {
        //$filename = './img/'.$key;
        //$f = $value['num'];
        //$f = fopen($filename,"rb");

        $zag .= "------------".$un."\n";
        $zag .= "Content-Type: application/octet-stream;";
        $zag .= "name=\"".basename($filename)."\"\n";
        $zag .= "Content-Transfer-Encoding:base64\n";
        $zag .= "Content-Disposition:attachment;";
        $zag .= "filename=\"".basename($filename)."\"\n\n";
        $zag .= chunk_split(base64_encode(fread($f,filesize($filename))))."\n";

    }
    if($file){
        $bodyMail = "--$separator\n"; // начало тела письма, выводим разделитель
        $bodyMail .= "Content-type: text/html; charset='utf-8'\n"; // кодировка письма
        $bodyMail .= "Content-Transfer-Encoding: quoted-printable"; // задаем конвертацию письма
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n"; // задаем название файла
        $bodyMail .= $message."\n"; // добавляем текст письма
        $bodyMail .= "--$separator\n";
        $fileRead = fopen($file, "r"); // открываем файл
        $contentFile = fread($fileRead, filesize($file)); // считываем его до конца
        fclose($fileRead); // закрываем файл
        $bodyMail .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode(basename($file))."?=\n"; 
        $bodyMail .= "Content-Transfer-Encoding: base64\n"; // кодировка файла
        $bodyMail .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode(basename($file))."?=\n\n";
        $bodyMail .= chunk_split(base64_encode($contentFile))."\n"; // кодируем и прикрепляем файл
        $bodyMail .= "--".$separator ."--\n";
    // письмо без вложения
    }else{
        $bodyMail = $message;
    }
    $result = mail($mailTo, $subject, $bodyMail, $headers); // отправка письма
    return $result;
}


?>