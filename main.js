var MouseEvent="empty";
var OMX,OMY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="white";
var WL=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
color=document.getElementById("colour").value ;
WL=document.getElementById("WL").value ;
MouseEvent="mousedown";

}


canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentMX=e.clientX-canvas.offsetLeft;
currentMY=e.clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=WL;
ctx.moveTo(OMX,OMY);
ctx.lineTo(currentMX,currentMY);
ctx.stroke();
OMX=currentMX;
OMY=currentMY;
}

canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
MouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",l);
function l(e){
MouseEvent="mouseleave";
}
