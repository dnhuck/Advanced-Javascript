
var assert = require('chai').assert;//Chai assertion library
var validPrepTime = require('../app/validateDifficulty');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing difficulty select Field", function(){
	
	it("The value beginner should pass", function(){
		assert.isTrue(validPrepTime('beginner'));		
	});
	
	it("The value intermediate should pass", function() {
		assert.isTrue(validPrepTime('intermediate'));
    });
    
    it("The value expert should pass", function() {
		assert.isTrue(validPrepTime('expert'));
	});
	
	it("the value default should fail", function() {
		assert.isTrue(validPrepTime('default'));
	});	
	
});	//end "Testing Input Required"