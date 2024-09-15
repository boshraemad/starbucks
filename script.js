// code to open and close togglemenu
document.querySelector(".burger-list").onclick=()=>{
if(document.querySelector(".toggle-menu").style.display==="none"){
    document.querySelector(".toggle-menu").style.display="block";
    document.body.style.overflow="hidden";
}else{
    document.querySelector(".toggle-menu").style.display="none";
    document.body.style.overflow="visible";
}
};
