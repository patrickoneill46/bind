module.exports = function(fn, ctx){

    console.log(ctx);

    return function(){
        console.log("call", ctx)
        var val = fn.call(ctx)
        console.log("after call", val)
        return val;
    }
};