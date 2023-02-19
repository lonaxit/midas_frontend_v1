<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Edit IPPIS Deduction</h5>
            <form @submit.prevent="updateDeduction">
				<div class="p-fluid formgrid grid">
                  
                    
					<div class="field col-12 md:col-4">
						<label for="credit">Name</label>
						<InputText id="credit" type="text" v-model="name"/>
					</div>

				

					<div class="field col-12 md:col-4">
						<label for="debit">Culmulative Deduction</label>
						<InputText id="debit" type="number" step="0.01" v-model="cumulative_amount"/>
					</div>

                    <div class="field col-12 md:col-4">
						<label for="debit">Transaction Code</label>
						<InputText id="transaction_code" type="number" disabled step="0.01" v-model="transaction_code"/>
					</div>
	
                    <div class="field col-12 md:col-6">
						<label for="transactiondate">Date</label>
                       <InputText id="transactiondate" type="date" v-model="entry_date"/>
					</div>

                      <div class="field col-12 md:col-6">
						<label for="narration">Narration</label>
                       <InputText id="narration" type="text" v-model="narration"/>
					</div>
					
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button>Update Deduction</button>
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
import {mapGetters} from 'vuex'

export default {

    data(){
        return{
        
            narration:null,
            name:null,
            ippis_number:null,
            entry_date:null,
            transaction_code:null, 
            cumulative_amount:null, 
            created_by:null
        }
    },
    components:{
    SubmitButton,

},
    methods: {

     
         updateDeduction(){
            
             
            if(!this.cumulative_amount){
                
            this.$notify({
            text: "Please provide a value for deducted amount",
            duration:5000,
            type:'error',
            });
           
            }else if(!this.entry_date){
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
                entry_date:this.entry_date,
                transaction_code:this.transaction_code,
                cumulative_amount:this.cumulative_amount,
                created_by:this.created_by
                }

                const editTransaction = async () =>{
                try{
                  
                const res = await axios.put('api/v1/masterdeduction/'+this.$route.params.ippisdeductionid + '/',formData)
                
            
                this.$router.push('/'+this.$route.params.ippisdeductionid +'/master-deduction')
                    this.$notify({
                    text: "Item Updated Successfully",
                    duration:5000,
                    type:'success',
                        });
            7            } catch(err){
            
                    this.$notify({
                    text: "oops! Something Bad Has Happened!",
                    duration:5000,
                    type:'error',
                        });
                }
                }
                editTransaction()
            }
                
        }
    },
    computed: {
        ...mapGetters(['masterdeductionDetail'])
 
    },

    created(){
    
    this.$store.dispatch('ippisMasterDeductionDetail',this.$route.params.ippisdeductionid)
    .then(() =>{
      this.name = this.masterdeductionDetail.name
      this.ippis_number = this.masterdeductionDetail.ippis_number
      this.narration = this.masterdeductionDetail.narration
      this.entry_date = this.masterdeductionDetail.entry_date
      this.transaction_code = this.masterdeductionDetail.transaction_code
      this.cumulative_amount = this.masterdeductionDetail.cumulative_amount
      this.created_by = this.masterdeductionDetail.created_by
    }).catch(err=>{
        alert(err.response.data.detail)
    })

  

    },
  


}
</script>

<style scoped>

</style>