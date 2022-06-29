// No cambies los nombres de las funciones.

const { add } = require("@11ty/eleventy/src/TemplateCache");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const firstElemnt = array[0];
  return firstElemnt;
}

function devolverUltimoElemento(array) {
  const latestElemnt = array[array.length - 1];
  return latestElemnt;
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  const arrayLength = array.length;
  return arrayLength;
}

function incrementarPorUno(array) {
  let incrementArray = array.map((item) => item + 1);
  return incrementArray;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  const transformsToString = palabras.join(" ");
  return transformsToString;
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {
  const includElement = array.includes(elemento);
  return includElement;

  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  const addNumbers = numeros.reduce(
    (acumulador, element) => acumulador + element
  );

  return addNumbers;
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  let resultLength = resultadosTest.length;
  const addNumbers = resultadosTest.reduce(
    (acumulador, element) => acumulador + element
  );
  const resultTest = addNumbers / resultLength;
  return resultTest;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  const numberGrand = Math.max(...numeros);
  return numberGrand;
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  var producto = 1;
  if (arguments.length === 0) {
    return 0;
  }
  for (var i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;

  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}

function cuentoElementos(arreglo) {
  const filter = arreglo.filter((element) => element > 18);
  const countElemnts = filter.length;
  return countElemnts;
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
}

function diaDeLaSemana(numeroDeDia) {
  switch (numeroDeDia) {
    case 1:
    case 7:
      return "Es fin de semana";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
  }
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
}

function empiezaConNueve(n) {
  const verifyDigi = parseInt(String(n)[0]);
  if (verifyDigi == 9) {
    return true;
  } else {
    return false;
  }
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
}

function todosIguales(arreglo) {
  const arrayEquals = arreglo.every((element) => arreglo[0] == element);
  return arrayEquals;

  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
}

function mesesDelAño(array) {
  const filter = array.filter(
    (elements) =>
      elements === "Enero" || elements === "Marzo" || elements === "Noviembre"
  );
  if (filter.length === 3) {
    return (newArray = filter);
  } else {
    return "No se encontraron los meses pedidos";
  }
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

function mayorACien(array) {
  // let newArray;
  const filter = array.filter((elements) => elements > 100);

  return filter;
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}

function breakStatement(numero) {
  let container = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma += 2;
    if (suma === i) {
      break;
    } else {
      container.push(suma);
    }
  }
  if (container.length < 10) {
    return "Se interrumpió la ejecución";
  } else if (container.length === 10) {
    return container;
  }

  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}

function continueStatement(numero) {
  let container = [];
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    } else {
      suma += 2;
      container.push(suma);
    }
  }
  return container;

  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
