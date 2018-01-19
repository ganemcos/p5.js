var offset = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	stroke(255);
	strokeWeight(4);
	background(0);
	for (var i = 0; i < width; i = i +50 ) {
		fill(random(255),0,random(255));
		ellipse(i + offset,windowHeight/2,30,30);
	}
	offset = offset + 1 ;
	if (offset > width) {
		offset = 0;
	}
}
