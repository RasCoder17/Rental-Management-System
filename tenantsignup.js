function validateFname()
{
    var HouseName = document.getElementById('f').value;
    if(HouseName.length == 0)
    {
        document.getElementById('fname-error').innerHTML = "First name is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('fname-error').innerHTML = "Proper First name is required";
        return false;
    }
    document.getElementById('fname-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateLname()
{
    var HouseName = document.getElementById('f').value;
    if(HouseName.length == 0)
    {
        document.getElementById('lname-error').innerHTML = "Last name is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('lname-error').innerHTML = "Proper Last name is required";
        return false;
    }
    document.getElementById('lname-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateEmail()
{
    var Email = document.getElementById('e').value;
    if(Email.length == 0)
    {
        document.getElementById('email-error').innerHTML = "Email ID is required";
        return false;
    }
    if(!Email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        document.getElementById('email-error').innerHTML = "Proper Email ID is required";
        return false;
    }
    document.getElementById('email-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true; 
}

function validatePassword()
{
    var Password = document.getElementById('p').value;
    if(Password.length == 0)
    {
        document.getElementById('password-error').innerHTML = "Password is required";
        return false;
    }
    if(!Password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/))
    {
        document.getElementById('password-error').innerHTML = "Check your password again";
        return false;
    }
    document.getElementById('password-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true; 
}

function validateMobilenumber()
{
    var cno = document.getElementById('m').value;
    if(cno.length == 0)
    {
        document.getElementById('mobileno-error').innerHTML = "Contact Number is required";
        return false;
    }
    if(!cno.match(/^[0-9]{10}$/))
    {
        document.getElementById('mobileno-error').innerHTML = "Wrong Contact Number Format";
        return false;
    }
    document.getElementById('mobileno-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateOccupation()
{
    var HouseName = document.getElementById('o').value;
    if(HouseName.length == 0)
    {
        document.getElementById('occupation-error').innerHTML = "Occupation is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('occupation-error').innerHTML = "Proper Occupation is required";
        return false;
    }
    document.getElementById('occupation-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateForm()
{
    if(!validatePassword() || !validateLName() || !validateFName() || !validateEmail() || !validateMobilenumber() || !validateOccupation())
    {
        document.getElementById('submit-error').innerHTML = "Please fix error to submit";
        return false;
    }
}

