<?php

    $to = "ventas@pecindustrial.net, ventaspecindustrial@infinitummail.com"; //Change email here
    $from = $_REQUEST['email']; 
    $headers = "From: $from"; 
    $subject = $_REQUEST['subject']; 
 
    $fields = array(); 
    $fields{"company"} = "compañia"; 
    $fields{"email"} = "email"; 
    $fields{"phone"} = "telefono";
    $fields{"message"} = "mensaje";
 
    $body = "Correo para PEC INDUSTRIAL\nAqui esta lo que fue enviado:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
 
    $send = mail($to, $subject, $body, $headers);
 
?>