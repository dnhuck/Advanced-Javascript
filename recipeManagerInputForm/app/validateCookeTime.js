var validateCookTime = function(inValue){
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined' || isNaN(inValue)){
		return false;
	}
	return true;
}

module.exports = validateCookTime;