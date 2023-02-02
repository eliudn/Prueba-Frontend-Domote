<script setup>

import axios  from 'axios'
import {ref} from 'vue';
import { useRoute } from 'vue-router';

import TablaImagenes from '../../components/TablaImagenes.vue'

const productos = ref([]);
const router = useRoute();

console.log(router.params.id);
const getData = async () =>{
    try{

        const data = await axios.get(`https://api.escuelajs.co/api/v1/products/${router.params.id}`);
       console.log(data.data);
        productos.value = data.data
    }catch(error){

        console.log(error)
    }

}
 getData()
</script>

<template>
    <div>
        <h1>Productos</h1>
       
        <div>
    

            <div>
             
                    <TablaImagenes 
                        :key="productos.id"
                        :data="productos"
                    ></TablaImagenes>
            </div>
        </div>
    </div>
</template>

<style scoped></style>