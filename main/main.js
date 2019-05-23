// Write your cade below:
module.exports = function main() {
    if (arguments.length!=2){
        var calexception ="The input should be 2 elements";
        return calexception;
    }else if(isNaN(arguments[1])||isNaN(arguments[0])){
        var calexception ="The input should be 2 numbers";   
        return calexception; 
    }else if(arguments[1]==0){
        var calexception ="Divisor cannon be 0";
        return calexception;
    }
    return(arguments[0]%arguments[1]);
};