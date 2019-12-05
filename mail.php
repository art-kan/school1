<div class="container">

<?php
  require_once 'helpers.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;

  if (!isset($_POST)) {
    redirect('contacts.php');
  }

  if (
    !(isset($_POST['tel'])) ||
    !(isset($_POST['name'])) ||
    !(isset($_POST['body']))
  ) {
    redirect('contacts.php');
  }

  $tel = $_POST['tel'];
  $name = $_POST['name'];
  $body = $_POST['body'];

  $mail = new PHPMailer;
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 587;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->SMTPAuth = true;
  $mail->Username = GMAIL_USER;
  $mail->Password = GMAIL_PASS;

  $mail->setFrom(GMAIL_USER, $name);
  $mail->addAddress(GMAIL_USER, 'MySelf');

  if (isset($_POST['subject'])) {
    $mail->Subject = $_POST['subject'];
  }

  $mail->Body = "$tel\n.$body";

  if (!$mail->send()):
?>
  <p class="msg failure">Сообщение не отправлено :(</p>
<?php else: ?>
  <p class="msg success">Ваше сообщение отправлено :)</p>
<?php endif; ?>

</div>
