import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/', //Este es necesario para que al estar en la ruta raiz, carguen todas las tarjetas, es decir tiene que existir esta ruta, porque si dejo solo la que tiene un parametro, cuando este en la raiz, en router no va a encontrar "/" sino /:buscado
      name: 'Home',
      component: Home
    },
    {
      path: '/autos', //Para que no se confunda con /:buscado uso otro slash o barra diagonal
      name: 'NuestrosAutos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/NuestrosAutos.vue')
    },
    {
      path: '/autos/:buscado', //Para que no se confunda con /:buscado uso otro slash o barra diagonal
      name: 'NuestrosAutosBusqueda',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/NuestrosAutos.vue')
    },
    /*
 {        //alternativa, va acompañada de la de abajo
    path: '/home/:buscado', //Es necesario el /home/ porque si no cuando valla a la ruta a una ruta /.. por eje /ordenados lo va a tomar como un parametro y no una ruta, ademas para que no salte el cartel de ruta duplicada le cambio el nombre a HomeBusqueda
    name: 'HomeBusqueda', //Pero en cambio a ordenadas se le agrego /ordenadas/diametro para no perder la función de que al apretar buscar sin ningun parametro me devuelva todos los datos, hay que elegir que se quiere, uqe no devuelva nada o todos , si no hay nada escrito en el input
    component: Home
    },
    */
  {
    path: '/detalle/:index',
    name: 'Detalle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetalleAuto.vue')
  },
  /*        // alternativa, va acompañada de la de arriba
  {
    path: '/ordenados', //Para que no se confunda con /:buscado uso otro slash o barra diagonal
    name: 'OrdenadosPorDiametro',
  */
  {
    path: '/contacto', //Para que no se confunda con /:buscado uso otro slash o barra diagonal
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
