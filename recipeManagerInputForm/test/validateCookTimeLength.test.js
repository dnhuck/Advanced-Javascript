
var assert = require('chai').assert;//Chai assertion library
var validPrepTime = require('../app/cookTimeLength');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing cook time select Field", function(){
	
	it("The value hour should pass", function(){
		assert.isTrue(validPrepTime('minute'));		
	});
	
	it("The value minute should pass", function() {
		assert.isTrue(validPrepTime('hour'));
	});
	
	it("the value default should fail", function() {
		assert.isTrue(validPrepTime('default'));
	});	
	
});	//end "Testing Input Required"