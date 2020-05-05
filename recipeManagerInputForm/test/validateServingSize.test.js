var assert = require('chai').assert;//Chai assertion library
var validServingSize = require('../app/validateServingSize');
//var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing Serving Size Field", function(){
	
	it("The letter a should pass", function(){
		assert.isFalse(validServingSize('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isFalse(validServingSize('4'));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validServingSize(''));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validServingSize(' '));
    });
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validServingSize('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validServingSize('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validServingSize('undefined'));
	});
	
	it("The value 'a 4' should not pass", function(){
		assert.isFalse(validServingSize('a 4'));
    });
    
    it("The value '@#$%' should not pass", function(){
		assert.isFalse(validServingSize('@#$%'));
	});
	
});	//end "Testing Input Required"