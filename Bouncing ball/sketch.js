var x ,y;
var Xspeed,Yspeed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = 0 ;
	y = width/2;
	Xspeed = 10 ;
	Yspeed = 7 ;
}

function draw() {
	background(255,0,255);


	fill(0);
	ellipse(x,y,50,50);


	if ( x > width ) {
		Xspeed = -10 ;
	}
	if ( x < 0 ) {
		Xspeed = 10 ;
	}
	if( y < 0 )
	{
		Yspeed = 7 ;
	}
	if( y > height)
	{
		Yspeed = -7 ;
	}
	x = x + Xspeed ;
	y = y + Yspeed ;


}
