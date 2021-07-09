rightwristx=0;
rightwristy=0;
leftwristx=0;
leftwristy=0;
var song1="";
var song2="";
scoreRwrist=0;
scoreLwrist=0;
song1status="";
song2status="";
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
pn=ml5.poseNet(video,modelLoaded);
pn.on("pose",gotPoses);
}
function draw(){
image(video ,0,0,600,500);
stroke ("red");
fill ("red");

song1status=song1.isPlaying();
song2status=song2.isPlaying();

if(scoreLwrist>0.2){

circle(leftwristx,leftwristy,50);
song1.stop();

if(song2status==false){

    song2.play();

    document.getElementById("music1").innerHTML="playing song riseUP";

}

}
if(scoreRwrist>0.2){

    circle(rightwristx,rightwristy,50);
    song2.stop();


    if(song1status==false){

        song1.play();

        document.getElementById("music1").innerHTML=" playing song ridin";
    }
}




}

function preload(){
    song1=loadSound("ridin.mp3");
    song2=loadSound("rise up.mp3");
}

function play(){
song1.play();
song2.play();

}

function modelLoaded(){
console.log("model has loaded")

}

function gotPoses(results){

if(results.length>0){
console.log(results);
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
scoreRwrist=results[0].pose.keypoints[10].score;
scoreLwrist=results[0].pose.keypoints[9].score;
console.log("rwx= "+rightwristx+"rwy= "+rightwristy);
console.log("lwx= "+leftwristx+"lwy= "+leftwristy);
console.log("scoreRwrist= "+scoreRwrist+"scoreLwrist "+scoreLwrist);
}

}