function myFunction() {
    var a, b;
    a = 2;
    b = 2;
    return a + b;
}


//Expresion

var myFunctions = function suma() {
    return myFunction();
}

console.log(myFunctions());

function sumar(a, b) {
    let result = a * b;
    return result;
}

pedro = sumar(1, 2)