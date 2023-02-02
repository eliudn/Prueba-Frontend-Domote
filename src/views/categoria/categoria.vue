<script setup>
import { ref } from '@vue/reactivity';
import axios from 'axios';
import { useRouter } from 'vue-router';

import imagenCategoria from '../../components/imagenCategoria.vue'

const categorias = ref([])
const router = useRouter()
const getData = async () =>{
    try {
        const data = await axios.get('https://api.escuelajs.co/api/v1/categories')
        categorias.value = data.data.reverse(data.data.creationAt)
    } catch (error) {
        console.log(error)
    }
}
const refAddCategory =()=>{
    router.push('/categoria/add')
}

const refEditCategoria = (id)=>{
    router.push(`/categoria/edit/${id}`)
}

getData()
</script>

<template>
    <div class="container">
        <h1>categoria</h1>
        <div>
            <button class="btn btn-outline-success" @click="refAddCategory"> add</button>
        </div>
        <div class=" d-block w-50">
            <template v-for="categoria in categorias"  :key="categoria.id">
                        <imagenCategoria 
                           
                            :data="categoria"
                            @refeditcategoria ="refEditCategoria"
                        />
            </template>
            
        </div>
    </div>
    
</template>

<style scoped></style>