// -----------------------------------------------------------------------
// Ejercicio 1
// Dado un array de objetos, obtener el objeto con el id 3
const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

//SOLUCION
console.log(
  "\n Ejercicio 1" + "\n" + "--------------------------------------------"
);

console.log(arrNames.find((idArrNames) => idArrNames.id === 3));

// -----------------------------------------------------------------------
// Ejercicio 2
// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

//SOLUCION
console.log(
  "\n Ejercicio 2" + "\n" + "--------------------------------------------"
);

// filter --> por defecto filtra por valores de string, number o true
console.log(arrDirty.filter((elem) => elem));

// -----------------------------------------------------------------------
// Ejercicio 3
// Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales
const arrCities = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Paris", country: "France", capital: true },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Rome", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

//SOLUCION
console.log(
  "\n Ejercicio 3" + "\n" + "--------------------------------------------"
);

// todos los campos
console.log(
  arrCities.filter((cities) => cities.country === "Spain" && !cities.capital)
);

// solo ciudades
// filtro de las capitales en false y se guardan en un nuevo array, después hace un mapeo para que retorne solo el valor de city
console.log(
  arrCities
    .filter((elem) => elem.country === "Spain" && !elem.capital)
    .map((elem) => elem.city)
);

// -----------------------------------------------------------------------
// Ejercicio 4
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos.
const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

//SOLUCION
console.log(
  "\n Ejercicio 4" + "\n" + "--------------------------------------------"
);

// CORRECCION
// crea un array de arrays, a ese se le hace un reduce, que filtra si el item actual (current) se encuentra dentro del accumulator (prev), y devuelve un array con los números repetidos en los 3 arrays
const arrData = [arrNumber1, arrNumber2, arrNumber3];

console.log(
  arrData.reduce((prev, current) =>
    prev.filter((item) => current.includes(item))
  )
);

// MIO
// console.log(
//   arrNumber1.filter(
//     (elem) => arrNumber2.includes(elem) && arrNumber3.includes(elem)
//   )
// );

// -----------------------------------------------------------------------
// Ejercicio 5
// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
// Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Bordeaux", country: "France", capital: false },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Florence", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

//SOLUCION
console.log(
  "\n Ejercicio 5" + "\n" + "--------------------------------------------"
);

// CORRECCION
// filter con destructuring para filtrar las capitales false
//map para sacar un array nuevo y no modificar el original, y sacarlo con el siguiente formato {city: "Logroño", isSpain: "true"}, para que muestre solo city y añada isSpain con su valor true o false (si el country es Spain)
console.log(
  arrCities2
    .filter(({ capital }) => !capital)
    .map(({ city, country }) => ({ city: city, isSpain: country === "Spain" }))
);

// MIO
// let arrCitiesNoCapital2 = [];

// mapeo de cada elemento encontrando los que tengan capital false. Entonces lo pushea a arrCitiesNoCapital2, con el siguiente formato {city: "Logroño", isSpain: "true"}, para que muestre solo city y añada isSpain con su valor true o false (si el country es Spain)
// arrCities2.forEach((elem) => {
//   !elem.capital &&
//     arrCitiesNoCapital2.push({
//       city: elem.city,
//       isSpain: elem.country == "Spain" ? true : false,
//     });
// });

// console.log(arrCitiesNoCapital2);

// -----------------------------------------------------------------------
// Ejercicio 6
// Crea una función que redondee un número float a un número específico de decimales.

// La función debe tener dos parámetros:
// - Primer parámetro es un número float con x decimales
// - Según parámetro es un int que indique el número de decimales al que redondear
// - Evitar usar el método toFixed()

// SOLUCION
console.log(
  "\n Ejercicio 6" + "\n" + "--------------------------------------------"
);

// CORRECCION
// redondea (num (float) * 10^dec) entre 10^dec
const roundTo = (num, dec) => {
  return Math.round(num * 10 ** dec) / 10 ** dec;
};

// Ejemplo de uso de la función:
console.log(roundTo(2.123, 2)); // 2.12

console.log(roundTo(1.123456789, 6)); // 1.123457

// MIO
// toFixed(n) n es la longitud después del punto decimal; toPrecision(x) x longitud total (length).
// const roundTo = (num, dec) => {
//   return num.toFixed(dec);
// };

// const roundTo = (num, dec) => {
//   //divide por el "." en 2 arrays: num entero y decimal
//   let numbers = num.toString().split(".");

//   //coge el array de decimales y lo corta 1 numero mas del que proporcionan en el dec de la funcion
//   let decimals = numbers[1].slice(0, dec + 1);

//   //aqui se comprueba si el siguiente numero del dec de la funcion es < 5 para: si es true cortar el numero sobrante que pusimos antes; y si false para que le sume 1 y asi hacer el redondeo
//   let roundDec =
//     decimals.charAt(dec) < 5
//       ? decimals.slice(0, -1)
//       : Number(decimals.slice(0, -1)) + 1;

//   let roundNumber = numbers[0] + "." + roundDec;
//   return Number(roundNumber);
// };

// -----------------------------------------------------------------------
// Ejercicio 7
// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.

// La función debe tener dos parámetros:
// - Primer parámetro es un objeto con x número de campos y valores
// - Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

//SOLUCION
console.log(
  "\n Ejercicio 7" + "\n" + "--------------------------------------------"
);

