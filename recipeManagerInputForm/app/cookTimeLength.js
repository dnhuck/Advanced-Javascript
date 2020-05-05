var validatePrepTimeLength = function(inValue){
	if(inValue = "minute" || inValue == 'hour'){
		return true;
	}else{
        return false;
    }
}

module.exports = validatePrepTimeLength;