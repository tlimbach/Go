"use strict";

function Gamestone(line, row, color) {
	this.line = line;
	this.row = row;
	this.color = color;
}

Gamestone.prototype.getLine = function() {
	return this.line;
}

Gamestone.prototype.getRow = function() {
	return this.row;
}

Gamestone.prototype.getColor = function() {
	return this.color;
}
	