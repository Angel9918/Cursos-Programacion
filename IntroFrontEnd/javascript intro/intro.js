var numero = 4; /* La palabra clave para declarar una variable puede ser var, let, const*/
var numero2 = 5;

var suma = numero + numero2;
var resta = 12 - 7;
var division = 9 / 4;
var multiplicacion = 15 * 9;
var modulo = 8 % 2;
var producto = 3.4 * 10.4;

/* console.log(suma);
console.log(resta);
console.log(division);
console.log(multiplicacion);
console.log(modulo);
console.log(producto);
 */
/* Una variable puede ser llamada despues de ser creada sin necesidad de utilizar la palabra reservada de var */

var libros_comprados = 105;

// Incrementos (metodos)
libros_comprados = libros_comprados + 1;
libros_comprados += 1;
libros_comprados++;

//Reducciones (metodos)
libros_comprados = libros_comprados - 1;
libros_comprados -= 1;
libros_comprados--;

// Multiplicacion ()
libros_comprados *= 6;

// Division
libros_comprados /= 6;

// console.log(libros_comprados)

var nombre = "Andres";
var apellido = 'Turing';

/* Secuencias de escape

Codigo | Resultado
---------------------
\'      Comilla simple
\"      Comilla doble
\\      Barra invertida
\n      Línea nueva
\r      Retorno de carro
\t      Tabulación
\b      Retroceso
\f      Salto de página
...
*/

var mi_cadena = "JavaScript";

/* console.log(mi_cadena.length); // Para obtener la longitud total de la cadena
console.log(mi_cadena[0]); // Para acceder al primer indice de una cadena
console.log(mi_cadena[mi_cadena.length - 1]); // Para acceder al ultimo caracter de una cadena */

// Concatenar cadenas

var sustantivo = "perro";
var adjetivo = "negro";
var verbo = "corrió";
var adverbio = "rápidamente";

var palabras_en_blanco1 = "El " + sustantivo + " " + adjetivo + " " + verbo + " " + adverbio + " a la tienda.";
/* console.log(palabras_en_blanco1) */

var sustantivo = "bicicleta";
var adjetivo = "pequeña";
var verbo = "voló";
var adverbio = "lentamente";

var palabras_en_blanco2 = "La " + sustantivo + " " + adjetivo + " " + verbo + " a la tienda " + adverbio + ".";
/* console.log(palabras_en_blanco2) */

// Arreglos

var arreglo = ["Jhon", 24];
//console.log(arreglo[1]);

var estudiantes = ["Jhon", "Gino", "Emily", "Juan"];
//console.log(estudiantes);

var lista_estudiantes = [["Nora", 97], ["Gino", 78]];
//console.log(lista_estudiantes[1][1]);

var lista_productos = [["Camisa", 5.67, "S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S768"]];
//console.log(lista_productos[0][2]);

var suma = lista_productos[0][1] + lista_productos[1][1] + lista_productos[2][1];
lista_productos[0][1] = 10;
//console.log(lista_productos);
//console.log(suma);

var datos = [10, 20, 30];
datos[0] = 20;
//console.log(datos);
datos[1] = [1, 2, 3];
//console.log(datos);

var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano"); //Agregar elemento al final de la lista
//console.log(estaciones);
estacion = estaciones.pop(); //Eliminar el ultimo elemento de la lista
//console.log(estaciones);
//console.log(estacion)
estaciones.shift(); //Eliminar el primer elemento de una lista
//console.log(estaciones);
estaciones.unshift("Verano"); //Agregar valores al principio del arreglo
//console.log(estaciones)

var lista_compras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5], ["refresco", 7], ["pollo", 7]];

/* console.log("Se van a comprar " + lista_compras[0][1] + " unidades de " + lista_compras[0][0] + ".");
console.log("Se van a comprar " + lista_compras[1][1] + " unidades de " + lista_compras[1][0] + ".");
console.log("Se van a comprar " + lista_compras[2][1] + " unidades de " + lista_compras[2][0] + ".");
console.log("Se van a comprar " + lista_compras[3][1] + " unidades de " + lista_compras[3][0] + ".");
console.log("Se van a comprar " + lista_compras[4][1] + " unidades de " + lista_compras[4][0] + ".");
console.log("Se van a comprar " + lista_compras[5][1] + " unidades de " + lista_compras[5][0] + ".");
 */

