QUnit.test("Model tests", function( assert ) {
	console.log("running some model tests");
			
	var model = new Model();
			
	assert.equal(model.getGamestones().length,0);
	
	model.setGamestone(1,1, "red");
	assert.equal(model.getGamestones().length,1);
			
	var wasRemoved = model.removeGamestone(1,1);
	assert.equal(model.getGamestones().length,0);
	assert.ok(wasRemoved);
			
	model.setGamestone(3,3, "blue");
	assert.equal(model.getGamestones().length,1);
	
	model.setGamestone(5,5, "blue");
	assert.equal(model.getGamestones().length,2);
		
	model.removeGamestone(3,3);
	assert.equal(model.getGamestones().length,1);
			
	wasRemoved = model.removeGamestone(4,4);
	assert.notOk(wasRemoved);
	assert.equal(model.getGamestones().length,1);
			
	wasRemoved = model.removeGamestone(5,5);
	assert.ok(wasRemoved);
	assert.equal(model.getGamestones().length,0);
			
});

QUnit.test("Test set/get gamestones", function( assert ) {
	console.log("running some model tests");
			
	var model = new Model();
	model.setGamestone(1,1, "white");
	model.setGamestone(1,2, "black");
	model.setGamestone(1,3, "white");
	
	assert.equal(model.getGamestones().length, 3);
	
	assert.equal(model.getGamestones()[0].getLine(), 1);
	assert.equal(model.getGamestones()[1].getLine(), 1);
	assert.equal(model.getGamestones()[2].getLine(), 1);
	
	assert.equal(model.getGamestones()[0].getColumn(), 1);
	assert.equal(model.getGamestones()[1].getColumn(), 2);
	assert.equal(model.getGamestones()[2].getColumn(), 3);
	
	assert.equal(model.getGamestones()[0].getColor(), "white");
	assert.equal(model.getGamestones()[1].getColor(), "black");
	assert.equal(model.getGamestones()[2].getColor(), "white");
	
	var noStone = model.getGamestoneAt(4,4);
	assert.notOk(noStone);
		
});


QUnit.test("Test find Groups", function( assert ) {
	console.log("test find groups");
			
	var model = new Model(5);
	model.setGamestone(3,3, "white");
	
	assert.equal(model.getGamestones().length, 1);
	
	assert.equal(model.getGamestones()[0].getLine(), 3);
	assert.equal(model.getGamestones()[0].getColumn(), 3);
	assert.equal(model.getGamestones()[0].getColor(), "white");
	
	var groups = new GroupFinder(model).findGroups("white");
	assert.equal(groups.length, 1);
	var gamestonesInGroup = groups[0];	
	assert.equal(gamestonesInGroup.length, 1);
	var gamestoneInGroup = gamestonesInGroup[0];
	assert.equal(gamestoneInGroup.getLine(), 3);
	assert.equal(gamestoneInGroup.getColumn(), 3);
		
});


QUnit.test("Test find Groups 2 gamestones", function( assert ) {
	console.log("test find groups2");
			
	var model = new Model(5);
	model.setGamestone(3,3, "white");
	model.setGamestone(3,4, "white");
	
	assert.equal(model.getGamestones().length, 2);
		
	var groups = new GroupFinder(model).findGroups("white");
	assert.equal(groups.length, 1);
	var gamestonesInGroup = groups[0];	
	assert.equal(gamestonesInGroup.length, 2);
	
	var gamestoneInGroup = gamestonesInGroup[0];
	assert.equal(gamestoneInGroup.getLine(), 3);
	assert.equal(gamestoneInGroup.getColumn(), 3);
	
	gamestoneInGroup = gamestonesInGroup[1];
	assert.equal(gamestoneInGroup.getLine(), 3);
	assert.equal(gamestoneInGroup.getColumn(), 4);
		
});


QUnit.test("Test find Groups 3 gamestones in a row", function( assert ) {
	console.log("test find groups2");
			
	var model = new Model(5);
	model.setGamestone(3,1, "white");
	model.setGamestone(3,2, "white");
	model.setGamestone(3,3, "white");
	
	assert.equal(model.getGamestones().length, 3);
		
	var groups = new GroupFinder(model).findGroups("white");
	assert.equal(groups.length, 1);
	var gamestonesInGroup = groups[0];	
	assert.equal(gamestonesInGroup.length, 3);
	
	var gamestoneInGroup = gamestonesInGroup[0];
	assert.equal(gamestoneInGroup.getLine(), 3);
	assert.equal(gamestoneInGroup.getColumn(), 1);
	
	gamestoneInGroup = gamestonesInGroup[1];
	assert.equal(gamestoneInGroup.getLine(), 3);
	assert.equal(gamestoneInGroup.getColumn(), 2);
	
	gamestoneInGroup = gamestonesInGroup[2];
	assert.equal(gamestoneInGroup.getLine(), 3);
	assert.equal(gamestoneInGroup.getColumn(), 3);
		
});




		

		
