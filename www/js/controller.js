"use strict";

function Controller() {
	console.log("Controller started");
}

Controller.prototype.init = function () {
	console.log("Controller init");
  
	this.model = new Model(5);
    this.board = new Board(this, this.model.getSize());
	
	
	this.model.setGamestone(1,1, "black");
	this.model.setGamestone(3,3, "gray");
	this.board.reflect(this.model);
	
	this.model.removeGamestone(3,3);
	this.board.reflect(this.model);
	
};