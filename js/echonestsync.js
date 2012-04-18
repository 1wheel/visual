function callEchoSynce() {
	info("trouble getting results");
	getCurrentSeg = showSegmentInfo();
	updateSeg();
}

function updateSeg() {
	document.getElementById('reset-able').innerHTML = $.toJSON(getCurrentSeg());
	setTimeout("updateSeg()",50);
}

function showSegmentInfo() {
    var tp = sp.trackPlayer;
	var x = 6;
    var segIndex = 0;
    var lastSegIndex = -1;
	var oldSeg;

    var beatIndex = 1;
    var barIndex = 0;
	var lastTrack;
	
    function findNextBeat(time) {
        if (cur_analysis) {
            var qs = cur_analysis.beats;
            var l = qs.length;

            for (var i = beatIndex; i < l; i++) {
                var q = qs[i];
				var ql = qs[i-1];
                if (ql.start <=time && time < q.start ) {
                    beatIndex = i;
                    return q;
                }
            }
        }
        return null;
    }

    function findNextBar(time) {
        if (cur_analysis) {
            var qs = cur_analysis.bars;
            var l = qs.length;

            for (var i = barIndex; i < l; i++) {
                var q = qs[i];
                if (time >= q.start && time < q.start + q.duration) {
                    barIndex = i;
                    return q;
                }
            }
            barIndex = 0;
        }
        return null;
    }

    function findNextSegment(time) {
        if (cur_analysis) {
            var segs = cur_analysis.segments;

            var lsegs = segs.length;
            for (var i = segIndex; i < lsegs; i++) {
                seg = segs[i];
                if (time >= seg.start && time < seg.start + seg.duration) {
                    if (i != segIndex) {
                        segIndex = i;
                        return seg;
                    } else {
                        return null;
                    }
                }
            }
            segIndex = 0;
        }
        return null;
    }

    function show() {
        var t = tp.getNowPlayingTrack();
        if (t) {
			var time = t.position/1000;
            var thisTrack = t.track;
            if (lastTrack == null || lastTrack.uri != thisTrack.uri) {
                lastTrack = thisTrack;
                fetchSongInfo(thisTrack);
            }
            seg = findNextSegment(time)
            if (seg) {
				seg.beat = findNextBeat(time);
				seg.bar = findNextBar(time);
				oldSeg = seg;
				return seg;
            } 
			return oldSeg;
        }
    }
    return show;
}