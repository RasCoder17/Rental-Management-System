function validateTid()
{
    var cno = document.getElementById('t').value;
    if(cno.length == 0)
    {
        document.getElementById('tid-error').innerHTML = "Tenant ID is required";
        return false;
    }
    if(!cno.match(/^([0-9]).{0,6}$/))
    {
        document.getElementById('tid-error').innerHTML = "Wrong Tenant ID Format";
        return false;
    }
    document.getElementById('tid-error').innerHTML = '<span class=correct>  <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateHID()
{
    var h = document.getElementById('h').value;
    if(h.length == 0)
    {
        document.getElementById('hid-error').innerHTML = "House ID is required";
        return false;
    }
    if(!h.match(/^([0-9]).{0,4}$/))
    {
        document.getElementById('hid-error').innerHTML = "Wrong House ID Format";
        return false;
    }
    document.getElementById('hid-error').innerHTML = '<span class=correct>  <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateCom()
{
    var c = document.getElementById('c').value;
    if(c.length == 0)
    {
        document.getElementById('c-error').innerHTML = "Comment is required";
        return false;
    }
    if(!c.match(/^([A-Za-z]).{2,50}$/))
    {
        document.getElementById('c-error').innerHTML = "Proper Comment is required";
        return false;
    }
    document.getElementById('c-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}