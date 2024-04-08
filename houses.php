<!DOCTYPE html>
<html lang="en">
<head>
  <title>House Rental Management System</title>
  <meta charset="utf-8">
   <link rel="stylesheet" type="text/css" href="table.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">House Rental Management System</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="home.php">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Houses <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="houses.php">Houses</a></li>
            <li><a href="rating.php">Rating</a></li>
          </ul>
        </li>

        <li><a href="owner.php">Owners</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tenants<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="tenant.php">Tenants</a></li>
            <li><a href="members.php">Members</a></li>
          </ul></li>
        <li><a href="booking.php">Booking</a></li>
        
      </ul>
      <ul class="nav navbar-nav navbar-right">

         <li><a href="#"><span class="glyphicon glyphicon-user"></span>Hi <?php session_start();echo $_SESSION['uname'];?></a>
         </li>
        <li><a href="logout.php"><span class="glyphicon glyphicon-user"></span> Sign Out</a></li>
      </ul>
    </div>
  </div>
</nav>


 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="houses2.php" class='btn btn-primary'>Show Ratings</a>
 <?php
if($_SESSION['ltype']=="owner")
{
  echo "&nbsp;<a href='profile.php' class='btn btn-primary'>Add House</a> <br><br>";
}
?>
<?php
$servername="localhost:3307";
$username="root";
$password="";
$dbname="rent";
$conn= mysqli_connect('localhost:3307',$username,$password,$dbname);
if(!$conn)
{
	die("Conection failed because".mysqli_connect_error());
}

 

?>
<div class="container">
  <br>
  <table border="1" id="customers">
    <tr>
      <th>House ID</th>
      <th>Owner ID</th>
      <th>No of rooms</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Country</th>
      <th>Description</th>
      <th>Rate for rent</th>
      <th>Pics of the house</th>
    </tr>
<?php
$files = glob("uploads/*.*");
for ($i = 0; $i < count($files); $i++) {
  $image = $files[$i];
  $supported_file = array(
      'jpg',
      'jpeg',
      'png'
  );
//   $ext = strtolower(pathinfo($image, PATHINFO_EXTENSION));
//   if (in_array($ext, $supported_file)) {
//     echo "<tr><td>";
//     echo basename($image);
//     echo "</td><td>";
//     echo '<img src="' . $image . '" alt="Random image" ,width=100px, height=100px /><br>';
//     echo "</td></tr>";
// } else {
// continue;
// }
}
$query="select * from house";
$data=mysqli_query($conn,$query);
$i = 0;
while($result=mysqli_fetch_assoc($data))
{
// if (in_array($ext, $supported_file)) {
echo "<tr><td>".$result['id']."</td><td>".$result['owner_id']."</td><td>".$result['no_of_rooms']."</td><td> ".$result['address']."</td><td>";
echo  $result['city']."</td><td>".$result['state']."</td><td>".$result['country']."</td><td> ".$result['description']."</td><td>".$result['rate']."</td><td>";
echo '<img src="' . $files[$i] . '" alt="Random image" ,width=100px, height=100px />';
echo "</td></tr>";
$i = $i + 1;
// }
// else
// {
//   continue;
// }
}

echo "</table>";
?>
</div>
</body>
</html>
