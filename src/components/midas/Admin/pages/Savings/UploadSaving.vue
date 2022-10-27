<template>
  <div class="grid">
		<div class="col-12">
			<div class="card  p-fluid">
			<h5>Upload Master Savings</h5>
			<form enctype="multipart/form-data" @submit.prevent="uploadSaving">

                <div class="field">
					<label for="name1">Upload File </label>
                    <input type="file" id="loan-upload" ref="file" @change="selectFile"> 
				</div>
			
                 <SubmitButton>
                    <template v-slot:action>
                        <button>Upload Saving</button>
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
import {mapGetters,mapActions} from 'vuex'
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
        ...mapActions(['']),

            selectFile(e){
                this.file = e.target.files[0]
            },
            uploadSaving(){
                const data = new FormData();
                data.append('file', this.file);
             
                const saveRecord = async () =>{
                try{
                const res = await axios.post('api/v1/mastersaving/upload/',data)

                this.$router.push('/saving-master-list')
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
                saveRecord()

            }
      
    },
}
</script>

<style scoped>




</style>