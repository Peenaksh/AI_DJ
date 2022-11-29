song = ""
right_wrist_x = 0
right_wrist_y = 0
left_wrist_x = 0
left_wrist_y = 0
score_right_wrist = 0
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
}