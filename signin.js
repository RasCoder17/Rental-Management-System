
function valemail()
{
    var t = document.getElementById('email').value;
    if(t.length == 0)
    {
        document.getElementById('tid-error').innerHTML = "Email ID is required";
        return false;
    }
    if(!t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        document.getElementById('tid-error').innerHTML = "Wrong Email ID Format";
        return false;
    }
    document.getElementById('tid-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
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
