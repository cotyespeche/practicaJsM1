  // CLOUSERS ---> FUNCIONES QUE RETORNAS OTRAS FUNCIONES QUE PUEDEN ACCEDER AL CONTEXTO DE SU FUNCION PADRE PARA PEDIR INFOR

  function saludar (saludo) {
    return function (nombre) {
        console.log(saludo +''+ nombre)
    }
  }

//   console.log(saludar('hola'))
var saludarHola= saludar('Hola')
saludarHola('agus')
  