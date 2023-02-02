<script setup>
import { useRouter } from 'vue-router';
const router =useRouter()

const home =()=>{
    router.push('/')
}
const product = ()=>{
    router.push('/productos')
}
const categoria =()=>{
    router.push('/categoria')
}
</script>

<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Commerce</a>
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <a class="nav-link" href="#"  @click="product">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  @click="categoria">Categorias</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    
</template>

<style scoped></style>