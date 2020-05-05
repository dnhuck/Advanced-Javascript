
var assert = require('chai').assert;//Chai assertion library
var validName = require('../app/validateName');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing Name Input Field", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validName('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validName('4'));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validName(''));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validName(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validName('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validName('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validName('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validName('a 4'));
	});
	
});	//end "Testing Input Required"