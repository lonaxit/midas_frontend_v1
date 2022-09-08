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
				<Dropdown id="scheme" v-model="selectedScheme" :options="Productschemes" optionLabel="name" placeholder="Select Scheme"></Dropdown>
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
            
            if(this.name===""){
               this.$toast.add({severity: 'error', detail:'Please provide a name', life: 5000});
            }else if(this.selectedScheme.length==0){
                   this.$toast.add({severity: 'error', detail:'Please select a scheme', life: 5000});
            }else{
                const formData = {
                    name:this.name, 
                    description: this.description,
                    product_scheme:this.selectedScheme.id
                }
                
                const editProduct = async () =>{
                try{
                const res = await axios.put('api/v1/product-detail/'+ this.product_id + '/',formData)
                
             
                // this.name = ""
                // this.description = ""
                // // this.selectedScheme=""
                // this.product_scheme=""
                this.$toast.add({severity: 'success', detail:'Item Successfully Updated', life: 5000});
                this.$router.push('/list-product')
                

                } catch(err){
                this.$toast.add({severity: 'error', detail:'Something went wrong', life: 5000});
                }
                }
                editProduct()
            }
            
                
        }
    },
    computed: {
    Productschemes() {
    return this.$store.state.SchemesProduct.schemes;
  }},

    created(){
          
        const getProductDetail = async () =>{
        try{
            const res = await axios.get('api/v1/product-detail/'+ this.$route.params.id)
            this.name =res.data.name
            this.description = res.data.description
            this.product_id = res.data.id
           
        } catch(err){
            this.$toast.add({severity: 'error', detail:'Unable to get item detail', life: 5000});
        }
    }
    getProductDetail()

     this.$store.dispatch('getSchemes')
    
    },
  


}
</script>

<style scoped>




</style>