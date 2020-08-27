<template>
  <div class="row">
      <Auto :index="index" :element="element" v-for="(element,index) of datosFiltrados" :key="index"></Auto>
  </div>
</template>

<script>
import datos from '../assets/json/autos.json'
import Auto from '../components/Auto'
export default {
components:{
    Auto
},
data(){

    return {
        datos
    }
},
computed:{
    datosFiltrados(){
    let buscado = this.$route.params.buscado
    if(buscado != undefined){
         buscado=buscado.toLowerCase()
        return datos.filter(element=>element.marca.toLowerCase().includes(buscado) || element.modelo.toLowerCase().includes(buscado) || element.anio.toLowerCase().includes(buscado) )
    }
     return datos
    
    }
}
}
</script>

<style>

</style>