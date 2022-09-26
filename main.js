song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload()
{
    song = loadSound("n.mp3");
}

function setup() {
	canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video,0,0,500,500);
    
}

function play(){
    song.setVolume(1);
    song.rate(1);
    song.play();
}

function modeloaded(){
    console.log("Model is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX + " rightWristY = " + righ<tWristY);
        
}

}
