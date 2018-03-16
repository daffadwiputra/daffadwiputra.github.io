var circle = {
	x : 0,
	y : 180,
	diameter : 120,
	Xspeed : 8,
	Yspeed : -9
};

var klikMouse = false;

colorBG ={
	r : 0,
	g : 255,
	b : 255
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	colorBG.r = map(circle.x, 0, width, 0, 255);
	colorBG.g = map(circle.x, 0, width, 255, 255);
	colorBG.b = map(circle.x, 0, width, 255, 0);
	if (klikMouse) {
		background(colorBG.r,colorBG.g,colorBG.b);		
		showCircle(mouseX, mouseY);
		bounce();
		move();
		
	} else {
		background(colorBG.r,colorBG.g,colorBG.b);
		showCircle(mouseX, mouseY);
	}	
}

function showCircle(px, py) {
	noStroke();
	fill(240, 155, 60);
	ifInsideCircle(px, py);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
}

function ifInsideCircle(px, py){
	let d = dist(mouseX,mouseY,circle.x,circle.y);
	if (d < circle.diameter/2) {
		fill(200,0,100);
	}
}

function bounce() {
	if (circle.x > width || circle.x < 0 ) {
		circle.Xspeed = circle.Xspeed * -1;
	}
	if (circle.y > height || circle.y < 0) {
		circle.Yspeed = circle.Yspeed * -1;			
	}
}

function move() {
	circle.x = circle.x + circle.Xspeed;
	circle.y = circle.y + circle.Yspeed;
}

function mouseClicked(){
	klikMouse = !klikMouse
}