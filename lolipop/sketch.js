function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255,0,255);
	lolipop(200,200,100);
	lolipop(100,20,50);
}

function lolipop(x,y,diameter)
{
	fill(255);
	rect(x,y,20,150);

	fill(250,250,100);
	ellipse(x+10,y,diameter,diameter);


}
