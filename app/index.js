/**
 * Created by harshilkumar on 1/26/17.
 */
'use strict';

var MathUtils = function() {
    // var total = val1 + val2;

};
var multimath = function(val1, val2){
    return val1 * val2;
}
MathUtils.prototype.sum = function(number1, number2) {
    return number1 + number2;
}

function concatstring(val) {
    return val+"-"+val;
}

//$(document).ready(MathUtils);


// define our function with the callback argument
function test_func(arg1, arg2, callback1) {
    // this generates a random number between
    // arg1 and arg2
    var my_number = (arg1 + arg2) * 5;
    // then we're done, so we'll call the callback and
    // pass our result
    callback1(my_number);
}
// call the function
test_func(5, 15, function(num) {
    // this anonymous function will run when the
    // callback is called
    console.log("callback called! " + num);
});
