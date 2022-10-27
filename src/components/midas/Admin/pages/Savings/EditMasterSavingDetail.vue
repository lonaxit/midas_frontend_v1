<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Edit Master Saving</h5>
            <form @submit.prevent="updateRecord">
				<div class="p-fluid formgrid grid">
                  
                    
					<div class="field col-12 md:col-4">
						<label for="credit">Name</label>
						<InputText id="credit" type="text" v-model="name"/>
					</div>
				

					<div class="field col-12 md:col-4">
						<label for="amount">Amount</label>
						<InputText id="amount" type="number" step="0.01" v-model="amount"/>
					</div>

                    <div class="field col-12 md:col-4">
						<label for="transaction">Transaction Code</label>
						<InputText id="transaction_code" type="number" disabled step="0.01" v-model="transaction_code"/>
					</div>
	
                    <div class="field col-12 md:col-6">
						<label for="transaction_date">Date</label>
                       <InputText id="transaction_date" type="date" v-model="transaction_date"/>
					</div>

                      <div class="field col-12 md:col-6">
						<label for="narration">Narration</label>
                       <InputText id="narration" type="text" v-model="narration"/>
					</div>
					
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
// import DatePicker from '@jobinsjp/vue3-datepicker';
// import '@jobinsjp/vue3-datepicker/index.css';
import {mapGetters,mapActions} from 'vuex'

export default {

    data(){
        return{
        
            narration:null,
            name:null,
            ippis_number:null,
            transaction_date:null,
            transaction_code:null, 
            amount:null, 
            upload_by:null,
            payload:{
                id:null,
                data:null
            }
        }
    },
    components:{
    SubmitButton,

},
    methods: {
        ...mapActions(['MasterSavingDetail','UpdateMasterSaving']),

     
         updateRecord(){
            
             
            if(!this.amount){
                
            this.$notify({
            text: "Please provide a value for amount",
            duration:5000,
            type:'error',
            });
           
            }else if(!this.transaction_date){
                    this.$notify({
                    text: "Please select a valid date",
                    duration:5000,
                    type:'error',
                        });
              
            }else if(!this.narration){
                    this.$notify({
            text: "Please provide a narration",
            duration:5000,
            type:'error',
                });
              
            }else{

                const formData = {
                ippis_number:this.ippis_number,
                name:this.name,
                narration:this.narration,
                transaction_date:this.transaction_date,
                transaction_code:this.transaction_code,
                amount:this.amount,
                upload_by:this.upload_by
                }

               this.payload.id = this.$route.params.id
               this.payload.data =formData

               this.UpdateMasterSaving(this.payload)
               .then(()=>{
                    this.$router.push({ name:'mastersaving-detail', params:{ mastersavingid:this.payload.id}})
                    this.$notify({
                    text: "Item Updated Successfully",
                    duration:5000,
                    type:'success',
                        });
               }).catch(err=>{
                    this.$notify({
                    text: "oops! Something Bad Has Happened!",
                    duration:5000,
                    type:'error',
                    });
               })
     
            }
                
        }
    },
    computed: {
        ...mapGetters(['master_savingDetail'])
 
    },

    created(){
    
    this.MasterSavingDetail(this.$route.params.id)
    .then(() =>{
      this.name = this.master_savingDetail.name
      this.ippis_number = this.master_savingDetail.ippis_number
      this.narration = this.master_savingDetail.narration
      this.transaction_date = this.master_savingDetail.transaction_date
      this.transaction_code = this.master_savingDetail.transaction_code
      this.amount = this.master_savingDetail.amount
      this.upload_by = this.master_savingDetail.upload_by
    }).catch(err=>{
        alert(err.response.data.detail)
    })

    },
  


}
</script>

<style scoped>

</style>