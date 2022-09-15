<template>
  <div class="grid">
		<div class="col-12">
			<div class="card  p-fluid">
			<h5>Upload Loans</h5>
			<form enctype="multipart/form-data" @submit.prevent="uploadLoans">

                <div class="field">
					<label for="name1">Upload File </label>
                    <input type="file" id="loan-upload" ref="file" @change="selectFile"> 
				</div>
			
                 <SubmitButton>
                    <template v-slot:action>
                        <button>Upload Loan(s)</button>
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
            file:"",
        }
    },
    components:{
    SubmitButton,
},
    methods: {

            selectFile(e){
                this.file = e.target.files[0]
            },
            uploadLoans(){
                const data = new FormData();
                data.append('file', this.file);
             
                const newLoans = async () =>{
                try{
                const res = await axios.post('api/v1/loan-upload/',data)
                this.$toast.add({severity: 'success', detail:'Item Successfully Created', life: 5000});
             
                this.file = ""
                
                } catch(err){
                this.$toast.add({severity: 'error', detail:'Something went wrong', life: 5000});
                }
                }
                newLoans()

            }
            
            // initialize the errors array  
            // this.errors =[]
            // if(this.name===""){
            //     this.errors.push('Please provide a name!')
            // }
            
            // if(!this.errors.length){
            //     const formData = {
            //         name:this.name, 
            //         description: this.description
            //     }
                
            //     
            // }
        
      
    },
}
</script>

<style scoped>




</style>