"use strict";

function Model(size) {
	this.gamestones = [];
	this.size = size;
	console.log("Model started");
}

Model.prototype.getSize = function() {
	return this.size;
}

Model.prototype.setGamestone = function(line, column, color) {
	var gamestone = new Gamestone(line, column, color);
	this.gamestones.push(gamestone);
}

Model.prototype.removeGamestone = function(line, column) {
	var idxToBeRemoved;

	for (var t=0; t<this.gamestones.length; t++) {
		var tmp = this.gamestones[t];
		if (tmp.getLine() === line && tmp.getColumn() === column) {
			idxToBeRemoved = t;
		}
	}
	
	if (typeof idxToBeRemoved === 'undefined') {
		console.log("No gamestone at " + line + " / " + column);
	} else {
	    this.gamestones.splice(idxToBeRemoved, 1);
	}
	
	return (typeof idxToBeRemoved !== 'undefined');
	
}

Model.prototype.getGamestoneAt = function(line, column) {
	for (var t=0; t<this.gamestones.length; t++) {
		var tmp = this.gamestones[t];
		if (typeof tmp !== 'undefined' && tmp.getLine() === line && tmp.getColumn() === column) {
			return tmp;
		}
	}
}

Model.prototype.getGamestones = function() {
	return this.gamestones;
}




	