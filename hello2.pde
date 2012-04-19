void 
setup() {
	xmax = 500;
	ymax = 500;
	size(xmax, ymax);
	background(100);
	stroke(255);
}

void drawGraph(string mag, string time, int Tlength) {
	float maxM = max(mag);
	float minM = min(mag);
	float maxT = max(time);
	float minT = min(time);
	for (int i = 0; i < Tlength; i++) {	
		ellipse(map(time[i], minT, maxT, 0, ymax), map(mag[i], maxM, minM, 0, xmax), 2, 2);
	}
}
