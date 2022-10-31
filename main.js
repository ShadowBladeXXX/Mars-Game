canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
r_width=100;
r_height=90;
rover_x=10;
rover_y=10;
nasa_array=['Mars4.jpg','Mars5.jpg','Mars8.jpg','Mars9.jpg'];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_image=nasa_array[random_number];
rover_image="rover.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,r_width,r_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed); if(keyPressed == '37') { left(); console.log("left arrow is pressed"); } if(keyPressed == '38') { up(); console.log("up arrow is pressed"); } if(keyPressed == '39') { right(); console.log("right arrow is pressed"); } if(keyPressed == '40') { down(); console.log("down arrow is pressed"); }
}
function up(){
   if(rover_y>0){
    rover_y=rover_y-10;
    uploadBackground();
    uploadRover();
   }
}
function down(){
    if(rover_y<520){
     rover_y=rover_y+10;
     uploadBackground();
     uploadRover();
    }
}

function right(){
    if(rover_x<720){
     rover_x=rover_x+10;
     uploadBackground();
     uploadRover();
    }
} 
function left(){
    if(rover_x>0){
     rover_x=rover_x-10;
     uploadBackground();
     uploadRover();
    }
}