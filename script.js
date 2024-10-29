const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const tool=canvas.getContext("2d");
let circles=[];



//!Circle class deals with all the stuffs related to circles.
class Circles{
    constructor(x,y,r,color,speedX){
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.speedX=speedX;
    }
    move(){
        if(this.x>window.innerWidth*0.99){
            this.x=-25
        }
        this.x+=Math.random()*10;
    }
    draw(){
        tool.fillStyle=this.color;
        tool.beginPath();
        tool.arc(this.x,this.y,this.r,0,Math.PI*2);
        tool.fill();
    }
   
}


//! Generating the circle data
for(let x=0;x<100;x++){
    circles.push(new Circles(Math.random()*window.innerWidth*0.98,Math.random()*window.innerHeight,Math.random()*25,`rgba(0,256,256,${Math.random()})`,Math.random()*10));
}
console.log(circles);

//! Generating the circles
function generateCircles(){
    for(let x=0;x<circles.length;x++){
        circles[x].draw();
    }
}

//!Moving the circles
function moveCircles(){
    for(x=0;x<circles.length;x++){
        circles[x].move();
    }
}




function update(){
    tool.clearRect(0,0,window.innerWidth,window.innerHeight);
    moveCircles();
    generateCircles();

    requestAnimationFrame(update);
}
update();