// JavaScript Document

var validatePhoneNumber = function(inValue){
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined' || isNaN(inValue) || inValue.length > 10 ){
		return false;
	}
	return true;
}

module.exports = validatePhoneNumber;