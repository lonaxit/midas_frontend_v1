<template>
  <div class="grid">
		<div class="col-12">
			<div class="card  p-fluid">
				<h5>Create New Scheme</h5>
				<form @submit.prevent="createScheme">
                <div class="field">
					<label for="name1">Name</label>
					<InputText v-model="name" id="name" type="text" placeholder="Enter Name"/>
				</div>
			
                <div class="field">
				<label for="address">Description</label>
				<Textarea v-model="description" id="address" rows="4" placeholder="Create an optional  scheme description "/>
				</div>
                <div class="submit">
                <button>Create</button>
                </div>
                <!-- <Button class="submit-button" label="Submit"></Button> -->
                </form>
                <div class="error" v-if="errors.length">
                        <p v-for="error  in errors" :key="error">
                        {{error}}
                        </p>
                </div>
			</div>
		</div>
      
	</div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            name:"",
            description:"",
            errors:[]
        }
    },
    methods: {
        createScheme(){
            
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
                
                const newScheme = async () =>{
                try{
                const res = await axios.post('api/v1/schemes/',formData)
                this.$toast.add({severity: 'success', detail:'Item Successfully Created', life: 5000});
                console.log(res)
                this.name = ""
                this.description = ""
                } catch(err){
                console.log(err)
                }
                }
                newScheme()
            }
        }
    },


}
</script>

<style scoped>
.submit-button{
    width: 20%;
   
}



</style>