var test = require('tape'),
    bind = require('./bind');

test('First test', function(t){

    t.plan(1);

    var context = {
        my: 'context'
    };

    var func = function(){
        return this;
    };

    var contextFunction = bind(func, context);

    var actualContext = contextFunction();

    t.isEqual(actualContext, context, 'Checking context is bound correctly');

    t.end();
});
