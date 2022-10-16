<template>
  <div class="grid">
		<div class="col-12">
			<div class="card  p-fluid">
				<h5>Update Product</h5>
				<form @submit.prevent="updateProduct">
                <div class="field">
					<label for="name1">Name</label>
					<InputText v-model="name" id="name" type="text" placeholder="Enter Name"/>
				</div>
			
                <div class="field">
				<label for="address">Description</label>
				<Textarea v-model="description" id="address" rows="4" placeholder="Create an optional  scheme description "/>
				</div>

                 <div class="field">
				<label for="state">Schemes</label>
				<Dropdown id="scheme" v-model="selectedScheme" :options="schemes" optionLabel="name" placeholder="Select Scheme"></Dropdown>
				</div>
              <SubmitButton>
                    <template v-slot:action>
                        <button>Update Product</button>
                    </template>
                </SubmitButton>
            
                </form>
              
			</div>
            
		</div>
        
      
	</div>
</template>

<script>
import axios from 'axios'
import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'

import {mapGetters} from 'vuex'

export default {

    data(){
        return{
            name:"",
            description:"",
            selectedScheme:[],
            product_scheme:"",
            product_id:""
        }
    },
       components:{
    SubmitButton,
},
    methods: {
        updateProduct(){
            
            // initialize the errors array  
            
            if(!this.name){
                this.$notify({
                    text: 'Please provide a name',
                    duration:5000,
                    type:'error',
                })
            
            }else if(this.selectedScheme.length==0){
                this.$notify({
                    text: 'Please select a scheme',
                    duration:5000,
                    type:'error',
                })
                 
            }else{
                const formData = {
                    name:this.name, 
                    description: this.description,
                    product_scheme:this.selectedScheme.id
                }
                
                const editProduct = async () =>{
                try{
                const res = await axios.put('api/v1/product-detail/'+ this.product_id + '/',formData)
                
             
                
                this.$router.push('/list-product')
                   this.$notify({
                    text:'Product updated successfully',
                    duration:5000,
                    type:'success',
                })

                } catch(err){
                    this.$notify({
                        text:'Something went wrong',
                        duration:5000,
                        type:'error'
                    })
              ;
                }
                }
                editProduct()
            }
            
                
        }
    },
    computed: {
        ...mapGetters(['allProducts','product_loader','product_detail','schemes'])
  },

    created(){
        this.$store.dispatch('getProductDetail',this.$route.params.id).then(()=>{
             this.name =this.product_detail.name
            this.description = this.product_detail.description
            this.product_id = this.product_detail.id
        }).catch(err=>{
            this.$router.push('/list-product')
            this.$notify({
                text:'Unable to fetch detail for the product',
                duration:5000,
                type:'error',
            })
        })
          
    //     const getProductDetail = async () =>{
    //     try{
    //         const res = await axios.get('api/v1/product-detail/'+ this.$route.params.id)
    //         this.name =res.data.name
    //         this.description = res.data.description
    //         this.product_id = res.data.id
           
    //     } catch(err){
    //         this.$toast.add({severity: 'error', detail:'Unable to get item detail', life: 5000});
    //     }
    // }
    // getProductDetail()

     this.$store.dispatch('getSchemes')
    
    },
  


}
</script>

<style scoped>




</style>