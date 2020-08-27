
    let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
l
let element ={
    signo:'Sagitario',
    meses:[11,12]
}


//Extraigo noviembre y diciembre usando como fuente el array meses, resto 1 porque el array meses tienen el primer elemento en la posicion cero
    element.meses.map((mes,index)=> this.state.meses[mes-1])

//Filtrar objetos quie tienen  mes en comun, cada objeto tiene la siguiente propiedad por ej meses[11,12] noviembre-diciembre
//Si el array meses del objeto incluye el valor 12 por ejemplo, dos zodiacos corresponden => sagitario y capricornio
//Se transforma la variable mes  a number
let aux = datos.filter(element=>element.meses.includes(Number(mes)))

    volver=()=>{
        window.history.back();
      //  window.location.href="/"
      }

//SORT

//ordenar un array de objetos por una propiedad, de forma descendiente
datos.sort((a,b)=>b.diametro-a.diametro)

//forma ascendente
datos.sort((a,b)=>b.diametro-a.diametro)

//Ordenar array de numeros de forma ascendente
[2,4,1,6,7].sort()

//forma descendiente
[2,4,1,6,7].sort().reverse()


//Ordenar Array de palabras de forma albetica ascendiente, se usa toLowerCase() porque si unas empiezan en mayusculas y en minusculas no las ordena bien

//forma segura
['Juan','Ana','carlos'].sort((a,b)=>{
    return  a.toLowerCase()>b.toLowerCase() ? 1 : -1
  })

  //forma no segura ( a menos que empiezen todos en mayusculas o viceversa)

//['Juan','Ana','carlos'].sort()

// Ordenar de forma descendiente alfabeticamente

['Juan','Ana','carlos'].sort((a,b)=>{
    return  a.toLowerCase()>b.toLowerCase() ? 1 : -1
  }).reverse()

//Ordenar array de objetos alfabeticamente por una propiedad

//Ascendente
datos.sort((a,b)=>a.nombre>b.nombre ?1 : -1)
//Descendente
datos.sort((a,b)=>b.nombre>a.nombre ?1 : -1)

//BUSQUEDA


 //No llevan parametros las propiedades computadas, ni tampoco pueden ser funcion flecha, pero la transofrme porque daba error
datosFiltrados=()=>{     
 // let buscado=this.$route.params.buscado //parametro de ruta en vue
  
  return buscado==undefined ? datos : datos.filter(element=>element.descripcion.toLowerCase().includes(buscado.toLowerCase()))
        
       }