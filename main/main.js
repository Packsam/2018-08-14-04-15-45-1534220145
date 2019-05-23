// Write your cade below:
module.exports = function main() {
    if(arguments[1]==0)
    {
        var calexception ="Divisor cannon be 0";
        return calexception;
    }
    return(arguments[0]%arguments[1]);
};