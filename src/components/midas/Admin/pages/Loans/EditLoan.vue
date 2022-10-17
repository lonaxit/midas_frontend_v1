<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Update Loan</h5>
            <form @submit.prevent="updateLoan">
				<div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-3">
						<label for="userid">UserID</label>
						<InputText id="userid" type="number" v-model="userid"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="amount">Requested Amount</label>
						<InputText id="amount" type="number" step="0.01" v-model="amount"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="approved">Approved Amount</label>
						<InputText id="approved" type="number" step="0.01" v-model="approved"/>
					</div>

                    	<div class="field col-12 md:col-3">
						<label for="deduction">Deduction</label>
						<InputText id="deduction" type="number" step="0.01" v-model="deduction"/>
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
                  
					</div>

                   

					<div class="field col-12 md:col-3">
						<label for="tenor">Tenor</label>
						<InputText id="tenor" type="number" v-model="tenor"/>
					</div>
					<div class="field col-12 md:col-4">
						<label for="netpay">Net Pay</label>
						<InputText id="netpay" type="number" step="0.01" v-model="netpay"/>
					</div>
                    <div class="field col-12 md:col-4">
						<label for="netpay">Transaction Code</label>
						<InputText id="code" type="number" Disabled v-model="transaction_code"/>
					</div>
					<div class="field col-12 md:col-4">
						<label for="products">Products</label>
						<Dropdown id="products" v-model="selectedProduct" :options="allPrducts" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
				</div>

                  <SubmitButton>
                    <template v-slot:action>
                        <button>Update Loan</button>
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
            userid:null,
            transaction_code:null
        }
    },
    components:{
    SubmitButton,
    // DatePicker
},
    methods: {

     
        updateLoan(){
            
            // initialize the errors array  
            if(this.amount == null || this.amount==0 && this.approved == null || this.approved == 0 && this.deduction == null || this.deduction==0 && this.tenor == null || this.tenor==0 && this.netpay== null || this.netpay==0){

                this.$notify({
                    text:'Please empty fields not allowed!',
                    duration:5000,
                    type:'error',
                });
             
            }else if(this.selectedProduct.length==0){
                this.$notify({
                    text:'Please select a product',
                    duration:5000,
                    type:'error',
                })
                   
            }else if(this.enddate==null || this.startdate==null || this.loandate==null){
                this.$notify({
                    text:'Please select a valid date',
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
                start_date:this.startdate,
                tenor:this.tenor,
                net_pay:this.netpay,
                product:this.selectedProduct.id,
                owner:this.userid,
                 transaction_code:this.transaction_code
                }
                const editLoan = async () =>{
                try{
                const res = await axios.put('api/v1/loan/' + this.$route.params.loanId + '/',formData)
                
                this.$router.push({ name: 'loan-detail', params: { id: this.$route.params.loanId } })
         
                this.$notify({
                    text:'Item Successfully Updated!',
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
                this.selectedProduct=null
                this.userid =null

                } catch(err){
                    this.$notify({
                        text:'Something went wrong!',
                        duration:5000,
                        type:'error',
                    })
                }
                }
                editLoan()
            }
            
                
        }
    },
    computed: {
        ...mapGetters(['allPrducts','loan_Detail'])
 
    },

    created(){
        this.$store.dispatch('getProducts')

        this.$store.dispatch('getLoanDetail', this.$route.params.loanId)
        .then(()=>{
            this.userid = this.loan_Detail.loan_owner_id
            this.selectedProduct= this.loan_Detail.product_name
            this.product_id = this.loan_Detail.product
            this.enddate = this.loan_Detail.end_date
            this.amount = this.loan_Detail.applied_amount
            this.approved = this.loan_Detail.approved_amount
            this.deduction = this.loan_Detail.monthly_deduction
            this.loandate =this.loan_Detail.loan_date
            this.startdate = this.loan_Detail.start_date
            this.tenor = this.loan_Detail.tenor
            this.netpay = this.loan_Detail.net_pay
            this.transaction_code=this.loan_Detail.transaction_code
        }).catch(err=>{
            alert(err.response.data.detail)
        })
          

    },
  


}
</script>

<style scoped>

</style>