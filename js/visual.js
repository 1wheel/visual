jQuery.ajaxSettings.traditional = true;  
callEchoSync();
var sp = getSpotifyApi(1);
var models = sp.require("sp://import/scripts/api/models");

var cur_analysis;
var getCurrentSeg;
var drawLoudness;
var currentSeg;
var context = "";

var Xmax = 600;
var Ymax = 600;
var MousePressed = false;

var processingInstance;
var processingInstance = Processing.getInstanceById('sketch');

function callEchoSync() {
	info("trouble getting results");
	getCurrentSeg = showSegmentInfo();
	getCurrentSeg();
	updateSeg();
}

function updateSeg() {
	
	
	switch (context){
		case "RealTimeAnalysis" : 
		currentSeg = getCurrentSeg();
		showRealTimeAnalysis();
		break;
		case "Cleared":
		clearOutput();
		break;
		case "Playlist":
		break;
		case "Graph":
		drawLoudness();
		break
	}
	setTimeout("updateSeg()",20);
}

function clearOutput() {
	document.getElementById('reset-able').innerHTML = "&quot&quot";
}

function showRealTimeAnalysis() {
	document.getElementById('reset-able').innerHTML = $.toJSON(currentSeg);
}

function changeContext(newContex) {
	context = newContex;
	
	switch (context){
		case "Playlist":
		makePlaylistFromNowPlaying();
		break;
		case "Graph":
		//drawLoudness = makeGraphFunction();
		break;
	}
}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.prototype.sum = function(){
	for(var i=0,sum=0;i<this.length;sum+=this[i++]);
	return sum;
}
Array.prototype.setAll = function(v) {
    var i, n = this.length;
    for (i = 0; i < n; ++i) {
        this[i] = v;
    }
};