//Funciones

function mostrar_mensaje() {
    console.log("¡Hola, Mundo!");
}
//mostrar_mensaje();

function sumar(a, b) {
    suma = a + b;
    //    console.log("El resultado de la suma es:", suma);
}

var x = 20;
var y = 4;
sumar(x, y)

// Variables globales

var variable_global = 35;

function mi_funcion() {
    //console.log(variable_global);
}
mi_funcion();

// Variable local

function var_local() {
    var variable_local = 4;
    //console.log(variable_local);
}

var_local()

// Retorno de valor

function sumado(a, b) {
    return a + b;
}

var resultado = sumado(5, 3); /* Asignar un valor retornado a una variable */
//console.log(resultado);

function proximo_en_fila(arreglo, elemento) {
    arreglo.push(elemento);
    return arreglo.shift();
}

var arreglo = [1, 2, 3, 4, 5];

/* console.log("Antes: ", JSON.stringify(arreglo));
console.log(proximo_en_fila(arreglo, 6));
console.log("Despues: ", JSON.stringify(arreglo)); */

// Valores booleanos

true
false
/* console.log(5 == 5);
console.log("Hola" == "Hola");
console.log(9 == "9");
console.log([1, 2, 3] == [1, 2, 3]) */; // Operador de igualdad

/* console.log(9 === 9); 
console.log(9 === "9"); */ // Operador de igualdad estricta, compara el tipo de valor que se quiere comparar 

/* console.log(9 != 6);
console.log(9 != 9); */ // Operador de desigualdad

/* console.log(1 !== "1"); */ // Operador de desigualdad estricta 

/* console.log("B" > "A") */; // Compara la posicion de la letra en el alfabeto

var a = 1;
/* console.log((a > 5) && (a < 10)); */ //Operador AND (&&)
/* console.log((a > 5) || (a < 10)); */ // Operador OR (||)
/* console.log(!(a > 5)); */ // Operador NOT (!) Si la expresion es verdadera entonces se vuelve falsa y viceversa

// Condicionales

var x = 5;

if (x > 2 && x < 10) {
    //console.log("La condicion es verdadera");
}

var estacion = "Verano";

if (estacion == "Invierno") {
    //console.log("La condición es verdadera.");
} else {
    //console.log("La condición es falsa.")
}

function clasificar_valor(valor) {
    if (valor % 2 == 0) {
        console.log("Par");
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3");
    }
    else {
        console.log("Impar");
    }
}

function clasificar(valor) {
    if (valor < 5) {
        console.log("Menor que 5.");
    } else if (valor < 10) {
        console.log("Menor que 10.")
    } else {
        console.log("Mayor o igual a 10.")
    }
}

function imc(peso, altura) {
    indice = peso / altura ** 2;
    console.log(indice);
    if (indice < 18.5) {
        console.log("Bajo peso");
    } else if (indice <= 24.9) {
        console.log("Peso normal");
    } else if (indice <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

// imc(50, 1.54);

function puntaje_golf(par, golpes) {
    if (golpes == 1) {
        return "Hole in one!";
    } else if (golpes <= par - 2) {
        return "Eagle";
    } else if (golpes == par - 1) {
        return "Birdie";
    } else if (golpes == par) {
        return "Par";
    } else if (golpes == par + 1) {
        return "Bogey";
    } else if (golpes == par + 2) {
        return "Double Bogey";
    } else if (golpes >= par + 3) {
        return "Go Home";
    }
}

/* console.log(puntaje_golf(5, 10)); */

// Sentencia Switch
function clasificar_valor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}

//console.log(clasificar_valor(2));

var producto = "pizza";

switch (producto) {
    case "pizza":
        //console.log("La pizza básica cuesta $10");
        break;
    case "hamburguesa":
        //console.log("La hamburguesa cuesta $6");
        break;
    case "helado":
        //console.log("El helado cuesta $2")
        break;
}

// console.log("Muchas gracias.")

function seleccion_idioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
            break;
    }
    return idioma;
}

