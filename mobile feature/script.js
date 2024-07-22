var circle=document.getElementById("circle");
var upBtn=document.getElementById("upBtn");
var downBtn=document.getElementById("downBtn");
var rotatevalue=circle.style.transform;
var rotatesum;
upBtn.onclick=function(){
    rotatesum=rotatevalue+"rotate(-90deg)";
    circle.style.transform=rotatesum;
    rotatevalue=rotatesum;
}
downBtn.onclick=function(){
    rotatesum=rotatevalue+"rotate(90deg)";
    circle.style.transform=rotatesum;
    rotatevalue=rotatesum;
}