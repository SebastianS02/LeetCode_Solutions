/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = s.split();
    for(var i = 0; i < arr.length; i+2){
        if(arr[i] == "(" && arr[i+1] != ")"){
            return false;
        }
        else if(arr[i] == "{" && arr[i+1] != "}"){
            return false;
        }
        else if(arr[i] == "[" && arr[i+1] != "]"){
            return false;
        }
    }
    return true;
};