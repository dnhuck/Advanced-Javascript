// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var phoneNumber = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	
	it("Input is required. Empty should be false", function(){
		assert.isFalse(phoneNumber(' '));
	});
	
	it("Input must be numeric", function(){
		assert.isTrue(phoneNumber(Number));
	});
	
	it("Input must be integers", function(){
		
	});
	
	it("Input must be 10 numbers", function(){
		assert.isFalse(phoneNumber.length < 10);
	});
	
	it('input cannot contain the @ sign. This should fail', function(){
		assert.isFalse(phoneNumber('@'));
	});
	
	it('123 should fail. not 10 digits', function(){
		assert.isFalse(phoneNumber('123'));
	});
	
});






















