<template>
  <div >
    <div>
<Menu/>
<!--<Menu algo="adsad" /> -->
<!--<Menu :algo="adsad" /> -->
<!--  <h1>{{ msg }}</h1> -->

    </div>
    <router-view/>
  </div>
</template>
<script>
// Instalando vetur usando vue en uarchivo vacio .vue, se crea el esqueleto, pero en template debe ponerse un div, alguna eqiqueta padre
//import Menu from './components/MenuSuperiorDeOpciones'

// <b-nav-form @submit.prevent="buscar"> para que funcione correctamente, habiendo un boton de tipo submit

//  :img-src="require(`../assets/img/${element.img}`)"  // para que tome las imagenes desde assets, en public no hace falta

//El metodo Number() me tranforma por ejemplo un parametro de ruta que siempre viene en string a un numero

// comentario <!--  -->

//import datos from '../assets/json/sistema_solar.json'   // poner en datos o cumputed, si no no funciona
import Menu from './components/MenuDeOpciones'
export default {
  //  name: 'App',
  props: {
    msg: String
  },
  components:{
   Menu
  },
  data(){
    return{
    //  array :[]
    //datos

    }
  },
  computed:{
    datosFiltrados(){
     // return datos  //si o si tiene que retornar algo
     return 'algo'
    }
  }, 
  mounted(){
//Se carga  despues de data() y computed()
  },
  methods:{
    buscar(){
      //return
    }
  }
}
</script>
<style> 

/*
<!-- <style scoped>   Si tiene scoped los estilos se aplican solo a este componente-->
*/
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
*/
</style>
