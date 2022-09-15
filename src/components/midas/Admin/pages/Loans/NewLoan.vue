<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>New Loan</h5>
            <form @submit.prevent="createProduct">
				<div class="p-fluid formgrid grid">
					<div class="field col-12 md:col-4">
						<label for="firstname2">Amount</label>
						<InputText id="firstname2" type="text"/>
					</div>

					<div class="field col-12 md:col-4">
						<label for="lastname2">Approved</label>
						<InputText id="lastname2" type="text"/>
					</div>

                    	<div class="field col-12 md:col-4">
						<label for="lastname2">Deduction</label>
						<InputText id="lastname2" type="text"/>
					</div>

                    <div class="field col-12 md:col-4">
						<label for="firstname2">Loan Date</label>
						<InputText id="firstname2" type="text"/>
					</div>

					<div class="field col-12 md:col-4">
						<label for="lastname2">Start Date</label>
						<InputText id="lastname2" type="text"/>
					</div>

                    	<div class="field col-12 md:col-4">
						<label for="lastname2">End Date</label>
						<InputText id="lastname2" type="text"/>
					</div>

					<div class="field col-12 md:col-4">
						<label for="zip">Tenor</label>
						<InputText id="zip" type="text"/>
					</div>
					<div class="field col-12 md:col-4">
						<label for="city">Net Pay</label>
						<InputText id="city" type="text" />
					</div>
					<div class="field col-12 md:col-4">
						<label for="state">Products</label>
						<Dropdown id="state" v-model="selectedProduct" :options="Products" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
					
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button>Create Loan</button>
                    </template>
                </SubmitButton>
                </form>

			<!-- <div class="card  p-fluid">
				<h5>Create New Loan</h5>
				<form @submit.prevent="createProduct">
                <div class="field">
					<label for="name1">Name</label>
					<InputText v-model="name" id="name" type="text" placeholder="Enter Name"/>
				</div>
			
                <div class="field">
				<label for="address">Description</label>
				<Textarea v-model="description" id="address" rows="4" placeholder="Create an optional  scheme description "/>
				</div>

                 <div class="field">
				<label for="state">Products</label>
				<Dropdown id="scheme" v-model="selectedScheme" :options="Products" optionLabel="name" placeholder="Select Scheme"></Dropdown>
				</div>

                 <SubmitButton>
                    <template v-slot:action>
                        <button>Create Loan</button>
                    </template>
                </SubmitButton>
            
                </form>
              
			</div> -->
            

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
            selectedProduct:[],
            product_scheme:""
        }
    },
    components:{
    SubmitButton,
},
    methods: {
        createProduct(){
            
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
                
                const newProduct = async () =>{
                try{
                const res = await axios.post('api/v1/products/',formData)
                this.$toast.add({severity: 'success', detail:'Item Successfully Created', life: 5000});
             
                this.name = ""
                this.description = ""
                this.selectedScheme=""
                this.product_scheme=""

                } catch(err){
                this.$toast.add({severity: 'error', detail:'Something went wrong', life: 5000});
                }
                }
                newProduct()
            }
            
                
        }
    },
    computed: {
    Products() {
    return this.$store.state.SchemesProduct.products;
  }},

    created(){
        this.$store.dispatch('getProducts')
    },
  


}
</script>

<style scoped>

</style>