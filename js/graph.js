var loud;
var magA = [];
var timeA = [];

function makeLoudness(){
	var loudArray = new Object();

	var segmentArrary = cur_analysis.segments;
	var arrayLength = segmentArrary.length;
	for (var i = 0; i < arrayLength; i++) {		
		magA[i] = segmentArrary[i].loudness_max; 
		timeA[i] = segmentArrary[i].start;
	}
	loudArray.mag = magA;
	loudArray.time = timeA;
	return loudArray;
}

function drawLoudness(){
	loud = makeLoudness();
	processingInstance = Processing.getInstanceById('sketch');
	processingInstance.drawGraph(magA, timeA, magA.length);
}

function graphLoudness(){
	var mx = processingInstance.mouseX;
}

	
	
	

			