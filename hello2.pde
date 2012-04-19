void 

setup() {

	size(Xmax, Ymax);
	background(100);
	stroke(255);
}

void drawGraph(string mag, string time, int Tlength) {

	for (int i = 0; i < Tlength; i++) {	
		ellipse(map(time[i], minT, maxT, 0, Ymax), map(mag[i], maxM, minM, 0, Xmax), 2, 2);
	}
}
