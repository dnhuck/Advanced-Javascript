var validateServingSize = function(inValue){

	let regExpressionSS = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g;
	
    if(inValue == 'null' || inValue.trim() == '' || inValue == 'undefined' || regExpressionSS.test(inValue) || isNaN(inValue)){
        return false;
    } 
    return true;
	
}


module.exports = validateServingSize;