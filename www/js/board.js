"use strict";

function Board(controller, size) {
	// 5x5, 9x9, etc.
	this.size = size;
	this.border = 80;
	this.fontSize = {'font-size': '32px'};
	this.widthHeight = (1000-2*this.border) / (this.size-1);
	
    this.controller = controller;
	this.init();
}

Board.prototype.init = function () {
	console.log("Board init");
	var paperSize = this.getAvailableSize();
    this.paper = Raphael(document.getElementById('device'), paperSize, paperSize);
    this.paper.setViewBox(0, 0, 1000, 1000);
	window.addEventListener('resize', function () {
       var paperSize = this.getAvailableSize();
       this.paper.setSize(paperSize, paperSize);
	   this.drawBoardLines();
    }.bind(this));
    this.drawBoardLines();
}

Board.prototype.drawBoardLines = function() {
	
	this.paper.clear();
	
	for (var hLine = 0; hLine<this.size; hLine++) {
		
		var hPos = this.border + hLine*this.widthHeight;
		this.paper.rect(this.border, hPos,  1000-(2*this.border), 1);
		this.paper.text(this.border/2, hPos, String.fromCharCode(65+hLine)).attr(this.fontSize);
	}
	
	for (var vLine = 0; vLine<this.size; vLine++) {
		
		var vPos = this.border + vLine*this.widthHeight;
		this.paper.rect(vPos, this.border, 1, 1000-(2*this.border));
		this.paper.text(vPos, 1000-this.border/2, vLine+1).attr(this.fontSize);
	}
}

Board.prototype.getAvailableSize = function() {
    var availableWidth = window.innerWidth;
    var availableHeight = window.innerHeight;
    return Math.min(availableWidth, availableHeight);
}

Board.prototype.setGameStone = function(line, row, color) {
	var xPos = this.border+((line-1)*this.widthHeight);
	var yPos = this.border+((row-1)*this.widthHeight);
	
	this.paper.circle(	xPos, yPos, 55).attr({fill: color});	
}

Board.prototype.reflect = function (model) {
	this.drawBoardLines();
	var gamestones = model.getGamestones();
	for (var t=0; t<gamestones.length; t++) {
		var gamestone = gamestones[t];
		this.setGameStone(gamestone.getLine(), gamestone.getColumn(), gamestone.getColor());
	}
	
}