/* console.log(seleccion_idioma(4)); */

function clasificar_volumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return volumen;
}

//console.log(clasificar_volumen(6));

function es_menor(a, b) {
    return a < b;
}

// console.log(es_menor(6, 5));

function raiz_cuadrada(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

// console.log(raiz_cuadrada(-5))

var conteo = 0;

function contar_cartas(carta) {
    var decision;

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break
    }
    if (conteo > 0) {
        decision = "Apostar";
    } else {
        decision = "Esperar";
    }
    return conteo + " " + decision;
}

// console.log(contar_cartas(2));
// console.log(contar_cartas(8));
// console.log(contar_cartas("A"));


// Acceso a propiedades de un objeto

var perro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};

// console.log(perro);
/* console.log(perro.nombre); */ // variable.propiedad notacion de punto para acceder a los valores dentro de un objeto

var cuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero paginas": 200,
    "numero hojas": 100
};

//console.log(cuaderno["numero paginas"]); // notacion de corchetes

var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
}

var posicion = 1;

/* console.log(resultados[posicion]); */ // Acceso a propiedades por variables

// Actualizar propiedades de un objeto

var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

/* console.log(mochila["color"]);

mochila["color"] = "verde"; // Reasignar un valor
console.log(mochila["color"]);

mochila["tipo"] = "correas"; // Agregar valores a un objeto
console.log(mochila);

mochila["contenido"].push("lapiz"); // Agregar valores a un arreglo dentro del objeto
console.log(mochila["contenido"]);

mochila["contenido"] = ["esfero", "calculadora"]; // Actualizar el valor de un arreglo dentro del objeto
console.log(mochila);

delete mochila["tipo"]; // Eliminar propiedades de un objeto, se puede con corchetes o notacion de punto
console.log(mochila); */


// Objetos para busquedas

function elemento_quimico(simbolo) {

    var tabla_periodica = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    return tabla_periodica[simbolo];
}

/* console.log(elemento_quimico("B")) */

var cuaderno = {
    "color": "Verde",
    "categoria": 3,
    "precio": 4.56
};

// console.log(cuaderno.hasOwnProperty("color")); // Verifica si un objeto posee una propiedad ingresada, retorna un booleano

function verificar_propiedad(objeto, propiedad) {
    if (objeto.hasOwnProperty(propiedad)) {
        return "Propiedad: " + objeto[propiedad];
    } else {
        return "El objeto no tiene esa propiedad.";
    }
}

/* console.log(verificar_propiedad(cuaderno, "color")) */

// Objetos complejos (Arreglo de objetos)

var ordenes_pizza = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "para llevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimenton"
        ],
        "para llevar": false
    },
    {
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "toppings": [],
        "para llevar": true
    }
];

/* console.log(ordenes_pizza[0]["tipo"]);
console.log(ordenes_pizza[1].tipo);
console.log(ordenes_pizza[1].toppings[1]); */

/* ordenes_pizza[2].toppings.push("carne");
console.log(ordenes_pizza[2].toppings); */ // Agregar valores a un arreglo dentro de un objeto

// Objetos anidados

var receta = {
    "descripcion": "postre",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 gramos",
            "sal": "1 cucharada",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 gramos",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 gramos"
        }
    }
};

/* console.log(receta["costo"]);
console.log(receta["ingredientes"]["masa"]["harina"]);
receta.ingredientes[1]["azucar"] = "3 cucharadas";
console.log(receta["ingredientes"]["masa"]["azucar"]); */


// Eliminar elementos 

var curso = {
    "titulo": "Aprende JavaScript desde cero",
    "idioma": "Español",
    "duracion": 30
};

/* delete curso.duracion;
console.log(curso); */

// Arreglos anidados

