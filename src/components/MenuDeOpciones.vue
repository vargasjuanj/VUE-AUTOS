<template>
  <div>
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">HOME</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link style="color:white; margin-right:20px; text-decoration:none" to="/autos">Nuestros Autos</router-link>
        <router-link style="color:white; margin-right:20px; text-decoration:none" to="/contacto">Contacto</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input @keyup.enter="buscar" v-model="buscado" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button  @click.prevent="buscar" size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>

<script>
export default {
data(){
  return {
    buscado:''
  }
},
methods:{
  buscar(){
    window.location.href=`/autos/${this.buscado}`
  }
}
}
</script>

<style>

</style>