// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  let newArray = [];
  for (let prop in objeto) {
    newArray.push([prop, objeto[prop]]);
  }
  return newArray;

  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
}

function numberOfCharacters(string) {
  let contar = {};
  string.replace(/\S/g, (p) => {
    contar[p] = isNaN(contar[p]) ? 1 : contar[p] + 1;
  });
  return contar;

  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
}

function capToFront(s) {
  const mayusculas = s
    .split("")
    .filter((e) => e === e.toUpperCase())
    .join("");
  const minusculas = s
    .split("")
    .filter((e) => e === e.toLowerCase())
    .join("");
  const respuesta = `${mayusculas}${minusculas}`;
  return respuesta;
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}

function asAmirror(str) {
  const newString = str.split("").reverse().join("");
  const respuesta = newString.split(" ").reverse().join(" ");
  return respuesta;
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
}

function capicua(numero) {
  const convertAndReverse = numero.toString().split("").reverse().join("");
  const newNumber = Number(convertAndReverse);
  if (newNumber === numero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}

function deleteAbc(cadena) {
  let newCadena = cadena.split("");
  const filter = newCadena.filter((element) => {
    if (element !== "a" && element !== "b" && element !== "c") {
      return element;
    }
  });
  return filter.join("");
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}

function sortArray(arr) {
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  return arr;
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}

function buscoInterseccion(arreglo1, arreglo2) {
  // let interseccion = [...arreglo1.map(d => comparacion(d)), ...arreglo2.map(d => comparacion(d))];
  const interseccion = Array.from(
    new Set([...arreglo1].filter((e) => new Set(arreglo2).has(e)))
  );
  return interseccion;
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
