// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str;
}

function suma(x, y) {
  return x + y;
}

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
}

function obtenerResto(x, y) {
  const resto = x % y;
  return resto;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esImpar(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

function elevarAlCuadrado(num) {
  const highNumber = Math.pow(num, 2);
  return highNumber;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}

function elevarAlCubo(num) {
  const highNumber = Math.pow(num, 3);
  return highNumber;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}

function elevar(num, exponent) {
  const highNumber = Math.pow(num, exponent);
  return highNumber;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}

function redondearNumero(num) {
  const roundedNumber = Math.round(num);
  return roundedNumber;
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
}

function redondearHaciaArriba(num) {
  const roundedNumber = Math.ceil(num);
  return roundedNumber;
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
}

function numeroRandom() {
  min = Math.ceil(0);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min) + min);
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}

function esPositivo(numero) {
  let text;
  if (numero > 0) {
    return (text = "Es positivo");
  } else if (numero === 0) {
    return false;
  } else {
    return (text = "Es negativo");
  }
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
}

function agregarSimboloExclamacion(str) {
  const newText = str + "!";
  return newText;
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  const completeName = `${nombre} ${apellido}`;
  return completeName;
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
}

function obtenerSaludo(nombre) {
  const greeting = `Hola ${nombre}!`;
  return greeting;
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
}

function obtenerAreaRectangulo(alto, ancho) {
  const area = alto * ancho;
  return area;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
}

function retornarPerimetro(lado) {
  const squarePerimeter = lado + lado + lado + lado;
  return squarePerimeter;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
}

function areaDelTriangulo(base, altura) {
  const triangleArea = (base * altura) / 2;
  return triangleArea;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
}

function deEuroAdolar(euro) {
  const dollarChange = euro * 1.2;
  return dollarChange;
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
}

function esVocal(letra) {
  let text;

  if (letra === 'a' 
  || letra === 'e' 
  || letra === 'i' 
  || letra === 'o' 
  || letra === 'u'
  && letra.length === 1) {
    return text = "Es vocal";
  } else {
    return text = "Dato incorrecto";
  }
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
