exports.add = (x,y) => {return x + y}
exports.sub = (x,y) => {return x - y}
exports.mul = (x,y) => {return x * y}
exports.div = (x,y) => {
    if(x != null && y == 0)
    {
        return "Infinity";
    }
    else if(x != null && y != null)
    {
        return x / y
    }
    return "error";
}
exports.mod = (x,y) =>{ return x % y}