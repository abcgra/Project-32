const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
  getBackgroundImg()
}

function draw(){
    if (backgroundImg)
    background(backgroundImg);
    // add condition to check if any background image is there to add


    

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var data =  await fetch("https://worldtimeapi.org/api/timezone/America/Iqaluit")
var dataJson= await data.json()
    console.log(dataJson)
    var date=dataJson.datetime
    console.log(date)
    var hour=date.slice(11,13)
    console.log(hour)

if (hour>=04 && hour<=06  ){
    bg="sunrise1.png";
}else if (hour>=06 && hour<=08 ){
    bg = "sunrise2.png";
}else if (hour>=08 && hour<=10 ){
    bg = "sunrise3.png";
}else if (hour>=10 && hour==00 ){
    bg = "sunrise4.png";
}else if (hour==00 && hour<=14 ){
    bg = "sunrise5.png";
}else if (hour>=14 && hour<=16 ){
    bg = "sunrise6.png";
}else if (hour>=16 && hour<=18 ){
    bg = "sunrise7.png";
}else if (hour>=18 && hour<=20 ){
    bg = "sunrise8.png";
}else if (hour>=20 && hour<=22 ){
    bg = "sunrise9.png";
}else if (hour>=22 && hour==00 ){
    bg="sunset10.png";
}else if (hour==00 && hour<=03 ){
    bg = "sunset11.png";
}else{
    bg="sunset12.png"
}


    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)
}
