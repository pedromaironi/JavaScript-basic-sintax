Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@pedromaironi
degranda
    /
    jsBasico -
    10
6962
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
jsBasico - /12-arrays.js /
@degranda
degranda more examples
Latest commit dce37d1 on 3 Jan 2020
History
1 contributor
42 lines(24 sloc) 1.08 KB

// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]); // Los arrays iician en "0" 


// === Metodos para mutar arrays ===


// .push();

var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
console.log(frutas);

// .pop();

var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);©
2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About