song = ""
right_wrist_x = 0
right_wrist_y = 0
left_wrist_x = 0
left_wrist_y = 0
score_right_wrist = 
score_left_wrist = 0

function preload() {
//song = loadSound("music.mp3") ;

}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center()
    video= createCapture(VIDEO);
 
    video.hide() ; 

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose', gotPoses)

    function modelloaded() {
        console.log("poseNet is initialised")
    }
}

function gotPoses(results) {
if (results.length > 0 ) {
    console.log(results)
    score_right_wrist = results[0].pose.keypoints[10].score 
    score_left_wrist = results[0].pose.keypoints[9].score 
    console.log("scoreright wrist" + score_right_wrist + "score left wrist" + score_left_wrist);
    right_wrist_x = results[0].pose.rightwrist.x
    right_wrist_y = results[0].pose.rightwrist.y 
    console.log("right wrist x= " + right_wrist_x + "right wrist y= " + right_wrist_y)

    left_wrist_x = results[0].pose.leftwrist.x
    left_wrist_y = results[0].pose.leftwrist.y 
    console.log("left wrist x= " + left_wrist_x + "left wrist y= " + left_wrist_y)
}
}

function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function draw() {
    image(video,0,0,600,500)
    fill("#498efc");
    stroke("#34ed66")
    if(score_right_wrist>0.2){
        circle(right_wrist_x,right_wrist_y,20)
       if(right_wrist_y>0 && right_wrist_y<=100) {
        document.getElementById("speed").innerHTML = "speed=0.5 x"
        song.rate(0.5)
       }
       else if(right_wrist_y>100 && right_wrist_y<=200) {
        document.getElementById("speed").innerHTML = "speed=1x"
        song.rate(1)

       }
       else if(right_wrist_y>200 && right_wrist_y<=300) {
        document.getElementById("speed").innerHTML = "speed=1.5x"
        song.rate(1.5)
       }
       else if(right_wrist_y>300 && right_wrist_y<=400) {
        document.getElementById("speed").innerHTML = "speed = 2x"
        song.rate(2)
       }
       else if(right_wrist_y>400) {
        document.getElementById("speed").innerHTML = "speed=2.5x"
        song.rate(2.5)
       }
     }
     if(score_left_wrist>1.2){}
     
    
}