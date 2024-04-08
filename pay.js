function validateName()
{
    var HouseName = document.getElementById('name').value;
    if(HouseName.length == 0)
    {
        document.getElementById('n-error').innerHTML = "Name is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('n-error').innerHTML = "Proper Name is required";
        return false;
    }
    document.getElementById('n-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
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
function validateCName()
{
    var HouseName = document.getElementById('cname').value;
    if(HouseName.length == 0)
    {
        document.getElementById('cna-error').innerHTML = "Name is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('cna-error').innerHTML = "Proper Name is required";
        return false;
    }
    document.getElementById('cna-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateNum()
{
    var cno = document.getElementById('cnum').value;
    if(cno.length == 0)
    {
        document.getElementById('cno-error').innerHTML = "Card Number is required";
        return false;
    }
    if(!cno.match(/^[0-9]{16}$/))
    {
        document.getElementById('cno-error').innerHTML = "Wrong Card Number Format";
        return false;
    }
    document.getElementById('cno-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}
function validateCVV()
{
    var cno = document.getElementById('cvv').value;
    if(cno.length == 0)
    {
        document.getElementById('cvv-error').innerHTML = "CVV is required";
        return false;
    }
    if(!cno.match(/^[0-9]{3}$/))
    {
        document.getElementById('cvv-error').innerHTML = "Wrong CVV Format";
        return false;
    }
    document.getElementById('cvv-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}