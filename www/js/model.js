"use strict";

function Model(size) {
	this.gamestones = [];
	this.size = size;
	console.log("Model started");
}

Model.prototype.getSize = function() {
	return this.size;
}

Model.prototype.setGamestone = function(line, row, color) {
	var gamestone = new Gamestone(line, row, color);
	this.gamestones.push(gamestone);
}

Model.prototype.removeGamestone = function(line, row) {
	var idxToBeRemoved;

	for (var t=0; t<this.gamestones.length; t++) {
		var tmp = this.gamestones[t];
		if (tmp.getLine() === line && tmp.getRow() === row) {
			idxToBeRemoved = t;
		}
	}
	
	if (typeof idxToBeRemoved === 'undefined') {
		console.log("No gamestone at " + line + " / " + row);
	} else {
	    this.gamestones.splice(idxToBeRemoved, 1);
	}
	
	return (typeof idxToBeRemoved !== 'undefined');
	
}

Model.prototype.getGamestones = function() {
	return this.gamestones;
}


	