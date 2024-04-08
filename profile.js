
function validateOID()
{
    var t = document.getElementById('owner_id').value;
    if(t.length == 0)
    {
        document.getElementById('oid-error').innerHTML = "Owner ID is required";
        return false;
    }
    if(!t.match(/^([0-9]).{1,5}$/))
    {
        document.getElementById('oid-error').innerHTML = "Wrong Owner ID Format";
        return false;
    }
    document.getElementById('oid-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}
function validateDesc()
{
    var HouseName = document.getElementById('description').value;
    if(HouseName.length == 0)
    {
        document.getElementById('desc-error').innerHTML = "Description is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{1,1000}$/))
    {
        document.getElementById('desc-error').innerHTML = "Proper Description is required";
        return false;
    }
    document.getElementById('desc-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateRate()
{
    var cno = document.getElementById('no_of_rooms').value;
    if(cno.length == 0)
    {
        document.getElementById('r-error').innerHTML = "Rate is required";
        return false;
    }
    if(!cno.match(/^[0-9]{1,10}$/))
    {
        document.getElementById('r-error').innerHTML = "Wrong Rate Format";
        return false;
    }
    document.getElementById('r-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateCountry()
{
    var HouseName = document.getElementById('country').value;
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
    document.getElementById('country-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateState()
{
    var HouseName = document.getElementById('state').value;
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
    document.getElementById('state-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateCity()
{
    var HouseName = document.getElementById('city').value;
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
    document.getElementById('city-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateAddress()
{
    var HouseName = document.getElementById('address').value;
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
    document.getElementById('address-error').innerHTML = '<span class=correct><img src="tick.png" width="20" height="20"> </span>';
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

