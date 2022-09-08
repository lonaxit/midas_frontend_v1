<template>
<div v-show="$store.state.SchemesProduct.products.length == 0">
  <MyLoader msg="Please wait..."></MyLoader>
  </div>

<div class="surface-section scheme-pad"  v-show="$store.state.SchemesProduct.products.length != 0">
    <div class="font-medium text-3xl text-900 mb-3">Product List</div>
    <div class="text-500 mb-5">MIDAS available product.</div>
    <ul class="list-none p-0 m-0">
        
        <ListHeader>
        <template v-slot:useInsideUl>
             
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
            
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Product Name
            </div>
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Category
            </div>
          
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
             Action
            </div>
        </li>
        </template>
        </ListHeader>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="product in productList" :key="product.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
            <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{product.name}}
            </div>
            <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{product.scheme}}
            </div>
            <div class="w-6 md:w-2 flex justify-space-evenly">
                <router-link  icon="pi pi-pencil" :to="{name:'update-product',params:{id:product.id}}">Edit</router-link>
            </div>
        </li>
    </ul>
</div>
</template>

<script>

import MyLoader from '@/components/midas/ReusableComponents/Loader.vue'
import ListHeader from '@/components/midas/ReusableComponents/Listheading.vue'
export default {
data(){
    return{
    //  schemes:[],
     totalScheme:"",
    }
},
components:{
    MyLoader,
    ListHeader
},

created(){
    this.$store.dispatch('getProducts')

    // const getSchemes = async () =>{
    //     try{
    //         const res = await axios.get('api/v1/schemes/')
    //         this.schemes =res.data
    //     } catch(err){
    //         console.log(err)
    //     }
    // }
    // getSchemes()
    
    // axios.get('api/v1/schemes/')
    //     .then(res =>{
    //         this.schemes =res.data
    //     })
    //     .catch(err =>{
    //     console.log(err)
    //     })
},
computed:{
    productList(){
        return  this.$store.state.SchemesProduct.products;
    }
},

}
</script>

<style scoped>
.scheme-pad{
    padding-left:10px;
    padding-right:10px;
    border-radius: 4px;
    
}
</style>