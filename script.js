
function hideAll(){

document.getElementById("page1").style.display="none";
document.getElementById("page2").style.display="none";
document.getElementById("page3").style.display="none";
document.getElementById("page4").style.display="none";
document.getElementById("page5").style.display="none";

}



function showKhadush(){

hideAll();

document.getElementById("page2").style.display="block";

}



function showReady(){

hideAll();

document.getElementById("page3").style.display="block";

}



function notReady(){

hideAll();

document.getElementById("page4").style.display="block";

}




let images=[


"images/pic1.jpeg",
"images/pic2.jpeg",
"images/pic3.jpeg",
"images/pic4.jpeg",
"images/pic5.jpeg",
"images/pic6.jpeg",
"images/pic7.jpeg",
"images/pic8.jpeg",
"images/pic9.jpeg",
"images/pic10.jpeg",
"images/pic11.jpeg",
"images/pic12.jpeg",
"images/pic13.jpeg",
"images/pic14.jpeg"

];

let index=0;

let running=false;



function startSlideshow(){

hideAll();

document.getElementById("page5").style.display="block";

if(running) return;

running=true;

setInterval(function(){

index++;

if(index>=images.length){

index=0;

}

document.getElementById("photo").src=images[index];

},2000);

}