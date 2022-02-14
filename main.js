nosex=0
nosey=0
 
function preload() {
img=loadImage('https://i.postimg.cc/yxN15TRD/mustshde.png')
}
function draw() {
image(video,0,0,300,300)
image(img,nosex,nosey,40,50)
}
function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()

posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotresults)
}
function take_snapshot() {
save("cynthia.png") 
}

function modelloaded() {
console.log("model is loaded")
}

function gotresults(results) {
    if(results.length>0)
    {
        console.log(results);
        console.log("nosex= "+results[0].pose.nose.x)
        console.log("nosey= "+results[0].pose.nose.y)    
        nosey=results[0].pose.nose.y-2
        nosex=results[0].pose.nose.x-20
    }
}