// FUNCIONES PARA VALIDAR CARACTERES

function validarString(text) {
    if (typeof text != "string") {
        throw TypeError("El caracter ingresado no es un texto, valide nuevamente")
    }
}
function validarArray(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError(' El argumento debe ser un arreglo, valide nuevamente');
    }
}
function isNumber(numero) {
    if (typeof numero != 'number') {
        throw TypeError('El argumento debe ser un numero, valide nuevamente')
    }
}
function isNumberPositive(numero) {
    if (numero < 0) {
        throw TypeError('El numero debe ser positivo')
    }
}
function isNumberInteger(numero) {
    if (!Number.isInteger(numero)) {
        throw TypeError('El argumento debe ser un numero entero, valide nuevamente')
    }
}
function allElementsString(cadena) {
    if (!cadena.every(e => typeof e === 'string')) {
        throw TypeError('todos los elementos del Array ben ser strings, valide nuevamente');
    }
}

// FIN DE FUNCIOONES PARA VALIDAR CARACTERES






// EXAMEN



// 1. Colocar las condiciones necesarias para que se cumpla la salida en consola. 

var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
    //console.log("numero1 no es mayor que numero2");
}
if (numero2 >= 0) {
    //console.log("numero2 es positivo");
}
if (numero1 < 0) {
    //console.log("numero1 es negativo o distinto de cero");
} else {
    //console.log("numero1 es positivo");
}

if ((numero1 + 1) < numero2) {
    //console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// 2. El factorial de un número entero n es una operación matemática que consiste en
// multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
// (escrito como 5!) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120
// Utilizando la estructura crear un script que calcule la factorial de un número entero.

function factorial(numero) {
    isNumber(numero)
    isNumberInteger(numero)
    isNumberPositive(numero)
    let aument = 1;
    for (let i = 1; i <= numero; i++) {
        aument *= i
    }
    return aument;
}

// try {
//     console.log(factorial(5)) // 120
//     console.log(factorial(-5)) // Error: El numero debe ser positivo
//     console.log(factorial("soy un string")) // Error: El argumento debe ser un numero, valide nuevamente
// } catch (e) {
//     console.log(`Error: ${e.message}`);
// }



// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// 3.- Escribir el código de una función a la que se pasa como parámetro un número entero
// y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función. (20 pts)

function isEvenNumber(numero) {
    isNumber(numero)
    isNumberInteger(numero)
    isNumberPositive(numero)
    if (numero % 2 == 0) {
        console.log(`El número ${numero} es par`);

    } else {
        console.log(`El número ${numero} es impar`);
    }
}
// try {
//     isEvenNumber(5) // El número 5 es impar
//     isEvenNumber(120) // El número 120 es par
//     isEvenNumber("hola") // Error: El argumento debe ser un numero, valide nuevamente
// } catch (e) {
//     console.log(`Error: ${e.message}`);
// }


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// 4.- Definir una función determine si la cadena de texto que se le pasa como parámetro
// es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
// derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”

function palindromo(cadena) {
    validarString(cadena)
    var resultado = `la cadena "${cadena}"`;
    var minusculas = cadena.toLowerCase();
    var array = minusculas.split("");
    var sinEspacios = "";
    for (i in array) {
        if (array[i] != " ") {
            sinEspacios += array[i];
        }
    }

    var letras = sinEspacios.split("");
    var letrasReves = sinEspacios.split("").reverse();
    var esIgual = true;
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {
        }
        else {
            esIgual = false;
        }
    }

    if (esIgual) {
        resultado += " es un palíndromo";
    }
    else {
        resultado += " no es un palíndromo";
    }

    return resultado;
}

// try {
//     console.log(palindromo("la ruta nos aporto otro paso natural")) // es palindromo
//     console.log(palindromo(5)) //Error: El caracter ingresado no es un texto, valide nuevamente
// } catch (e) {
//     console.log(`Error: ${e.message}`);
// }


// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// 5. Definir la siguiente jerarquía de objetos

class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.edad = edad;
        this.nombre = nombre;
    }

    obtDetalles() {
        if (typeof this.nombre == "string" && Number.isInteger(this.edad) && 0 < this.edad) {
            console.log(`El nombre de la persona es ${this.nombre} y tiene ${this.edad} años de edad`);
        }
        else {
            console.log(`ingreso un caracter invalido, verifique nuevamente`);
        }
    }
}

class Estudiante extends Persona {
    calificacion;
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificacion = 5;
    }
    obtDetalles() {
        if (typeof this.nombre == "string" && Number.isInteger(this.edad) && 0 < this.edad) {
            console.log(`El nombre de el Estudiante es ${this.nombre}, tiene ${this.edad} años de edad y la nota en la asignatura es de ${this.calificacion}`);
        }
        else {
            console.log(`ingreso un caracter invalido, verifique nuevamente`);
        }
    }
}
class Profesor extends Persona {
    asigantura;
    nivel;
    constructor(nombre, edad) {
        super(nombre, edad);
        this.asigantura = "JS";
        this.nivel = "basico";
    }
    obtDetalles() {
        if (typeof this.nombre == "string" && Number.isInteger(this.edad) && 0 < this.edad) {
            console.log(`El nombre de el Profesor es ${this.nombre}, tiene ${this.edad} años de edad y dica el curso de ${this.asigantura} en el nivel ${this.nivel}`);
        }
        else {
            console.log(`ingreso un caracter invalido, verifique nuevamente`);
        }
    }
}

class Grupo {
    profesor;
    promedio;
    estudiantes = [];
    constructor(profesor, estudiantes) {
        this.profesor = profesor;
        for (let j = 0; j < estudiantes.length; j++) {
            this.estudiantes.push(estudiantes[j])
        }
    }
    addGroup() {
        let grupo = new Object();
        grupo = { profesor: this.profesor, estudiantes: this.estudiantes }
        console.log(grupo);
    }
    calificar() {
        for (let j = 0; j < this.estudiantes.length; j++) {
       console.log (this.estudiantes[j].calificacion = Math.random()*10);
        }
    }
    obtDetalles() {
        console.log(`El nombre de el Profesor es ${this.profesor.nombre} y  tiene ${this.profesor.edad} años de edad`);
        console.log("los estudiantes que estan adscritos al grupo son")
        console.log(this.estudiantes);
    }
}




let daniel = new Persona('Daniel', 25)
let alejandro = new Estudiante('Alejandro', 26)
let camilo = new Estudiante('camilo', 21)
let santiado = new Estudiante('santiado', 22)
let adriana = new Estudiante('adriana', 28)
let paula = new Estudiante('paula', 22)
let andres = new Estudiante('andres', 28)
let juan = new Profesor('Juan', 35)
jsGroup = new Grupo(juan, Array(alejandro, camilo, santiado, adriana, paula, andres));
// daniel.obtDetalles()
// alejandro.obtDetalles()
// juan.obtDetalles()
jsGroup.obtDetalles()
jsGroup.calificar()
jsGroup.addGroup()




// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// 5. BONUS
function combinacion(str) {
    validarString(str)

    if (str.length <= 2) {
        return str.length === 2 ? [str, str[1] + str[0]] : [str]
    }
    return str.split('').reduce((a, c, i) => a.concat(combinacion(str.slice(0, i) + str.slice(i + 1)).map(v => c + v)), []);
}

// try {
//     console.log(combinacion('hola'));
//     // los resultados, h, ho , hol, ... no son combinaciones
// } catch (e) {
//     console.log(`Error: ${e.message}`);
// }