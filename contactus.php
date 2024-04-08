<?php 
if(isset($_POST["submit"])){
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject1 = $_POST['sub'];
	$message = $_POST['message'];
// Recipient 
$to = "realestate13268@gmail.com"; 
 
// Sender 
$from = $email; 
$fromName = $name; 
 
// Email subject 
$subject = $subject1;  
 
// Attachment file 
$file = "files/project.pdf"; 
 
// Email body content 
$htmlContent = $message; 
 
// Header for sender info 
$headers = "From: $fromName"." <".$from.">"; 
 
// Boundary  
$semi_rand = md5(time());  
$mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";  
 
// Headers for attachment  
$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
 
// Multipart boundary  
$message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" . 
"Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";  
 
// Preparing attachment 
if(!empty($file) > 0){ 
    if(is_file($file)){ 
        $message .= "--{$mime_boundary}\n"; 
        $fp =    fopen($file,"rb"); 
        $data =  fread($fp,filesize($file)); 
 
        fclose($fp); 
        $data = chunk_split(base64_encode($data)); 
        $message .= "Content-Type: application/octet-stream; name=\"".basename($file)."\"\n" .  
        "Content-Description: ".basename($file)."\n" . 
        "Content-Disposition: attachment;\n" . " filename=\"".basename($file)."\"; size=".filesize($file).";\n" .  
        "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n"; 
    } 
} 
$message .= "--{$mime_boundary}--"; 
$returnpath = "-f" . $from; 
 
// Send email 
$mail = mail($to, $subject, $message, $headers, $returnpath);  
 
// Email sending status 
echo $mail?"<script type='text/javascript'>alert('Email sent successfully')
window.location.href='index.html';
</script>":"<script type='text/javascript'>alert('Email sending failed')
window.location.href='index.html';
</script>"; 

}
?>