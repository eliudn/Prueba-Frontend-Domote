<template>
       <div class="d-flex flex-column">

            <span>
                <label for="">{{ props.data.name }}</label>
            </span>
            <img :src="props.data.image" class="rounded mx-auto d-block " >
            <div class="d-flex justify-content-between">
                <span class=" m-2">{{ props.data.creationAt }}</span>
                <div>
                    <button class="btn  btn-outline-primary m-2" @click="$emit('refeditcategoria',props.data.id)">edit</button>
                    <button class="btn  btn-outline-danger m-2" @click="deleteCatgoria(props.data.id)">eliminar </button>
                </div>
            </div>
           
        </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router =useRouter()

const deleteCatgoria= async(id)=>{
    try {
        
        const data = await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`)
        location.reload();
    } catch (error) {
        console.log(error)
    }
}
const props = defineProps({data:Object})
</script>