<script setup>

import { ref } from "@vue/reactivity";
import axios from "axios";

import { useRouter } from "vue-router";


const nombre= ref([])
const imagen = ref([])


const router = useRouter()
const addCategoria = async()  =>{
    try {
       const categoria = {
            'name':nombre.value,
            'image':imagen.value
        }
      
        console.log(categoria)
        const data = await axios.post('https://api.escuelajs.co/api/v1/categories', categoria)
        router.push('/categoria')
    } catch (error) {
        console.log(error)
    }
}


</script>

<template>
    <div>
        <form @submit.prevent="addCategoria">
            <div class="mb-3">
                <label for="nameId" class="form-label">Name</label>
                <input type="text"  class="form-control" id="nemaId" v-model="nombre">
                
            </div>
            <div class="mb-3">
                <label for="imageId" class="form-label">Image</label>
                <input type="text" class="form-control" id="imageId" placeholder="URL" v-model="imagen">
            </div>
          
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
