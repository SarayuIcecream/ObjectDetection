status = "";
objects = [];
img = "";
function preload(){
img = loadImage('dog_cat.jpg');
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status: objectdetected";
}

function modelLoaded() {
    console.log("Model Is Loaded! ");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
 if(error){
    console.log(error);
 }
 console.log(results);
 objects = results;
}
function draw(){
image(img, 0, 0, 640, 420);
if (status!="") {
   for(i = 0; i<objects.length; i++){
    document.getElementById("status").innerHTML = "staus: ObjectDetected"

    fill("Quercitron yellow");
    percent = Math.floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
    noFill();
    stroke("aquamarine");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
   } 
}

}