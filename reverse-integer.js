var reverse = function(x) {
    
    var str = x.toString(); // string representation of integer
    var arr = str.split(""); //array of numbers
    if (x > 0){ // if positive
        arr.reverse(); //if zero is not last digit
    }else{ // if number is negative
        arr.reverse();
        arr.unshift("-");
    }
    var res = parseInt(arr.join(""));
    if(res > 2147483647 || res < -2147483648) return 0;

    return res;
};