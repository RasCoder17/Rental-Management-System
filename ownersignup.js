

function validateName()
{
    var HouseName = document.getElementById('f').value;
    if(HouseName.length == 0)
    {
        document.getElementById('name-error').innerHTML = "Name is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,100}$/))
    {
        document.getElementById('name-error').innerHTML = "Proper Name is required";
        return false;
    }
    document.getElementById('name-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
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
        document.getElementById('email-error').innerHTML = "Full Email ID is required";
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
    if(!HouseName.match(/^([A-Za-z]).{3,100}$/))
    {
        document.getElementById('occupation-error').innerHTML = "Proper Occupation is required";
        return false;
    }
    document.getElementById('occupation-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateHousenum()
{
    var cno = document.getElementById('input').value;
    if(cno.length == 0)
    {
        document.getElementById('housenum-error').innerHTML = "House Number is required";
        return false;
    }
    if(!cno.match(/^([0-9]).{0}$/))
    {
        document.getElementById('housenum-error').innerHTML = "Wrong House Number Format";
        return false;
    }
    document.getElementById('housenum-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateCountry()
{
    var HouseName = document.getElementById('c').value;
    if(HouseName.length == 0)
    {
        document.getElementById('country-error').innerHTML = "Country is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('country-error').innerHTML = "Proper Country name is required";
        return false;
    }
    document.getElementById('country-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateState()
{
    var HouseName = document.getElementById('s').value;
    if(HouseName.length == 0)
    {
        document.getElementById('state-error').innerHTML = "State is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{3,50}$/))
    {
        document.getElementById('state-error').innerHTML = "Proper State name is required";
        return false;
    }
    document.getElementById('state-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateCity()
{
    var HouseName = document.getElementById('ci').value;
    if(HouseName.length == 0)
    {
        document.getElementById('city-error').innerHTML = "City is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{3,50}$/))
    {
        document.getElementById('city-error').innerHTML = "Proper City name is required";
        return false;
    }
    document.getElementById('city-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateAddress()
{
    var HouseName = document.getElementById('a').value;
    if(HouseName.length == 0)
    {
        document.getElementById('address-error').innerHTML = "Address is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{3,50}$/))
    {
        document.getElementById('address-error').innerHTML = "Proper Address is required";
        return false;
    }
    document.getElementById('address-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}


// function validateForm()
// {
//     if(!validateHName() || !validateLName() || !validateFName() || !validateEmail() || !validateContactNumber() || !validatePrice())
//     {
//         document.getElementById('submit-error').innerHTML = "Please fix error to submit";
//         return false;
//     }
// }

