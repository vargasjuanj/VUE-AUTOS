<template>
  <div class="container">
<p :style="{'color':'red', 'font-weight':'bold', 'font-family':'Verdana', 'font-size':'25px'}">
   A TODO MOTOR AUTOS </p>
<p :style="{'font-size':'15px', 'font-family':'Verdana'}">
Publicá  sin  registrarte  y  en  un  sólo  paso.  ¿Apurado  por vender?  Recibí  ofertas  en  Efectivo  de  concesionarios registrados. ¡Súper!Al hacer click sobre la imagen se deberá direccionar al componente Detalle Auto. 
</p>
<p :style="{'font-size':'15px', 'font-family':'Verdana', 'color':'white', 'background':'orange'}">
  Destacados
</p>
<div class="row" >
<Auto :index="index" :element="element" v-for="(element,index) of datosFiltrados" :key="index"></Auto>
</div>



  </div>
</template>
<script>
import Auto from '../components/Auto'
import datos from '../assets/json/autos.json'
export default {
  // name: 'Home',
  props: {

  },
  components:{
Auto
  },
  data(){
    return{
    datos

    }
  },
  computed:{
datosFiltrados(){
  return datos.filter(element=>element.destacado==='Y')
}
  }, 
  mounted(){

  },
  methods:{
    
  }
}
</script>
<style> 

</style>
