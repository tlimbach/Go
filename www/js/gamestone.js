"use strict";

function Gamestone(line, column, color) {
	this.line = line;
	this.column = column;
	this.color = color;
}

Gamestone.prototype.getLine = function() {
	return this.line;
}

Gamestone.prototype.getColumn = function() {
	return this.column;
}

Gamestone.prototype.getColor = function() {
	return this.color;
}
	