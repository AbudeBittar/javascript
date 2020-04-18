function isEven(num) {
    return ( (num % 2) === 0) ;
}


function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function kebebTOSnake (str) {
    // var pos = str.indexOf("-");
    // if(pos !== 0) {
    //     str.charAt(pos) = "_" ;
    // }
    var newStr = str.replace(/-/g, "_");
    return newStr;
}