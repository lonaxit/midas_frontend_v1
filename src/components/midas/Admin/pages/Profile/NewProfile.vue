<template>
<div v-if="loader">
 <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Update Account</h5>
            <form @submit.prevent="updateAccountDetail">
				<div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-3">
						<label for="username">Username</label>
						<InputText id="username" type="text" v-model="username"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="surname">Surname</label>
						<InputText id="surname" type="text" v-model="surname"/>
					</div>

					<div class="field col-12 md:col-3">
						<label for="firstname">Firstname</label>
						<InputText id="firstname" type="text" v-model="firstname"/>
					</div>

                    	<div class="field col-12 md:col-3">
						<label for="othername">Othername</label>
						<InputText id="othername" type="text" v-model="othername"/>
					</div>

                             <div class="field col-12 md:col-4">
						<label for="ippis">IPPIS</label>
						<InputText id="ippis" type="number" v-model="ippis"/>
					</div>
              
                    <!-- <div class="field col-12 md:col-4">
						<label for="employ_type">Status</label>
						<Dropdown id="employ_type" v-model="employmenttype" :options="employ_type" optionLabel="name" placeholder="Select One"></Dropdown>
					</div> -->
                
					<div class="field col-12 md:col-4">
						<label for="dob">Date of Birth</label>
						<InputText id="dob" type="date" v-model="dob"/>
					</div>

                    <div class="field col-12 md:col-4">
						<label for="dofa">Date of First Appointment</label>
						<InputText id="dofa" type="date" v-model="dofa"/>
					</div>
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button id='profile'>Update Account</button>
                    </template>
                </SubmitButton>
                </form>

		
        </div>
		</div>
	</div>
    <hr>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>Update Profile</h5>
            <form @submit.prevent="createProfile">
				<div class="p-fluid formgrid grid">
                   
                    <div class="field col-12 md:col-2">
						<label for="gender">Gender</label>
						<Dropdown id="gender" v-model="gender" :options="sex" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
                    <div class="field col-12 md:col-2">
						<label for="employ_type">Employment Type</label>
						<Dropdown id="employ_type" v-model="employmenttype" :options="employ_type" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
                    <div class="field col-12 md:col-3">
						<label for="cadre">Job Cadre</label>
						<Dropdown id="cadre" v-model="job_cadre" :options="cadre" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>

                    <div class="field col-12 md:col-3">
						<label for="marital_status">Marital Status</label>
						<Dropdown id="marital_satus" v-model="marriage_status" :options="marital_status" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>

					<div class="field col-12 md:col-3">
						<label for="address">Address</label>
						<InputText id="address" type="text" v-model="address"/>
					</div>

			

                    	<div class="field col-12 md:col-3">
						<label for="phone">phone</label>
						<InputText id="phone" type="text" v-model="phone"/>
					</div>

                    <div class="field col-12 md:col-3">
						<label for="email">Email</label>
                  
                       <InputText id="email" type="email" v-model="email"/>
					</div>

					<div class="field col-12 md:col-4">
						<label for="nok_fullname">NOK Fullname</label>
                         <InputText id="nok_fullname" type="text" v-model="nok_fullname"/>
					</div>

                    <div class="field col-12 md:col-4">
						<label for="nok_phone">NOK Phone</label>
                        <InputText id="nok_phone" type="text" v-model="nok_phone"/>
                       
					</div>

					<div class="field col-12 md:col-4">
						<label for="nok_relationship">NOK Relationship</label>
						<Dropdown id="nok_relationship" v-model="relationship" :options="nok_relationship" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>

                    <div class="field col-12 md:col-6">
						<label for="bank">Bank</label>
						<Dropdown id="bank" v-model="bank" :options="banks" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>

					<div class="field col-12 md:col-6">
						<label for="acct_number">Account Number</label>
						<InputText id="acct_number" type="number" v-model="account_number"/>
					</div>
				
					
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button id='profile'>Update Profile</button>
                    </template>
                </SubmitButton>
                </form>

		
        </div>
		</div>
	</div>
    </div>
    <div v-else>
        <p>Please wait...</p>
    </div>
</template>

<script>
import axios from 'axios'
import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'

 import {mapGetters,mapActions} from 'vuex'

