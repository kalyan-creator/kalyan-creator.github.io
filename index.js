
function login()
{
    var a=document.getElementById("username").value;
    if(a.length<5)
        {
            document.getElementById("demo").innerHTML=("not valid");
            return false;
        }
}