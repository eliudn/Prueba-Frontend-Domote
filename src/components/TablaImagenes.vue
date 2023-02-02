<script setup>
import axios  from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()
const props =defineProps({ 
    title :String,
    imagenes:Array,
    precio: String,
    descripcion: Number,
    data: Object
})

const deletePrduct = async (id)=>{
    try {
        console.log(id)
        await axios.delete( `https://api.escuelajs.co/api/v1/products/${id}`);
        location.reload();
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>


    <div class=" d-block w-50">
        <label class="fw-bold">{{ props.data.title }}</label>
       
        <router-link :to="`/productos/${props.data.id}`">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" v-for="imagen in props.data.images" :key="imagen">
                <img class="d-block w-100" :src="imagen" alt="First slide">
                </div>
                
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </router-link>

        <div class="container-fluid d-flex  justify-content-between p-2">
            <label class="fw-bold ">{{props.data.price}} $</label>
           
            <div>
                 <button class="btn btn-outline-primary m-2" @click="$emit('refedit',props.data.id )"> Editar</button>
                 <button class="btn btn-outline-danger m-2" @click="deletePrduct(props.data.id)">Eliminar</button>  
            </div>
            
        </div>
        <p>{{ props.data.description }}</p>

        <p>{{ props.data.creationAt }}</p>
        
    </div>
</template>