var plantas = [
    {
        tipo: "Flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];


/* var Flor = plantas[1]["lista"][2];
console.log(Flor);
console.log(plantas[0].lista[0]); */


// Ejercicio de actualizacion de discos

var discos = {
    7853: {
        "titulo album": "Bee Gees",
        "artista": "Bee Gees",
        "canciones": ["Stayin alive"]
    },
    5439: {
        "titulo album": "ABBA Gold"
    }
}

function actualizar_discos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad]
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}
/* console.log(discos[5439]["artista"]);
actualizar_discos(discos, 5439, "artista", "ABBA");
console.log(discos[5439]["artista"]);
console.log(discos); */


// Ciclo while

var i = 0;

while (i <= 3) {
    // console.log("Hola Mundo");
    i++;
}

var arreglo = [];
var i = 0;

while (i < 10) {
    arreglo.push(i);
    i++;
}

// console.log(arreglo);


var numeros = [2, 3, 4, 5, 6, 8, 9, 34]

while (numeros.length > 4) {
    numeros.pop();
}

// console.log(numeros);

var arreglo = [];

// Valor inicial de la variable; condicion de ejecucion; como va a actualizarse la variable
for (var i = 0; i < 10; i++) {
    arreglo.push(i);
}

// console.log(arreglo)

var numeros_impares = [];

for (var i = 1; i < 20; i += 2) {
    numeros_impares.push(i);
}
// console.log(numeros_impares);

var numeros_pares = [];

for (var i = 2; i < 27; i += 2) {
    numeros_pares.push(i)
}
// console.log(numeros_pares)


for (var i = 15; i >= 10; i--) {
    //console.log(i);
}

var numeros_reversa = [];

for (var i = 10; i > 0; i -= 2) {
    numeros_reversa.push(i);
}

// console.log(numeros_reversa)

var arreglo_pares = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < arreglo_pares.length; i++) {
    total += arreglo_pares[i]
}
// console.log(total)

var lenguajes = ["Java", "C++", "Python", "JavaScript"];

for (var i = 0; i < lenguajes.length; i++) {
    //console.log(lenguajes[i].toUpperCase());
}

function contar_numeros_pares(arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

/* console.log(contar_numeros_pares([6,3,4,7,2])) */

// Ciclos anidados

var arreglo_anidado = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < arreglo_anidado.length; i++) {
    var arregloAnidado = arreglo_anidado[i]; // Arreglo anidado
    //console.log(arreglo_anidado[i]);
    for (var j = 0; j < arregloAnidado.length; j++) {
        //console.log(arregloAnidado[j]); // Elemento de cada arreglo
    }
}

// Ciclo do ... while

var x = 5;

do {
    //console.log(x);
    x++;
} while (x < 10)

// Buscador de perfil

var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "05436559",
        "gustos": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0543386383",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "683386",
        "gustos": ["Casos interesantes", "Violin"]
    }
];

function buscar_contacto(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no esta en la lista."
}

/* console.log(buscar_contacto("Nora","gustos")) */

//Numeros aleatorios

function generar_aleatorio() {
    return Math.random(); // [0,1)
}

function numero_entero_aleatorio(limite) {
    // Permite generar valores entre 0 y el limite que se indique 
    return Math.floor(Math.random() * limite);
}

for (var i = 0; i < 10; i++) {
    // console.log(numero_entero_aleatorio(100))
}

function rango_aleatorio(inferior, superior) {
    return Math.floor(Math.random() * (superior - inferior + 1)) + inferior;
}

for (var i = 0; i < 10; i++) {
    //console.log(rango_aleatorio(8,15));
}

//Funcion parseInt()

// console.log(parseInt("5")); // Transforma una cadena numerica a integer
// console.log(parseInt(110111,2)); // Devuelve un numero binario a integer
// console.log(parseInt("3E0A",16)); // Devuelve un numero hexadecimal a integer


// Operador condicional o operador ternario

function minimo(x, y) {
    // ? permite determinar el valor a retornar si la condicion es verdadera
    // : permite determinar el valor a retornar si la primera consicion es falsa
    return x < y ? x : y;

    /* if (x<y) {
        return x;
    } else {
        return y;
    } */
}

var a = 5;
var b = 9;

/* console.log(a > b ? a + 2 : b * 3); */

// Anidar operadores ternarios

