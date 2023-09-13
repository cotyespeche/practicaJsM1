//JAVASCRIP   ---> DE ALTO NIVEL(SINTAXIS DE FACIL COMPRENSION PARECIDA A LOS HUMANOS)
               //  ---> INTERPRETADO (ES TRADUCIDO A LENGUAJE DE MAQUINA MEDIANTE UN INTERPPRETE Y EJECUTADO A MEDIDA QUE SE LEA)
               //  ---> SINGLE THREADED Y SINCRONICO (SE LEE LINEA POR LINEA Y SE RESUELVE DE A UNA TAREA POR VEZ)
               //  ---> DEBILMENTE TIPADO (EN SUS VARIABLES PODEMOS GUARDAR CUALQUIER TIPO DE DATO)


               // SINTAX PARSER >> TE MARCA UN ERROR CUANDO HAY UN ERROR DE SINTAXIS
               // LEXICAL ENVIROMENT >> HACE REFERENCIA A "DONDE" ESTA DECLARADA UNA VARIABLE POR EJEMPLO. ESTOY HABLANDO DE DONDE SE ESTA EJECUTANDO ALGO.

               // EXECUTION CONTEXT ---> HACE REFERENCIA A "QUE SE ESTA EJECURTANDO"



//HOISTING ---> SOLO VARIABLES DECLARADAS CON VAR QUE DAN UNDIFINED Y FUNCIONES . ES LO QUE SUCEDE EN LA FASE DE CREACION
 //ACCEDO A UNA FUNCION ANTES DE DEFINIRLA , Y ACCEDO AL VALOR UNDIFINED DE UNA VARIABLE ANTES DEDECLARARLA

saludo()
console.log(hola);

var hola = 'Hola, soy una variable';

function saludo(){
    console.log('holis')
}

console.log(hola)


//SCOPE --->  ALCANCE QUETIENE UNA VARIABLE,PUEDE SER DE ALCANCE GLOBAL O DE FUNCION(LOCAL)

var global = 'Hola' // hola


function a() {
    console.log(global); //hello
    global= 'hello'
    
}



function b() {
    var global= 'chau'
    console.log(global); //chau
    
}

a() // hello
b() //chau

console.log(global)

// TIPAR UNA VARIABLE ES DEFINIR QUE TIPO DE DATO SE VA A GUARDAR EN UN ESPACIO DE MEMORIA

// COERCION DE DATOS 
// Una coerción de datos, a menudo llamada "coerción implícita", ocurre cuando un lenguaje de programación convierte automáticamente un tipo de datos en otro para realizar una operación. 



console.log(Number(false))
console.log(Number(true))
console.log(Number(undefined))
console.log(Number(null))


// EJEMPLO UNIR LOS NUMEROS
var numero = 10;
var cadena = "5";

var resultado = numero + cadena;

console.log(resultado); // Esto imprimirá "105" en la consola.

// ejemplo SUMA 
var numero = 10;
var cadena = "5";

// Convertir la cadena a un número usando parseFloat o parseInt
var numeroDesdeCadena = parseFloat(cadena);

// Realizar la suma
var resultado = numero + numeroDesdeCadena;

console.log(resultado); // Esto imprimirá 15 en la consola.


//EXPRESIONES VS STATMENTS
 // EXPRESIONES ---> OPERACIONES MATEMATICAS 
           //   ---> DECLARACION DE VARIABLES

//STATMENT ---> CONDICIONALES( IF) BUCLES (FOR)
     //    ---> DECLARACION DE FUNCIONES 

     // VALOR Y REFERENCIA
     // EL VALOR ES CUANDO A UNA VARIABLE LE ASIGNAMOS EL VALOR
     // REFERENCIA ES CUANDO APUNTA A UN ESPACIO DE MEMORIA 
     // LOS ARRAY Y OBJETOS OCUPAN UN ESPACIO EN LA MEMORIA, PERO CUANDO HABLAMOS DE REFERENCIA ES UNICAMENTE PARA OBJETOS.

