<template>
<div class="card" style="width: 150px;">
 <router-link  :to="`/detalle/${index}`"> <img class="card-img-top" :src="require(`../assets/img/${element.imagen}`)" alt="Card image cap"></router-link>
  <div class="card-body">
    <h5 class="card-title">{{element.marca}}</h5>
    <p class="card-text">{{element.modelo}}</p>
    <p :style="{'color':'orange'}" class="card-text">{{element.precio==='0'? 'Consultar' :  element.precio}}</p>
  </div>
</div>
</template>

<script>
export default {
props:{
   element:{},
   index:undefined
}, data(){
    return {
 //element:{marca:'fiat',modelo:'nose',imagen:'1.jpg',precio:"0"}

    }
}
}
</script>

<style>

</style>