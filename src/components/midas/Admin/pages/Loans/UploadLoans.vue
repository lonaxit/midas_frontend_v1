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
                  this.$notify({
              text:'Uploaded Successfully',
              duration:5000,
              type:'success',
            })
               
             
            this.file = ""
                
                } catch(err){
                  this.$notify({
              text:'Something went wrong',
              duration:5000,
              type:'error',
            })
                }
                }
                newLoans()

            }
            
          
        
      
    },
}
</script>

<style scoped>




</style>