<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Saving Deposit</h5>
            <form @submit.prevent="createDeposit">
				<div class="p-fluid formgrid grid">
                  

					<div class="field col-12 md:col-6">
						<label for="credit">Credit</label>
						<InputText id="credit" type="number" step="0.01" v-model="credit"/>
					</div>

					<div class="field col-12 md:col-6">
						<label for="debit">Debit</label>
						<InputText id="debit" type="number" step="0.01" v-model="debit"/>
					</div>
	
                    <div class="field col-12 md:col-6">
						<label for="transactiondate">Date</label>
                       <InputText id="transactiondate" type="date" v-model="transactiondate"/>
					</div>

                      <div class="field col-12 md:col-6">
						<label for="narration">Narration</label>
                       <InputText id="narration" type="text" v-model="narration"/>
					</div>
					
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button>Create Deposit</button>
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
            narration:null,
            debit:null,
            credit:null,
            transactiondate:null,

            payload:{
                userid:null, 
                data:null
            }
       
        }
    },
    components:{
    SubmitButton,
  
},
    methods: {

        ...mapActions(['Deposit']),

        createDeposit(){
            
             
            if(!this.credit && !this.debit){
            this.$notify({
              text:'Please provide a credit or debit value',
              duration:5000,
              type:'error',
            })
               
            }else if(this.credit && this.debit){
                  this.$notify({
              text:'Transaction can only be credit or debit not both',
              duration:5000,
              type:'error',
            })
                 
            }else if(!this.transactiondate){
                  this.$notify({
              text:'Select a valid date',
              duration:5000,
              type:'error',
            })
              
            }else if(!this.narration){
                  this.$notify({
              text:'Enter a transaction narration',
              duration:5000,
              type:'error',
            })
           
            }else{

                const formData = {
                credit:this.credit,
                debit:this.debit,
                narration:this.narration,
                transaction_date:this.transactiondate,
                transaction_code:Math.floor(1000000 + Math.random() * 9000000)
                }

                this.payload.userid = this.$route.params.userid
                this.payload.data = formData

                this.Deposit(this.payload).then(()=>{
                    const userid =this.$route.params.userid

                this.$router.push({name:'user-profile',params:{id:userid} })
                this.$notify({
                    text:'Saving deposit made successfully',
                    duration:5000,
                    type: 'success'
                })
                }).catch(err=>{
                 
                    this.$notify({
                        text:'An error occured',
                        duration:5000,
                        type:'error'
                    })
                })

                
                
            }
                
        }
    },
    computed: {
  },
}
</script>

<style scoped>

</style>