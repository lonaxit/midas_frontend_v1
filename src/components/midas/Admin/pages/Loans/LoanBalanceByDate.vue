<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Find Balances By Date</h5>
            <form @submit.prevent="sendData">
				<div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
						<label for="userid">Start Date</label>
						<InputText id="start_date" type="date" v-model="start_date"/>
					</div>

					<div class="field col-12 md:col-6">
						<label for="amount">End Date</label>
						<InputText id="end_date" type="date" v-model="end_date"/>
					</div>
				</div>

                  <SubmitButton>
                    <template v-slot:action>
                        <button>Send Data</button>
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
            end_date:null,
            start_date:null,
        }
    },
    components:{
    SubmitButton,
 
},
    methods: {

     
        sendData(){
      
            // initialize the errors array  
            if(!this.start_date && !this.end_date){

                this.$notify({
                    text:'Please select all  dates',
                    duration:5000,
                    type:'error',
                });
             
            }else if(!this.start_date || !this.end_date){
                    this.$notify({
                    text:'Please fill all fields',
                    duration:5000,
                    type:'error',
                });

            }else if(this.start_date > this.end_date){
                this.$notify({
                    text:'Start date can not be greater than the end date',
                    duration:5000,
                    type:'error',
                })
                   
            }else{

            this.$router.push({ name: 'loan-balance-result', params: { start_date: this.start_date, end_date:this.end_date } })
               
            }
               
         
      
    },

}
}
</script>

<style scoped>

</style>