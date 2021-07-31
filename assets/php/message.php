<?php

//declare inputs from the form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = $email;
$email_body = "User name: $name.\n" .
    "User Email: $email.\n" .
    "User Message: $message.\n";
$to = "mkafridi073@gmail.com";
$headers = "From : $email_from \r\n";
$headers .= "Reply-To: $email \r\n";

mail($to, $email_body, $headers);

header("Location: index.html");
