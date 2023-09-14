// // Hacer un contador para que el numero vaya aumentado de uno en uno
// function counter () {
//   let contador= 0
//   return function () {
//     contador++
//   //  contador+=2
//    return contador
//   }
// }

// let incrementarContador = counter();

// for (let i=0; i<5; i++){ // para que se ejecute 5 veces
//   console.log(incrementarContador());
// }
// console.log(incrementarContador())
// console.log(incrementarContador())
// console.log(incrementarContador())




// // Hacer un contador para que el numero vaya aumentado de a dos 

function contador2 () {
  let contar=0
  return function () {
    contar+=2
    return contar
  }
}
let contarDe2En2= contador2();
console.log(contarDe2En2())
console.log(contarDe2En2())
console.log(contarDe2En2())

// CONTADOR SIN CLOUSURE
let num= 0

function counter() {
  num++
  return num
}

console.log(counter())
console.log(counter())
console.log(counter())

//Hacer una memoria cache. La funcion debe almacenar los resultados de las operaciones para que si se pasa por parametro un numero que ya paso antes, devuelva el resultado sin ejectutar nuevamente la funcion.

// function cache (cb) {
// // cb = arg*2

//   let obj= {}
//   return function (arg) {
//     if ( arg in cb){
//       return obj[arg]
//     } 
//     const result = cb(arg * 2);
//     obj[arg] = result
//     return result
//   }
// }
// const multiplicar = cache(function(value){
//   return value

// })
// console.log(multiplicar(3));

function cache(cb) {
  let obj = {};
  // cb = cb || (arg => arg * 2); // Definimos cb para que sea igual a arg * 2 si no se proporciona una función cb
  cb= arg => arg*2
  
  return function (arg) {
    if (arg in obj) return obj[arg];

      const result = cb(arg);
      // obj[arg] = result;
      return result;
    }
  }


const multiplyByTwo = cache(); // No se proporciona una función cb aquí

console.log(multiplyByTwo(3)); // Devuelve 6
console.log(multiplyByTwo(5)); // Devuelve 10
console.log(multiplyByTwo(3)); // Utiliza el valor en caché (6)


/*Crea una función llamada calculadora que tome un número inicial como argumento. Esta función debe devolver un objeto con dos métodos:
sumar: Un método que toma un número como argumento y suma ese número al número inicial.
restar: Un método que toma un número como argumento y resta ese número al número inicial.
El objeto devuelto por calculadora debe mantener el estado del número inicial y permitir sumar y restar números de forma acumulativa.*/

// let initial = 0

// function calculadora (initial) {
// let obj= {
//   suma : function(arg) {
//     initial +=arg;
//     return initial;
//   },
//   resta: function (arg) {
//     initial -= arg;
//     return initial;
//   }
// }
// return obj  
// }


function calculadora(initial) {
  return {
    suma: function (arg) {
      const result = initial + arg;
      return result;
    },
    resta: function (arg) {
      // const result = initial - arg;
      const result = Math.abs(initial - arg);
      return result;
    }
  };
}

const calc = calculadora(1); // Establecer el valor inicial en 10

console.log(calc.suma(7)); // 17 (10 + 7)
console.log(calc.suma(5)); // 15 (10 + 5)
console.log(calc.resta(5)); // 10 (15 - 5)
console.log(calc.suma(3)); // 13 (10 + 3)







// let initial = 0;

// function calculadora(initial) {
//   return {
//     suma: function (arg) {
//       initial += arg;
//       return initial;
//     },
//     resta: function (arg) {
//       initial -= arg;
//       return initial;
//     }
//   };
// }

// const calc = calculadora(initial);

// console.log(calc.suma(7)); // Debe imprimir 7, ya que initial es 0 + 7
// console.log(calc.suma(5)); // Debe imprimir 12, ya que initial es 7 + 5
// console.log(calc.resta(10)); // Debe imprimir 2, ya que initial es 12 - 10
