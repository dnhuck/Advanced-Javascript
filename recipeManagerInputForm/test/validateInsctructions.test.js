
var assert = require('chai').assert;//Chai assertion library
var validPrepTime = require('../app/validateInstructions');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing instructions Input Field", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validPrepTime('a'));		
	});
	
	it("The value TSP should pass", function() {
		assert.isTrue(validPrepTime('tsp'));
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
	
	it("The value sticks should pass", function(){
		assert.isTrue(validPrepTime('sticks'));
	});

	it("The value cups should pass", function(){
		assert.isTrue(validPrepTime('cups'));
	});
	
});	//end "Testing Input Required"