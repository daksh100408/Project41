const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.bodies;

var man, manImage;
var thunder, thunderImage;
var rain;

function preload(){
    manImage = loadImage("Images/walking_1.png", "Images/walking_2.png", "Images/walking_3.png", "Images/walking_4.png", "Images/walking_5.png", "Images/walking_6.png", "Images/walking_7.png", "Images/walking_8.png");
     
}

function setup(){
   createCanvas(displayWidth-20, displayHeight-30);
    
   man = createSprite(displayWidth/2, displayHeight/3);





}

function draw(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);  
}   

