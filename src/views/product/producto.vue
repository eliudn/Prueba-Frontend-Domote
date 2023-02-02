<script setup>

import axios  from 'axios'
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

import TablaImagenes from '../../components/TablaImagenes.vue'

const productos = ref([]);
const router= useRouter();
const refAdd = ()=>{
    router.push("/Productos/add")
}
const refEdit = (id)=>{
    router.push(`/Productos/edit/${id}`)
}



const getData = async () =>{
    try{

        const data = await axios.get('https://api.escuelajs.co/api/v1/products');
       
        productos.value = data.data.reverse(data.data.creationAt)
    }catch(error){

        console.log(error)
    }

}

getData()
</script>

<template>
    <div class="container">
        <h1>Productos</h1>

        <div>
            <button class="btn btn-outline-success" @click="refAdd"> add</button>
        </div>

        <ul>
            <li v-for="producto in productos" :key="producto.id">

               
                    <TablaImagenes :data="producto"  @refedit="refEdit"></TablaImagenes>
                
            </li>
        </ul>
    </div>
</template>

<style scoped></style>