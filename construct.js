function auto(MARCA, MODELO, ANO) {
    this.MARCA = MARCA;
    this.MODELO = MODELO;
    this.ANO = ANO;
}

var autos = [];
for (let i = 0; i < 30; i++) {
    var marca = prompt("Ingresa la marca del auto:");
    var modelo = prompt("Ingresa la marca del auto:");
    var Ano = prompt("Ingresa la marca del auto:");
    autos.push(new auto(marca, modelo, Ano));
}

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

function ropa(camisa, zapatos, gorra) {
    this.camisa = camisa;
    this.zapatos = zapatos;
    this.gorra = gorra;
}

var persona = [];
for (let i = 0; i < 5; i++) {
    persona.push(new ropa("camisa", "zapatos", "gorra"));
}

for (var elementos of persona) {
    console.log(elementos);
}