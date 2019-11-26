<div class="container">

<?php
  require_once 'helpers.php';

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;

  if (!isset($_POST)) {
    redirect('contacts.php');
  }

  if (
    !(isset($_POST['email'])) ||
    !(isset($_POST['name'])) ||
    !(isset($_POST['body']))
  ) {
    redirect('contacts.php');
  }

  $email = $_POST['email'];
  $name = $_POST['name'];
  $body = $_POST['body'];

  $mail = new PHPMailer;
  $mail->isSMTP();
  // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 587;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->SMTPAuth = true;
  $mail->Username = GMAIL_USER;
  $mail->Password = GMAIL_PASS;

  $mail->setFrom($email, $name);
  $mail->addAddress(GMAIL_USER, 'MySelf');

  if (isset($_POST['subject'])) {
    $mail->Subject = $_POST['subject'];
  }

  $mail->Body = $body;

  if (!$mail->send()):
?>
  <p class="msg failure">Сообщение не отправлено :(</p>
<?php else: ?>
  <p class="msg success">Ваше сообщение отправлено :)</p>
<?php endif; ?>

</div>
