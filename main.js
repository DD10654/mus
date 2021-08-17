noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(400, 330);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 330);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw() {
    image(video, 0, 0, 400, 330);
    image(clown_nose, noseX, noseY, 30, 30 );
}

function take_snap() {
    save("snap.jpeg");
}

function modelLoaded() {
    console.log("PoseNet is there!");
}

function gotPose(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x - 12;
        noseY = result[0].pose.nose.y - 12;
        console.log("Nose X is equal to - " + noseX);
        console.log("Nose Y is equal to - " + noseY);
    }
}