
var assert = require('chai').assert;//Chai assertion library
var validPrepTime = require('../app/validateCookeTime');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing Cook Time Input Field", function(){
	
	it("The letter a should not pass", function(){
		assert.isFalse(validPrepTime('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validPrepTime('4'));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validPrepTime(''));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validPrepTime(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validPrepTime('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validPrepTime('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validPrepTime('undefined'));
	});
	
	it("The value 'a 4' should not pass", function(){
		assert.isFalse(validPrepTime('a 4'));
	});

	it("The value '678' should pass", function(){
		assert.isTrue(validPrepTime('678'));
	});
	
});	//end "Testing Input Required"