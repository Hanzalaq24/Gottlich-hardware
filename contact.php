<?php
// Prevent direct access
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: index.html");
    exit();
}

// Admin email address
$admin_email = "gujaratsunmicasurat@gmail.com";

// Get form data and sanitize
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    header("Location: index.html?error=missing_fields");
    exit();
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: index.html?error=invalid_email");
    exit();
}

// Email subject
$subject = "New Contact Form Submission from Gottlich Hardware Website";

// Email body
$email_body = "You have received a new message from the Gottlich Hardware website contact form.\n\n";
$email_body .= "Here are the details:\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: $phone\n";
$email_body .= "Message:\n$message\n";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($admin_email, $subject, $email_body, $headers)) {
    // Success - redirect to thank you page or show success message
    header("Location: index.html?success=1");
    exit();
} else {
    // Error - redirect with error message
    header("Location: index.html?error=send_failed");
    exit();
}
?>
