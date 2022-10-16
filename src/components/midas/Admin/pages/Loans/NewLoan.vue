<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>New Loan</h5>
            <form @submit.prevent="createLoan">
				<div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-3">
						<label for="userid">UserID</label>
						<InputText id="userid" type="number" v-model="userid"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="amount">Requested Amount</label>
						<InputText id="amount" type="number" v-model="amount"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="approved">Approved Amount</label>
						<InputText id="approved" type="number" v-model="approved"/>
					</div>

                    	<div class="field col-12 md:col-3">
						<label for="deduction">Deduction</label>
						<InputText id="deduction" type="number" v-model="deduction"/>
					</div>

<div class="field col-12 md:col-3">
						<label for="loandate">Loan Date</label>
                  
                       <InputText id="loandate" type="date" v-model="loandate"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="startdate">Start Date</label>
                         <InputText id="startdate" type="date" v-model="startdate"/>
					</div>

                    <div class="field col-12 md:col-3">
						<label for="enddate">End Date</label>
                        <InputText id="enddate" type="date" v-model="enddate"/>
                        <!-- <date-picker v-model:value="enddate"></date-picker> -->
					</div>

                   

					<div class="field col-12 md:col-3">
						<label for="tenor">Tenor</label>
						<InputText id="tenor" type="number" v-model="tenor"/>
					</div>
					<div class="field col-12 md:col-6">
						<label for="netpay">Net Pay</label>
						<InputText id="netpay" type="number" v-model="netpay"/>
					</div>
					<div class="field col-12 md:col-6">
						<label for="products">Products</label>
						<Dropdown id="products" v-model="selectedProduct" :options="allPrducts" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
					
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button>Create Loan</button>
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
 

export default {

    data(){
        return{
        
            selectedProduct:[],
            product_id:null,
            enddate:null,
            amount:null,
            approved:null,
            deduction:null,
            loandate:null,
            startdate:null,
            tenor:null,
            netpay:null,
            userid:null
        }
    },
    components:{
    SubmitButton,
    // DatePicker
},
    methods: {

        createLoan(){
            // Math.floor(1000000 + Math.random() * 9000000)
            // console.log(Math.floor(Math.random() * 10000)) + 90000;
            
            // initialize the errors array  
            if(this.amount == null || this.amount==0 && this.approved == null || this.approved == 0 && this.deduction == null || this.deduction==0 && this.tenor == null || this.tenor==0 && this.netpay== null || this.netpay==0){
                  this.$notify({
              text:'Enter all fields',
              duration:5000,
              type:'error',
            })
              
            }else if(this.selectedProduct.length==0){
                  this.$notify({
              text:'Select a product',
              duration:5000,
              type:'error',
            })
                  
            }else if(this.enddate==null || this.startdate==null || this.loandate==null){
                  this.$notify({
              text:'Select a valid date',
              duration:5000,
              type:'error',
            })
                 
            }else{
               

                const formData = {
                 
                end_date:this.enddate,
                applied_amount:this.amount,
                approved_amount:this.approved,
                monthly_deduction:this.deduction,
                loan_date:this.loandate,
                start_date: this.startdate,
                tenor:this.tenor,
                net_pay:this.netpay,
                product:this.selectedProduct.id,
                owner:this.userid,
                transaction_code:Math.floor(1000000 + Math.random() * 9000000)
                }
                const newLoan = async () =>{
                try{
                const res = await axios.post('api/v1/loans/',formData)
                  this.$notify({
              text:'Created Successfully',
              duration:5000,
              type:'success',
            })
             
                this.enddate=null
                this.amount=null
                this.approved=null
                this.deduction=null
                this.loandate=null
                this.startdate=null
                this.tenor=null
                this.netpay=null
                this.product_id=null
                this.userid=null

                } catch(err){
                   
              this.$notify({
              text:'Something went wrong',
              duration:5000,
              type:'error',
            })
                }
                }
                newLoan()
            }
            
                
        }
    },
    computed: {

    allPrducts() {
    return this.$store.getters.allPrducts;
  },
  products_loader(){
    return this.$store.getters.products_loader
  }

  },

    created(){
        this.$store.dispatch('getProducts')
    },
  


}
</script>

<style scoped>

</style>