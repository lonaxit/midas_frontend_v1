<template>
  <div class="grid">
		<div class="col-12">
			<div class="card  p-fluid">
				<h5>Create New Scheme</h5>
				<form @submit.prevent="updateScheme">
                <div class="field">
					<label for="name1">Name</label>
					<InputText v-model="name" id="name" type="text" placeholder="Enter Name"/>
				</div>
			
                <div class="field">
				<label for="address">Description</label>
				<Textarea v-model="description" id="address" rows="4" placeholder="Create an optional  scheme description "/>
				</div>
                <SubmitButton>
                    <template v-slot:action>
                        <button>Update</button>
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
            id:""
        }
    },
components:{
    SubmitButton,
},
    methods: {
        updateScheme(){
            
            // initialize the errors array  
            this.errors =[]
            if(this.name===""){
                this.errors.push('Please provide a name!')
            }
            
            if(!this.errors.length){
                const formData = {
                    name:this.name, 
                    description: this.description
                }
                
                const updateScheme = async () =>{
                try{
                const res = await axios.put('api/v1/scheme-detail/'+ this.id +'/',formData)
                this.$toast.add({severity: 'success', detail:'Item updated successfully', life: 5000});
             
                this.$router.push('/scheme-list')
                
                } catch(err){
                this.$toast.add({severity: 'error', detail:'Something went wrong', life: 5000});
                }
                }
                updateScheme()
            }
        }
    },
    created(){
        const getSchemeDetail = async () =>{
        try{
            const res = await axios.get('api/v1/scheme-detail/'+ this.$route.params.id)
            this.name =res.data.name
            this.description = res.data.description
            this.id = res.data.id
        } catch(err){
            this.$toast.add({severity: 'error', detail:'Unable to get item detail', life: 5000});
        }
    }
    getSchemeDetail()
    }


}
</script>

<style>




</style>