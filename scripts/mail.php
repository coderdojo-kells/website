<?php

$sender = $_GET['fullname'];
$senderPhone = $_GET['phone'];
$senderEmail = urldecode($_GET['email']);
$message = $_GET['message'];

$mailTo = "administrator@heylinhosting.com";
$mailFrom = "noreply@heylinhosting.com";

// email message contents
$subject = "New message from $sender";
$msgBody = "Sender:$sender\nSender Phone:$senderPhone\nSender email:$senderEmail\nMessage:$message";

// email headers
$headers = "From: $sender <$mailFrom>";

mail($mailTo,$subject,$msgBody,$headers);

echo 'Your has been message sent. We will be in touch soon';

?>
