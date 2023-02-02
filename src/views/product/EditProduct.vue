<template >
    <div>
        <form  @submit.prevent="edit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Title</label>
                <input type="text"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Price</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="price">
            </div>
          
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Description</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="description">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Category</label>
                <select class="form-select" aria-label="Default select example" v-model="catergoryId">
                    <option selected>Open this select menu</option>
                    <template  v-for="category in categories" :key="category.id">
                       
                        <option :value="category.id"  >{{ category.name }}</option>
                    </template>
  
  
                </select>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

     </div>
</template>

<script  setup>

import { ref } from 'vue';
import axios  from 'axios'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const product = ref([])
const getdata = async ( )=>{

    try {
        const data = await axios.get(`https://api.escuelajs.co/api/v1/products/${route.params.id}`)
        product.value = data.data

        title.value = data.data.title
        price.value = data.data.price
        description.value = data.data.description
        catergoryId.value = data.data.category.id

    } catch (error) {
        console.log(error)
    }
}
const allCategories = async()=>{

try {
    const data= await axios.get('https://api.escuelajs.co/api/v1/categories')
    categories.value = data.data
} catch (error) {
    console.log(error)
}
}
allCategories()
getdata()
const title = ref([])
const price = ref([])
const description = ref([])
const catergoryId = ref([])
const categories = ref([])


const edit = async () =>{
    try {
        const product = {
            "title":title.value ,
            "price": price.value,
            "description": description.value,
            "categoryId": catergoryId.value,
            "images": ["https://placeimg.com/640/480/any"]
        }
        const data= await axios.put(`https://api.escuelajs.co/api/v1/products/${route.params.id}`,product)
        router.push(`/productos/${route.params.id}`)
    } catch (error) {
        console.log(error)
    }
}



</script>