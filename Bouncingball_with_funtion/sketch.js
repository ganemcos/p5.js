var ball = {
	x : 0,
	y : 0,
	xspeed : 4,
	yspeed : 4
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	move();
	bounce();
	display();
}

function move(){
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

function display(){
	ellipse(ball.x,ball.y,30,30);
}

function bounce(){
	if( ball.x > width || ball.x < 0 ){
		ball.xspeed = ball.xspeed * -1 ;
	}
	if (ball.y > height || ball.y < 0 ) {
		ball.yspeed = ball.yspeed * -1 ;
	}
}
