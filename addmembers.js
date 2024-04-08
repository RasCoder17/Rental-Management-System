function validateTid()
{
    var cno = document.getElementById('t').value;
    if(cno.length == 0)
    {
        document.getElementById('tid-error').innerHTML = "Tenant ID is required";
        return false;
    }
    if(!cno.match(/^([0-9]).{1,6}$/))
    {
        document.getElementById('tid-error').innerHTML = "Wrong Tenant ID Format";
        return false;
    }
    document.getElementById('tid-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

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


function validateGen()
{
    var HouseName = document.getElementById('gen').value;
    if(document.getElementById('HouseName').checked == true)
    {
        document.getElementById('g-error').innerHTML = "Gender is required";
        return false;
    }
    document.getElementById('g-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateLname()
{
    var HouseName = document.getElementById('l').value;
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

function validateOccupation()
{
    var HouseName = document.getElementById('o').value;
    if(HouseName.length == 0)
    {
        document.getElementById('occupation-error').innerHTML = "Occupation is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,100}$/))
    {
        document.getElementById('occupation-error').innerHTML = "Proper Occupation is required";
        return false;
    }
    document.getElementById('occupation-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateRelation()
{
    var HouseName = document.getElementById('r').value;
    if(HouseName.length == 0)
    {
        document.getElementById('relation-error').innerHTML = "Relation is required";
        return false;
    }
    if(!HouseName.match(/^([A-Za-z]).{2,100}$/))
    {
        document.getElementById('relation-error').innerHTML = "Proper Relation is required";
        return false;
    }
    document.getElementById('relation-error').innerHTML = '<span class=correct> &ensp; <img src="tick.png" width="20" height="20"> </span>';
    return true;
}

function validateForm()
{
   if(!validateTid() || !validateLName() || !validateFName() || !validateOccupation() || !validateRelation() || !validateGen())
   {
         document.getElementById('submit-error').innerHTML = "Please fix error to submit";
         return false;
     }
}

