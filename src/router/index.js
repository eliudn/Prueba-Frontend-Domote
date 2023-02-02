import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
  },
    {
      path: '/',
      name: 'home',
      component: ''
    },
    {
      path: '/productos',
      name: 'productos',

      component:() => import('../views/product/producto.vue')
    },
    {
      path: '/productos/:id',
      name: 'producto',

      component:() => import('../views/product/ProductoIndividual.vue')
    },
    {
      path: '/productos/add',
      name: 'addProducto',

      component:() => import('../views/product/AddProduct.vue')
    },
    {
      path: '/productos/edit/:id',
      name: 'editProducto',

      component:() => import('../views/product/EditProduct.vue')
    },
    {
      path: '/categoria',
      name: 'categoria',

      component:() => import('../views/categoria/categoria.vue')
    },
    {
      path: '/categoria/add',
      name: 'addCategoria',

      component:() => import('../views/categoria/AddCategoria.vue')
    },
    {
      path: '/categoria/edit/:id',
      name: 'editCategoria',

      component:() => import('../views/categoria/EditCategoria.vue')
    },
    {
      path: '/login',
      name: 'login',

      component:() => import('../views/login/login.vue')
    }

  ]
})

export default router
