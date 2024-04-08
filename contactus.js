function valname()
{
    var cno = document.getElementById('name').value;
    if(cno.length == 0)
    {
        document.getElementById('n-error').innerHTML = "Name is required";
        return false;
    }
    if(!cno.match(/^([A-Za-z]).{1,50}$/))
    {
        document.getElementById('n-error').innerHTML = "Full Name is required";
        return false;
    }
    document.getElementById('n-error').innerHTML = '<span class=correct>  <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function valemail()
{
    var em = document.getElementById('email').value;
    if(em.length == 0)
    {
        document.getElementById('em-error').innerHTML = "Email ID is required";
        return false;
    }
    if(!em.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/))
    {
        document.getElementById('em-error').innerHTML = "Proper Email ID is required";
        return false;
    }
    document.getElementById('em-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function valsub()
{
    var HouseName = document.getElementById('sub').value;
    if(HouseName.length == 0)
    {
        document.getElementById('sub-error').innerHTML = "Subject is required";
        return false;
    }
    if(!HouseName.match(/^([a-zA-Z0-9]).{1,100}$/))
    {
        document.getElementById('sub-error').innerHTML = "Proper Subject is required";
        return false;
    }
    document.getElementById('sub-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function valmess()
{
    var HouseName = document.getElementById('mess').value;
    if(HouseName.length == 0)
    {
        document.getElementById('mess-error').innerHTML = "Message is required";
        return false;
    }
    if(!HouseName.match(/^([a-zA-Z0-9]).{1,1000}$/))
    {
        document.getElementById('mess-error').innerHTML = "Proper Message is required";
        return false;
    }
    document.getElementById('mess-error').innerHTML = '<span class=correct> <img src="tick.png" width="20" height="20"> </span>';
    return true;
}