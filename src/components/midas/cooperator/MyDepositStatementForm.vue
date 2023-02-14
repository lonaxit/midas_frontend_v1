<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Find  Deposit Statement</h5>
            <form @submit.prevent="sendData">
				<div class="p-fluid formgrid grid">
                   
                    <div class="field col-12 md:col-6">
						<label for="start_date">Start Date</label>
						<InputText id="start_date" type="date" v-model="start_date"/>
					</div>

					<div class="field col-12 md:col-6">
						<label for="end_date">End Date</label>
						<InputText id="end_date" type="date" v-model="end_date"/>
					</div>
				</div>

                  <SubmitButton>
                    <template v-slot:action>
                        <button>Submit</button>
                    </template>
                </SubmitButton>
                </form>
      

        </div>
		</div>
	</div>
 
 
</template>

<script>

import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'

import {mapGetters} from 'vuex'
export default {

    data(){
        return {
            end_date:null,
            start_date:null,
            userid:0
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

            
            this.$router.push({ name: 'user-deposit-statement', params: {startdate: this.start_date, enddate:this.end_date } })
               
            }
               
         
      
    },

}
}
</script>

<style scoped>

</style>