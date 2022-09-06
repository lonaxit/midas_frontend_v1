<template>

  <MyLoader msg="Please wait..."></MyLoader>

<div class="surface-section scheme-pad"  v-show="$store.state.SchemesProduct.schemes.length != 0">
    <div class="font-medium text-3xl text-900 mb-3">Schemes</div>
    <div class="text-500 mb-5">MIDAS available schemes.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap" v-for="scheme in Productschemes" :key="scheme.id" >
            <!-- <div class="text-500 w-6 md:w-2 font-medium">Title</div> -->
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{scheme.name}}</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <router-link  icon="pi pi-pencil" :to="{name:'update-scheme',params:{id:scheme.id}}">Edit</router-link>
            </div>
        </li>
    </ul>
</div>
</template>

<script>

import MyLoader from '@/components/midas/ReusableComponents/Loader.vue'
export default {
data(){
    return{
    //  schemes:[],
     totalScheme:"",
    }
},
components:{
    MyLoader
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