function comparar_numeros(a, b) {
    return a == b ? "a y b son iguales"
        : a < b ? "a es menor que b"
            : "a es mayor que b";

    /* if(a == b) {
        return "a y b son iguales";
    } else if (a < b) {
        return "a es menor que b";
    } else {
        return "a es mayor que b";
    } */
}

/* console.log(comparar_numeros(3,6)) */

// Objetos inmutables

let colores = {
    "verde": "#10e04b",
    "azul": "1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};

Object.freeze(colores); // Restringe las acciones que se pueden realizar sobre el objeto

//Funciones flecha (funciones anonimas o sin nombre especifico)

const fecha = () => new Date(); // asigna una funcion a una variable, recibiendo los argumentos dentro del parentesis y retornando el valor despues de la flecha

const sumar_tres = (x) => x + 3;

// console.log(sumar_tres(7));

const concatenar = (arr1, arr2) => arr1.concat(arr2);


// console.log(concatenar([1, 2], [3, 4, 5]));

const suma_num = function (a, b) {
    let num = 6;
    return a + b + num;
};

const sumar_num = (a, b) => {
    let num = 6;
    return a + b + num;
};

/* console.log(sumar_num(1, 2)); */

// Valores por defecto para parametros

// const incrementar = (num, valor = 3) => num + valor;

/* console.log(incrementar(4,6)); */

// Operador rest

const sumando = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}

//console.log(sumando());

// Operador spread

const numeros_arr = [1,2,3];

function sumar(x,y,z){
    return x+y+z;
}

//console.log(sumar(...numeros_arr))

// Sintaxis de desestructuracion

const usuario_array = {
    nombre_arr: "Gino Smith",
    edad_arr:34
};

const {nombre_arr,edad_arr} = usuario_array;
//console.log(nombre_arr,edad_arr)

var coordenadas_obj = {
    x_obj: 4,
    y_obj: 6,
    z_obj: 12
};

const {x_obj,y_obj,z_obj} = coordenadas_obj;
/* console.log(x_obj);
console.log(y_obj);
console.log(z_obj); */

const usuario_obj = {
    JohnDoe: {
        edad_obj: 27,
        correo_obj: "johnDoe@correo.com"
    }
};


const {JohnDoe: {edad_obj: Edad_Usuario,correo_obj: Correo_Usuario}} = usuario_obj;
/* console.log(Edad_Usuario);
console.log(Correo_Usuario); */


const PRONOSTICO_LOCAL = {
    "ayer":{
        minima: 66,
        maxima: 70 
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};

const {hoy: {minima: MinimaHoy, maxima: MaximaHoy}} = PRONOSTICO_LOCAL;
//console.log(MinimaHoy,MaximaHoy)

// Sintaxis de desestructuración

var a;
var b;
var c;

[a,,,b,,,,c] = [1,2,3,4,5,6,7,8,9];

/* console.log(a,b,c) */

var d = 8;
var e = 6;

[d,e] = [e,d];

/* console.log(d, e); */

// Desestruturacion con operador rest

var a1;
var b1;
var arr;
[a,b,...arr] = [1,2,3,4,5,6,7,];
/* console.log(a, b, arr); */

const arregloInicial = [1,2,3,4,5,6,7,8]

function remover_primeros_tres(arreglo) {
    const [, , ,...nuevo_arreglo_arr] = arreglo;
    return nuevo_arreglo_arr;
};

const arregloFinal = remover_primeros_tres(arregloInicial)
console.log(arregloFinal)
















//Recursividad

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

//console.log(multiply([4, 5, 6, 7], 3))



const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

//console.log(contacts.hasOwnProperty("Akira"));

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

//console.log(lookUpProfile("Bob", "number"));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//console.log(randomRange(4,6))

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
//console.log(countup(10));

function rangeOfNumbers(startNum, endNum) {
    if (endNum == startNum) {
        return [endNum];
    } else {
        const rangeArray = rangeOfNumbers(startNum + 1, endNum)
        rangeArray.unshift(startNum)
        return rangeArray;
    }
};

//console.log(rangeOfNumbers(1, 5));