var a;
function show_hide() {
    if(a==1)
    {
        document.getElementById("hide").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("hide").style.display="none";
        return a=1;
    }
}