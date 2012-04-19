jQuery.ajaxSettings.traditional = true;  
callEchoSync();
var sp = getSpotifyApi(1);
var models = sp.require("sp://import/scripts/api/models");

var cur_analysis;
var getCurrentSeg;
var currentSeg;
var context = "";

var processingInstance;
var processingInstance = Processing.getInstanceById('sketch');

function callEchoSync() {
	info("trouble getting results");
	getCurrentSeg = showSegmentInfo();
	updateSeg();
}

function updateSeg() {
	currentSeg = getCurrentSeg();
	
	switch (context){
		case "RealTimeAnalysis" : 
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
	setTimeout("updateSeg()",200);
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
		drawLoudness();
		break;
	}
}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.min = function( array ){
    return Math.min.apply( Math, array );
};