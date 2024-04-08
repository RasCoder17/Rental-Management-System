<html>
<head>
	<link rel="stylesheet" type="text/css" href="signup.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script type="text/javascript" src="profile.js"></script> 
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

         
        <li><a href="index.html"><span class="glyphicon glyphicon-user"></span> Sign Out</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<center>
<br>
<div class="card" style="width: 60rem;border-radius: 35px;background-color:#f0f5f5">
<br>
 <div class="card-body">
<h1 class="card-title" style="text-align:center"><B>Add House</B></h1><br>
            <form method="POST" action="store.php" class="box" enctype="multipart/form-data">
                <table>    
                <tr>
		        <td><b>Owner ID: </b></td>
		        <td> <input type=number name="owner_id" id="owner_id" value="" size=25 onkeyup="validateOID()"></td>
            <td><span id="oid-error"></span></td>
	            </tr>
	            <tr>
		        <td><b>No of Rooms: </b></td>
		        <td> <input type="range" name="hno" id="hno" min="0" max="8" value="0" oninput="this.form.no_of_rooms.value=this.value" /></td>
			      <td><input type="number" name="no_of_rooms" id="no_of_rooms" min="0" max="8" value="0" oninput="this.form.hno.value=this.value" /></td>
            <td><span id="rno-error"></span></td>
	            </tr>
	            <tr>
		        <td><b>Rate: </b></td>
		        <td> <input type=number name="rate" value="" id="rate" size=35 onkeyup="validateRate()"></td>
            <td><span id="r-error"></span></td>
	            </tr>
                <tr>
                <td><b>Upload Pics: </b></td>
                <td><input type="file" name="photo" id="photo" placeholder="Upload ur photo here"></td>
                <!--<input type="submit" value="Upload Your photo" name="submit_photo">-->
                <td><span id="pic-error"></span></td>
                </tr>
                <tr>
		        <td><b>Country: </b></td>
		        <td> <input type=textbox name="country" id="country" value="" size=25 onkeyup="validateCountry()"></td>
            <td><span id="country-error"></span></td>
	            </tr>
	            <tr>
		        <td><b>State: </b></td>
		        <td><input type=textbox name="state" id="state" value="" size=25 onkeyup="validateState()"></td>
            <td><span id="state-error"></span></td>
	            </tr>
	            <tr>
		        <td><b>City: </b></td>
		        <td> <input type=textbox name="city" id="city" value="" size=25 onkeyup="validateCity()"></td>
            <td><span id="city-error"></span></td>
	            </tr>
	            <tr>
		        <td><b>Address: </b></td>
		        <td><input type=textbox name="address" id="address" value="" size=25 onkeyup="validateAddress()"></td>
            <td><span id="address-error"></span></td>
	            </tr>
	            <tr>
		        <td><b>Description: </b></td>
		        <td><input type=textbox name="description" id="description" value="" size=25 onkeyup="validateDesc()"></td>
            <td><span id="desc-error"></span></td>
	            </tr>
                </table>
                <br><br>
                <button type="submit" value="Add" class="btn btn-danger" name="submit">Submit</button>
            </form>

        </div>
        
        </div>

    </body>
</html>
