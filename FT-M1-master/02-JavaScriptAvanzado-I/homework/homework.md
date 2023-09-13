# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); // undifined
console.log(baz); //2

foo();

function foo() {
  console.log("Hola!");
}

var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // FRANCO
```

```javascript
var instructor = "Tony";
console.log(instructor); //TONY
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //FRANCO
  }
})();
console.log(instructor); //TONY
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //'The Flash'
  console.log(pm); // 'Reverse Flash'
}
console.log(instructor); // 'The Flash' sigue siendo ese xq se declara con var. Como no hay contexto nuevo se pisan los valores.
console.log(pm); //'Franco' porque vuelve al principio, let pm = "Reverse Flash" este esta dentro de otro scope, tiene sentido dentro de las llaves. fuera de esono existe.
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" //6 Number('2') * Number('3') ---> esto es lo que hace por dentras JS
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN porque no puede restar. Si fuese un + concatena asi ('4px2')
7 / 0 // INFINITY Todo numero dividido por cero tiende a infinito
{}[0] // UNDIFINED PORQUE no existe la propiedad 0, esta vacio. {0: 'Hola'}[0] ---> ahi si funcionaria. Accede mediante bracket notation a la propiedad del objeto
parseInt("09") // 9
5 && 2 // 2  (AND lógico) devuelve el primer valor si es evaluado como falso; de lo contrario, devuelve el segundo valor.
2 && 5 // 5
5 || 0 // 5 El operador || (OR lógico) devuelve el primer valor si es evaluado como verdadero; de lo contrario, devuelve el segundo valor
0 || 5 //5
[3]+[3]-[10] // 23
3>2>1 // FALSE
// 3 > 2: Esta comparación evalúa si 3 es mayor que 2, lo cual es verdadero. Por lo tanto, esta parte de la expresión se evalúa como true.
//true > 1: Ahora estamos comparando true (que se interpreta como 1 en una comparación numérica) con 1. La comparación 1 > 1 es falsa, ya que 1 no es mayor que 1. Por lo tanto, el resultado final de la expresión 3 > 2 > 1 es false.
[] == ![] // TRUE ---> (segun la profe) se compara los espacios de memoria, y como no ocupan los mismos espacios es true. si fuese [] == [] ---> daria false porque no sepuede igualar porque ocupan distintos espacios de memoria. Aplica tbn para objetos  

//  Segun Chatgpt [] representa un array vacío, que se evalúa como verdadero en un contexto booleano.

// ![] aplica el operador lógico NOT (!) al array vacío []. Esto lo convierte en false porque !true es false.

// Ahora, tenemos la comparación [] == false. Aquí es donde la coerción de tipos entra en juego. JavaScript intenta convertir ambos lados de la igualdad a un tipo común para realizar la comparación. En este caso, el operador == convertirá false en un número, lo cual se hace porque false se considera como 0 en la conversión numérica.

// Entonces, la expresión se reduce a [] == 0.

// A continuación, JavaScript compara el array vacío [] con el número 0. En este caso, JavaScript intenta convertir el array en una cadena antes de realizar la comparación. Un array vacío se convierte en una cadena vacía "".
// Finalmente, la expresión se reduce a "" == 0.

// Ahora, estamos comparando una cadena vacía "" con el número 0. JavaScript convierte la cadena vacía en un número 0 antes de realizar la comparación.
// El resultado final de la expresión es 0 == 0. Como 0 es igual a 0, la expresión [] == ![] es verdadera.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // UNDIFINED
  console.log(foo()); // 2

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// La razón detrás de esto es que las declaraciones var se elevan al principio del ámbito en el que están definidas, pero las asignaciones de valores se mantienen en su lugar. Por lo tanto, aunque a se declara al comienzo de la función test(), su valor se establece más adelante en 1, después de que se haya realizado la primera llamada a console.log(a). La función foo(), por otro lado, se declara antes de su uso, por lo que está disponible cuando se llama.
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // Undifined

//  UNDEFINED; porque getFood esta en false por lo tanto el bloque if no se ejecuta. de esta manera se EN LA FASE DE CREACION SE GUARDO VAR SNACK: UNDIFINED PEOR NO SE PASO A LA FASE DE EJECUCUION
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // "Aurelio De Rosa"

var test = obj.prop.getFullname;

console.log(test()); //Undifined

// "Aurelio De Rosa"
// Se llama a test(). En este caso, como test se convirtió en una función independiente sin contexto, this dentro de la función test no está relacionado con ningún objeto. Por lo tanto, this.fullname se evalúa como undefined porque no hay un objeto que tenga una propiedad fullname.

// Entonces, el resultado de console.log(test()) será undefined.

// En resumen, la diferencia clave aquí es cómo se maneja el valor this en el contexto de la función. Cuando getFullname se llama directamente desde obj.prop, this se refiere a obj.prop, pero cuando se asigna a test y se llama como una función independiente, this ya no tiene un contexto definido y se convierte en undefined.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
// Pila de ejecucion
// 2
// 3
// 4
// printing 1
// contexto global
// osea que se muestra el 1, 4, 3 y 2 (sale primero el 3 prque demora menos segundos que el 2)
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
