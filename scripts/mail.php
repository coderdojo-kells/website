<?php

$sender = $_POST['fullname'];
$senderPhone = $_POST['phone'];
$senderEmail = $_POST['email'];

$mailTo = "administrator@heylinhosting.com";
$mailFrom = "noreply@heylinhosting.com";

$subject = "New message from $sender";
$message = $_POST['message'];

$msgBody = "Sender:$sender\nSender Phone:$senderPhone\nSender email:$senderEmail\nMessage:$message";

$headers = "From: $sender <$mailFrom>";

mail($mailTo,$subject,$msgBody,$headers);

?>
