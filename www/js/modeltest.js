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