void 
setup() {
	xmax = 500;
	ymax = 500;
	size(xmax, ymax);
	background(100);
	stroke(255);
}

void draw {
	var loud = makeLoudness();
	segNum = loud.length
	for (var i = 0; i < segNum; i++) {		
		ellipse(map(loud.mag[i],loud.magmin,loud.magmax,loud,0,ymax),map(loud.time[i],loud.timemin,loud.timemax,loud,0,xmax),2,2);
	}
}


void drawGraph() {
	float maxM = 1;
	float minM = 0;
	float maxT = 1;
	float minT = 0;
	for (int i = 0, end = mag.size(); i < end; i++) {	
		ellipse(map(time[i], minT, maxT, 0, ymax), map(mag[i], maxM, minM, 0, xmax), 2, 2);
	}
}

void testGraph(float[] a) {
	for (int i = 0, i < a.size(), i ++) {
		ellipse(random(600),random(600),10,10);
	}
}