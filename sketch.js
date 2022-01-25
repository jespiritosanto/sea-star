let r=100;
let t=0;
let hu = 0;

function setup(){
	createCanvas(1112, 834);
	colorMode(HSB, 255);
	//noLoop();
}

function draw(){
	background(255);
	translate(200, 50);
	stroke(hu%255, 255, 255);
  beginShape();
  t+=.02;
	w = width / 2;
  h = height / 2.3;
  noFill();
	//stroke(0);
	strokeWeight(1);
  for(i=0;i<TAU*r;i+=TAU/24){
    k=map(i/TAU,0,r,1,30/h)
    n=noise(cos(i*3),sin(i*3)*k+t)*.5
    curveVertex(cos(i)*width*n*k+h,sin(i)*width*n*k+h)
  }
  endShape()
	hu++
}

// save jpg
let lapse = 0;    
function mousePressed(){
  
  if (millis() - lapse > 400){
  save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}