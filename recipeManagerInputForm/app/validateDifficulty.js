var validatePrepTimeLength = function(inValue){
	if(inValue = "beginner" || inValue == 'intermediate' || inValue == 'expert'){
		return true;
	}else{
        return false;
    }
}

module.exports = validatePrepTimeLength;