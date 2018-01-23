function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);
	for(var i = 0; i < mouseX; i+=50 ){
		for (var j = 0; j < mouseY ; j+=50) {
			fill(random(200),0,random(255));
			ellipse(i,j,30,30);
		}
	}
}
