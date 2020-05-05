
var assert = require('chai').assert;//Chai assertion library
var validAmount = require('../app/validateAmount');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing Amount Input Field", function(){
	
	it("The letter a should not pass", function(){
		assert.isFalse(validAmount('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validAmount('4'));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validAmount(''));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validAmount(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validAmount('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validAmount('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validAmount('undefined'));
	});
	
	it("The value 'a 4' should fail", function(){
		assert.isFalse(validAmount('a 4'));
	});

	it("The value '123' should fail", function(){
		assert.isTrue(validAmount('123'));
	});
	
});	//end "Testing Input Required"