// CORRECION
// Object.entries es para entenderlo mejor, pero lo suyo seria usar Object.key
const returnFalsyValues = (obj, func) => {
  return Object.entries(obj)
    .filter(([key, value]) => !func(value)) //  filtra cuando el value del obj dentro d ela func sea false
    .reduce((acc, [key, value]) => {
      acc[key] = value; // para asignar el valor a su key correspondiente del acumulador
      return acc;
    }, {}); // se inicializa vacio, porque sino coge el primer valor
};

// Ejemplo de uso de la función:
console.log(
  returnFalsyValues({ a: 1, b: "2", c: 3 }, (x) => typeof x === "string")
); // {a: 1, c: 3}

// MIO
// recorre todo el array, y si el parámetro de la funcion (la key en este caso) es verdadero, lo borra del objeto
// const returnFalsyValues = (obj, func) => {
//   for (let key in obj) {
//     func(obj[key]) && delete obj[key];
//   }

//   return obj;
// };

// -----------------------------------------------------------------------
// Ejercicio 8
// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

// La función debe tener 2 parámetros:
// - Primer parámetro debe ser el número de bytes
// - Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

//SOLUCION
console.log(
  "\n Ejercicio 8" + "\n" + "--------------------------------------------"
);

const fromBytesToFormattedSizeUnits = (bytes, prefix, truncateNumber = 3) => {
  let formatted;

  switch (prefix) {
    case "KB":
      return bytes / Math.pow(10, 3) + "KB";
      break;

    case "MB":
      formatted = bytes / Math.pow(10, 6);
      return formatted.toPrecision(truncateNumber) + "MB";
      break;

    case "GB":
      formatted = bytes / Math.pow(10, 9);
      return formatted.toPrecision(truncateNumber) + "GB";
      break;

    case "TB":
      formatted = bytes / Math.pow(10, 12);
      return formatted.toPrecision(truncateNumber) + "TB";
      break;

    case "PB":
      formatted = bytes / Math.pow(10, 15);
      return formatted.toPrecision(truncateNumber) + "PB";
      break;

    case "EB":
      formatted = bytes / Math.pow(10, 18);
      return formatted.toPrecision(truncateNumber) + "EB";
      break;

    case "ZB":
      formatted = bytes / Math.pow(10, 21);
      return formatted.toPrecision(truncateNumber) + "ZB";
      break;

    case "YB":
      formatted = bytes / Math.pow(10, 24);
      return formatted.toPrecision(truncateNumber) + "YB";
      break;

    default:
      return "Invalid data";
      break;
  }
};

// Ejemplo de uso de la función:
console.log(fromBytesToFormattedSizeUnits(1000, "KB")); // 1KB

console.log(fromBytesToFormattedSizeUnits(123456789, "MB")); // 123MB

console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, "GB", 5)); // -12.145GB

// -----------------------------------------------------------------------
// Ejercicio 9
// Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.

// La función debe tener un objeto como único parámetro.

//SOLUCION
console.log(
  "\n Ejercicio 9" + "\n" + "--------------------------------------------"
);

// MIO - 2º FORMA
// Object.entries es para entenderlo mejor, pero lo suyo seria usar Object.key
const toLowercaseKeys = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key.toLowerCase()] = value; // para asignar el valor a su key (en minuscula gracias al método toLowerCase()) correspondiente del acumulador
    return acc;
  }, {}); // se inicializa vacio, porque sino coge el primer valor
};

// Ejemplo de uso de la función:
const myObject = { NamE: "Charles", ADDress: "Home Street" };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

// MIO - 1º FORMA
// const toLowercaseKeys = (obj) => {
//   let objToLowerCase = {};

//   // entries devuelve las entradas de un obj
//   // por cada entrada, pone en minúsculas la key y lo guarda en un nuevo obj junto a su valor
//   Object.entries(obj).forEach(([key, value]) => {
//     objToLowerCase[key.toLowerCase()] = value;
//   });

//   return objToLowerCase;
// };

// -----------------------------------------------------------------------
// Ejercicio 10
// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.

//SOLUCION
console.log(
  "\n Ejercicio 10" + "\n" + "--------------------------------------------"
);

const removeHTMLTags = (code) => {
  /*
          PATRONES RegEx:
          / --> empieza RegEx
          < --> empieza expresión
          [^>] --> cualquier caracter que no sea ">"
          * --> que coincida todo del bloque anterior
          > --> termina expresión
          ? --> por si hay un hueco en blanco
          /g --> termina busqueda global de RegEx
        */

  //reemplaza todo lo de regEx por un caracter vacío
  const regEx = /<[^>]*>?/g;
  return code.replace(regEx, "");
};

// Ejemplo de uso de la función:
console.log(
  removeHTMLTags("<div><span>lorem</span> <strong>ipsum</strong></div>")
); // lorem ipsum

// -----------------------------------------------------------------------
// Ejercicio 11
// Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.

// La función debe tener dos parámetros:
// - El primer parámetro es el array entero que se quiere dividir.
// - El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

//SOLUCION
console.log(
  "\n Ejercicio 11" + "\n" + "--------------------------------------------"
);

const splitArrayIntoChunks = (arr, divider) => {
  const splitArray = [];

  for (let i = 0; i < arr.length; i += divider) {
    splitArray.push(arr.slice(i, i + divider));
  }

  return splitArray;
};

// Ejemplo de uso de la función:
console.log(splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3)); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
