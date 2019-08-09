<?php

$sender = $_GET['fullname'];
$senderPhone = $_GET['phone'];
$senderEmail = urldecode($_GET['email']);
$message = $_GET['message'];

// captcha
$captchaAns = $_GET['captcha'];
$captchaQu1 = $_GET['qu1'];
$captchaQu2 = $_GET['qu2'];
$captchaSol = $captchaQu1 + $captchaQu2;

$mailTo = "info@coderdojokells.com";
$mailFrom = "noreply@coderdojokells.com";

// email message contents
$subject = "New message from $sender";
$msgBody = "Sender:$sender\nSender Phone:$senderPhone\nSender email:$senderEmail\nMessage:$message";

// email headers
$headers = "From: $sender <$mailFrom>";

if(isset($captchaAns)){
  if($captchaAns == $captchaSol){
    mail($mailTo,$subject,$msgBody,$headers);
    echo 'Your has been message sent. We will be in touch soon';
  }else{
    echo 'Something went wrong. Your has not been message sent. Please try again';
  }
}else{
  header('Location: https://www.coderdojokells.com/error-pages/403.html');
  die();
}




?>