export default {

    data(){
        return{
              userPayload:{
                myID:null,
                data:null
            },
            payload:{
                profileID:null,
                data:null
            },
            email: "",
            phone:"",
            address:"",
            nok_phone:"",
            nok_fullname:"",
            dob:null,
            dofa:null,
            ippis:"",
            username:"",
            surname:"",
            firstname:"",
            othername:"",
            account_number:"",
            gender:[],
            employmenttype:[],
            marriage_status:[],
            job_cadre:[],
            relationship:[],
            bank:[],
            loader:false,
            banks:[
                {name:'Access'},
                {name:'UBA'},
                {name:'FCMB'},
                {name:'ECOBANK'},
                {name:'FIRST BANK'},
                {name:'GT BANK'},
                {name:'STERLING BANK'},
                {name:'STANBIC IBTC'},
                {name:'UNION BANK'},
                {name:'FIDELITY BANK'},
                {name:'UNITY BANK'}
            ],
            sex:[
                {name:'Male'},
                {name:'Female'}
                ],
            employ_type:[
                {name:'Pensionable'},
                {name:'Contract'}
            ],
             status:[
                {name:'True'},
                {name:'False'}
            ],
            marital_status:[
                {name:'Married'},
                {name:'Single'},
                {name:'Widow'},
                {name:'Widower'}
            ],
            cadre:[
                {name:'Senior'},
                {name:'Junior'}
            ],
            nok_relationship:[
                {name:'Spouse'},
                {name:'Child'},
                {name:'Sister'},
                {name:'Brother'},
                {name:'Niece'},
                {name:'Cousin'},
                {name:'Father'},
                {name:'Mother'}
            ],
            
         
        }
    },
    components:{
    SubmitButton,
},
    methods: {
        ...mapActions(['getUserDetail','updateProfile','updateAccount']),

        updateAccountDetail(){
            // alert(`${this.user_Detail.id}`)
            // console.log(`${this.user_Detail.id}`)

                  if(!this.ippis){
              this.$notify({
              text:'Please provide an IPPIS number',
              duration:5000,
              type:'error',
            })
            }else if(!this.dob){
                  this.$notify({
              text:'Provide select a Date of Birth',
              duration:5000,
              type:'error',
            })
            }else if(!this.dofa){
                  this.$notify({
              text:'Provide select a Date of First Appointment',
              duration:5000,
              type:'error',
            })
            }


            const userAccountFormData ={
            dob:this.dob,
            dofa:this.dofa,
            ippis_number:this.ippis,
            username:this.username,
            first_name:this.firstname,
            last_name:this.surname,
            other_name:this.othername
            }
            this.userPayload.myID = this.user_Detail.id
            this.userPayload.data = userAccountFormData

            this.updateAccount(this.userPayload).then(()=>{
              this.$router.push({name:'user-profile',params:{id:this.user_Detail.id}})
              this.$notify({
              text:'Account Updated Successfully',
              duration:5000,
              type:'success',
            })

            }).catch((err)=>{
              this.$notify({
              text:'Something went wrong!',
              duration:5000,
              type:'error',
            })
            })
        },


        createProfile(){

            // initialize the errors array 
            if(this.account_number.length < 10){
                  this.$notify({
              text:'Account number should not be less than 10 digits',
              duration:5000,
              type:'error',
            })
                  
            }else if(this.account_number.length > 10){
                  this.$notify({
              text:'Account number should not be more than 10 digits',
              duration:5000,
              type:'error',
            })
                 
            }else if(!this.account_number){
                  this.$notify({
              text:'Provide an account number',
              duration:5000,
              type:'error',
            })
            }else if(!this.bank){
                  this.$notify({
              text:'Provide select a bank',
              duration:5000,
              type:'error',
            })
            }else if(this.gender.length === 0){
                  this.$notify({
              text:'Provide select a gender',
              duration:5000,
              type:'error',
            })
            }else if(this.employmenttype.lenth ===0){
                  this.$notify({
              text:'Provide select employment type',
              duration:5000,
              type:'error',
            })
            }else if(this.marriage_status.length===0){
                  this.$notify({
              text:'Provide select marital status',
              duration:5000,
              type:'error',
            })
            }else if(this.job_cadre===0){
                  this.$notify({
              text:'Provide select a job cadre',
              duration:5000,
              type:'error',
            })
            }else if(this.relationship.length===0){
                  this.$notify({
              text:'Provide select a relationship',
              duration:5000,
              type:'error',
            })
            }else{
               

            const formData = {

            email: this.email,
            phone:this.phone,
            home_address:this.address,
            nok_phone:this.nok_phone,
            nok_fullName:this.nok_fullname,
            nok_relationship:this.relationship.name,
            bank_account:this.account_number,
            gender:this.gender.name,
            employment_type:this.employmenttype.name,
            employment_date:this.employment_date,
            marital_status:this.marriage_status.name,
            job_cadre:this.job_cadre.name,
            bank:this.bank.name,
            }
            this.payload.profileID = this.profile_Detail.id
            this.payload.data = formData
        
            this.updateProfile(this.payload).then(()=>{
              this.$router.push({name:'user-profile',params:{id:this.user_Detail.id}})
              this.$notify({
              text:'Profile Updated Successfully',
              duration:5000,
              type:'success',
            })

            }).catch((err)=>{
              this.$notify({
              text:'Something went wrong!',
              duration:5000,
              type:'error',
            })
            })

          
            }
            
                
        }
    },
    computed: {
        ...mapGetters(['user_Detail','profile_Detail']),
  },

    created(){
        this.getUserDetail(this.$route.params.user_id).then(()=>{
          
            this.username = this.user_Detail.username
            this.surname = this.user_Detail.last_name
            this.firstname = this.user_Detail.first_name
            this.othername = this.user_Detail.other_name
            this.ippis=this.user_Detail.ippis_number,
            this.dob=this.user_Detail.dob,
            this.dofa=this.user_Detail.dofa

            this.email=this.profile_Detail.email
            this.phone=this.profile_Detail.phone
            this.address=this.profile_Detail.home_address
            this.nok_phone=this.profile_Detail.nok_phone
            this.nok_fullname=this.profile_Detail.nok_fullName
            this.relationship=this.profile_Detail.nok_relationship
            this.account_number=this.profile_Detail.bank_account,
            this.gender=this.profile_Detail.gender,
            this.employmenttype=this.profile_Detail.employment_type,
            this.employment_date=this.profile_Detail.employment_date,
            this.marriage_status=this.profile_Detail.marital_status,
            this.job_cadre=this.profile_Detail.job_cadre,
            this.bank=this.profile_Detail.bank,
            this.loader =true
        
        })
    },
  


}
</script>

<style scoped>

</style>