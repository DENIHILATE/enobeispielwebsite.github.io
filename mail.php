<?php
// =====================================
// Mail-Einstellungen
// =====================================

// Empfänger-Adresse (Kollege)
$to = "EundF-Gebaeudedienste@outlook.de";   // <- HIER Mail deines Kollegen eintragen

// Felder aus dem Formular
$name    = $_POST['name'] ?? '';
$email   = $_POST['email'] ?? '';
$qm      = $_POST['qm'] ?? '';
$verschm = $_POST['verschmutzung'] ?? '';
$message = nl2br(htmlspecialchars($_POST['message'] ?? ''));
$service = $_POST['service'] ?? '';
$price   = $_POST['price'] ?? '';

// =====================================
// 1. Mail an den Kollegen (Admin)
// =====================================

$subject = "Neue Anfrage von der Website (E&F Gebäudedienste)";

$body = "
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; color:#333; }
    h2 { color:#0ea5e9; }
    table { border-collapse: collapse; width:100%; max-width:600px; }
    td { padding:8px; border-bottom:1px solid #ddd; vertical-align: top; }
    strong { color:#000; }
  </style>
</head>
<body>
  <h2>Neue Anfrage über das Kontaktformular</h2>
  <table>
    <tr><td><strong>Name:</strong></td><td>$name</td></tr>
    <tr><td><strong>E-Mail:</strong></td><td>$email</td></tr>
    <tr><td><strong>Quadratmeter:</strong></td><td>$qm</td></tr>
    <tr><td><strong>Verschmutzungsgrad:</strong></td><td>$verschm</td></tr>
    <tr><td><strong>Service:</strong></td><td>$service</td></tr>
    <tr><td><strong>Preis:</strong></td><td>$price</td></tr>
  </table>
  <h3>Nachricht:</h3>
  <p>$message</p>
</body>
</html>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Mail an Kollegen senden
@mail($to, $subject, $body, $headers);

// =====================================
// 2. Bestätigungsmail an den Kunden
// =====================================

$subject_client = "Bestätigung Ihrer Anfrage – E&F Gebäudedienste";

$body_client = "
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: Arial, sans-serif; color:#333; background:#f4f6f9; padding:20px; }
    .mail-wrapper { max-width:600px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
    .mail-header { background:#0ea5e9; padding:20px; text-align:center; }
    .mail-header img { max-height:60px; }
    .mail-body { padding:20px 30px; }
    .mail-footer { background:#f0f0f0; padding:15px 30px; text-align:center; font-size:0.9rem; color:#666; }
    h2 { color:#0ea5e9; margin-top:0; }
    ul { padding-left:20px; }
  </style>
</head>
<body>
  <div class='mail-wrapper'>
    <div class='mail-header'>
      <img src='https://eundfgebäudedienste.de/logo-pdf-1.png' alt='E&F Gebäudedienste Logo'>
    </div>
    <div class='mail-body'>
      <h2>Vielen Dank für Ihre Anfrage!</h2>
      <p>Sehr geehrte/r $name,</p>
      <p>wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>

      <p><strong>Zusammenfassung Ihrer Angaben:</strong></p>
      <ul>
        <li><strong>Service:</strong> $service</li>
        <li><strong>Preis:</strong> $price</li>
        <li><strong>Quadratmeter:</strong> $qm</li>
        <li><strong>Verschmutzungsgrad:</strong> $verschm</li>
      </ul>

      <p><strong>Ihre Nachricht:</strong></p>
      <p>$message</p>

      <br>
      <p>Mit freundlichen Grüßen,<br><strong>E&amp;F Gebäudedienste</strong></p>
    </div>
    <div class='mail-footer'>
      © 2025 E&F Gebäudedienste – Diese E-Mail wurde automatisch generiert.
    </div>
  </div>
</body>
</html>
";

$headers_client  = "MIME-Version: 1.0\r\n";
$headers_client .= "Content-type: text/html; charset=UTF-8\r\n";
$headers_client .= "From: E&F Gebäudedienste <no-reply@deine-domain.de>\r\n";
$headers_client .= "Reply-To: $to\r\n";

// Mail an Kunden senden
@mail($email, $subject_client, $body_client, $headers_client);

// =====================================
// Erfolgsmeldung für den Browser
// =====================================
echo "Vielen Dank! Ihre Anfrage wurde gesendet.";
?>
