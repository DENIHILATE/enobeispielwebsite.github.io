<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@deine-domain.de";   // Zieladresse ändern!
    $subject = "Neue Anfrage über die Website";
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: ".$email."\r\n".
               "Reply-To: ".$email."\r\n".
               "X-Mailer: PHP/".phpversion();

    $body = "Name: $name\n".
            "E-Mail: $email\n\n".
            "Nachricht:\n$message";

    if(mail($to, $subject, $body, $headers)) {
        echo "Danke! Wir melden uns so schnell wie möglich.";
    } else {
        echo "Leider ist ein Fehler aufgetreten.";
    }
}
?>
