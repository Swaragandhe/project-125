

difference= 0;
rightWristX= 0;
rightWristY= 0;
function setup() {
    video =  createCapture(VIDEO);
    video.size(550 , 500)
    canvas = createCanvas(550 , 500)
    canvas.position(560 , 150)
    poseNet = ml5.poseNet(video , modalLoaded);
    poseNet.on('pose', gotPoses)

}

function modalLoaded() {
    console.log('PoseNet is initialized');
}

function draw() {
    background('#75edff');
    document.getElementById("square_side" ).innerHTML="Width & Height of the square will be =" + difference + "px";
    textSize(difference);
   fill('#ffb0e2');
 
   text('Swara' , 50 , 400);
   

}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
       
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftwristX = " + leftWristX + "rightwristX = " + rightWristX + "Difference = " + difference );
    }
}

