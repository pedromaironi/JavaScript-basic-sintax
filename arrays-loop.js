let articulo = [
    { nombre: "Bici", costo: 300 },
    { nombre: "Tv", costo: 200 },
    { nombre: "Computadora", costo: 500 },
    { nombre: "Celular", costo: 3600 },
    { nombre: "Laptop", costo: 3700 }
];

var articulosFiltrados = articulo.filter(function(articulo) {
    return articulo.costo == 3600;
});

/* Mapeo */
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});

nombreArticulos

let encuentraArticulo = articulo.find(function(articulo) {
    return articulo.nombre === "Tv"
});

encuentraArticulo

articulos.forEach(function(articulo) {
        console.log(articulo.nombre);
    })
    /* El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

    El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.*/