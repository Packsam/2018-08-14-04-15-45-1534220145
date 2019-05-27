// Write your cade below:
module.exports = function main() {
    if (arguments.length!=2){
        return "The input should be 2 elements";
    }else if(isNaN(arguments[1])||isNaN(arguments[0])){
        return "The input should be 2 numbers";   
    }else if(arguments[1]==0){
        return "Divisor cannon be 0";
    }
    return(arguments[0]%arguments[1]);
};