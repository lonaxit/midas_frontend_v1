<template>

<div v-show="$store.state.SchemesProduct.schemes.length == 0">
  <MyLoader msg="Please wait..."></MyLoader>
</div>

<div class="surface-section scheme-pad"  v-show="$store.state.SchemesProduct.schemes.length != 0">
    <div class="font-medium text-3xl text-900 mb-3">Schemes</div>
    <div class="text-500 mb-5">MIDAS available schemes.</div>
    <ul class="list-none p-0 m-0">
       
        <ListHeader>
        <template v-slot:useInsideUl>
             
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
            
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
               Name
            </div>
          
            <div class="w-6 md:w-2 flex justify-content-space-evenly list-heading">
              Action
            </div>
        </li>
        </template>
        </ListHeader>

        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="scheme in Productschemes" :key="scheme.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
            
            <div class="w-6 md:w-2 flex justify-content-space-evenly">
               {{scheme.name}}
            </div>
            
          
            <div class="w-6 md:w-2 flex justify-content-space-evenly">
                <router-link  icon="pi pi-pencil" :to="{name:'update-scheme',params:{id:scheme.id}}">Edit</router-link>
            </div>

             <div class="w-6 md:w-2 flex justify-content-space-evenly">
                <router-link  icon="pi pi-pencil" :to="{name:'create-product',params:{id:scheme.id}}">Add Product</router-link>
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
    this.$store.dispatch('getSchemes')
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
computed: {
    Productschemes() {
    return this.$store.state.SchemesProduct.schemes;
  }
}
}
</script>

<style scoped>
.scheme-pad{
    padding-left:10px;
    padding-right:10px;
    border-radius: 4px;
    
}

</style>