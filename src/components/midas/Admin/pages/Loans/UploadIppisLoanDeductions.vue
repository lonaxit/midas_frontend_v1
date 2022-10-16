<template>
  <div class="grid">
		<div class="col-12">
			<div class="card  p-fluid">
			<h5>Upload IPPIS Deductions</h5>
			<form enctype="multipart/form-data" @submit.prevent="uploadIppisLoanDeductions">

                <div class="field">
					<label for="name1">Upload File </label>
                    <input type="file" id="loan-upload" ref="file" @change="selectFile"> 
				</div>
			
                 <SubmitButton>
                    <template v-slot:action>
                        <button>Upload Deductions</button>
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
            uploadIppisLoanDeductions(){
                const data = new FormData();
                data.append('file', this.file);
             
                const ippisDeductions = async () =>{
                try{
                const res = await axios.post('api/v1/masterdeduction/upload/',data)
                    this.$notify({
                    text:'Uploaded successfully',
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
                ippisDeductions()

            }
      
    },
}
</script>

<style scoped>




</style>