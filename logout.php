<?php
session_start();
unset( $_SESSION['uname']);
unset( $_SESSION['ltype']);
if(session_destroy()) // Destroying All Sessions
{
echo "<script type='text/javascript'>alert('Logged Out Successfully')
window.location.href='index.html';
</script>";
}
?>