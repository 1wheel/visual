var maxM;
var minM;
var maxT;
var minT;
var Xmax = 600;
var Ymax = 600;
var mx;

var loud;
var magA = [];
var timeA = [];
var magAm = [];
var timeAm = [];

function makeLoudness(){
	var loudArray = new Object();
	
	var segmentArrary = cur_analysis.segments;
	var arrayLength = segmentArrary.length;
	for (var i = 0; i < arrayLength; i++) {		
		if (cur_analysis.track.end_of_fade_in < segmentArrary[i].start && segmentArrary[i].start < cur_analysis.track.start_of_fade_out){
			magA[magA.length] = segmentArrary[i].loudness_max; 
			timeA[timeA.length] = segmentArrary[i].start;
		}
	}
	loudArray.mag = magA;
	loudArray.time = timeA;
	maxM = Math.max.apply(Math, magA);
	minM = Math.min.apply(Math, magA);
	maxT = Math.max.apply(Math, timeA);
	minT = Math.min.apply(Math, timeA);
	for (var i = 0; i < arrayLength; i++) {		
		magAm[i] = Xmax-(magA[i]-minM)*(Ymax-0)/(maxM-minM); 
		timeAm[i] = (timeA[i]-minT)*(Xmax-0)/(maxT-minT); 
	}
	return loudArray;
}

function drawLoudness(){
	if (!loud){
		loud = makeLoudness();
	}
	processingInstance = Processing.getInstanceById('sketch');
	processingInstance.background(100);
	processingInstance.drawGraph(magA, timeA, magA.length);
	mx = processingInstance.mouseX;
	i = 0;
	while (timeAm[i] < mx) {
		i++;
	}

	processingInstance.line(0,magAm[i],mx,magAm[i]);
	processingInstance.line(mx,magAm[i],mx,Ymax);
	
	document.getElementById('xcord').innerHTML = mx;
	document.getElementById('ycord').innerHTML = magAm[i];
}

	
	
	

			