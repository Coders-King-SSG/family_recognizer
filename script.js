function preload() {
    //empty
}

function setup() {
    
    if (screen.width < 768) {
        var canvas = createCanvas(screen.width, 400);
        canvas.position(0, 475);
    } else {
        var canvas = createCanvas(screen.width/2, 400);
    canvas.position(380, 475);
    }
    video = createCapture(VIDEO);
    video.size(screen.width/2, 400);
    video.hide();
}

function saveimg() {
    var vl = prompt('What file name do you want to save in?');
    if (vl!=null) {
        save(vl+'.png');
    }
}

function draw() {
    image(video, 0, 0, 640, 400);
}

function gotPoses(results) {
    console.log(results);
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}
