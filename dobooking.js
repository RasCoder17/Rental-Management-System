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
    document.getElementById('tid-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
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
    document.getElementById('hid-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validatePeriod()
{
    var t = document.getElementById('p').value;
    if(t.length == 0)
    {
        document.getElementById('p-error').innerHTML = "Period is required";
        return false;
    }
    document.getElementById('p-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}
function validatePrice()
{
    var t = document.getElementById('pr').value;
    if(t.length == 0)
    {
        document.getElementById('pr-error').innerHTML = "Price is required";
        return false;
    }
    document.getElementById('pr-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}
function validateBD()
{
    var t = document.getElementById('b').value;
    if(t == NULL)
    {
        document.getElementById('b-error').innerHTML = "Booking Date is required";
        return false;
    }
    document.getElementById('b-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}
