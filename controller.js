const url = require('url');
const func = require('functions.js');
exports.maths = function(req, res){
    var x = null;
    var y = null;
    var n = null;
    const twoParams = [" ", "-", "*", "/", "%"];
    const oneParam = ["!", "p", "np"];

    var params = getQueryString(req);
    console.log(params);
    params.error = `param x is missing`;

    if(params.op != null){
        switch(params.op){
            case ' ':
                func.add(params.x, params.y)
                break;
            case '-':
                func.sub(params.x, params.y)
                break;
            case '*':
                func.mul(params.x, params.y)
                break;
            case '/':
                func.div(params.x, params.y)
                break;
            case '%':
                break;
            

        }
    } 
    
}