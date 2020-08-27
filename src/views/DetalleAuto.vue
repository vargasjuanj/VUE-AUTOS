<template>
  <div class="card" style="width: 80%;">
 <img class="card-img-top" :src="require(`../assets/img/${element.imagen}`)" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{element.marca}}</h5>
    <p class="card-text">{{element.modelo}}</p>
  <p class="card-text">{{element.localidad}}</p>
  <p class="card-text">{{element.anio}}</p>
  <p class="card-text">{{element.destacado==='N'? 'Sin destacar': 'Destacado'}}</p>
    <p :style="{'color':'orange'}" class="card-text">{{element.precio==='0'? 'Consultar' :  element.precio}}</p>
 <button @click.prevent="volver"  class="btn btn-outline-success btn-block">Volver</button>
  </div>

</div>
</template>

<script>
import datos from '../assets/json/autos.json'
export default {
data(){
    return {
datos
 //element:{marca:'fiat',modelo:'nose',imagen:'1.jpg',precio:"0"}

    }
},
methods:{
    volver(){
    window.history.back()  
    }
},
computed:{
    element(){
     let param= Number(this.$route.params.index)
        return datos.find((element,index)=>index==param)
    }
}
}

</script>

<style>

</style>