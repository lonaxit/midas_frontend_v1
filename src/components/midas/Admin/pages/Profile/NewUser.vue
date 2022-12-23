<template>
  <div class="grid">
		<div class="col-12">
            <div class="card  p-fluid">
            <h5>New Account</h5>
            <form @submit.prevent="createAccount">
				<div class="p-fluid formgrid grid mt-3">
                     
          
			    <div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="username" v-model="username" required/>
					<label for="inputtext">Username *</label>
				</span>
			    </div>

                <div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="password" v-model="password" required />
					<label for="inputtext">Password *</label>
				</span>
			    </div>

                <div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="password2" v-model="password2" required/>
					<label for="inputtext">Confirm Password *</label>
				</span>
			    </div>  				
		
                <div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="surname" v-model="surname" required/>
					<label for="surname">Surname *</label>
				</span>
			    </div>

                <div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="firstname" v-model="firstname" required/>
					<label for="firstname">Firstname *</label>
				</span>
			    </div>

                <div class="field col-12 md:col-4">	
				<span class="p-float-label">
					<InputText type="text" id="othername" v-model="othername" />
					<label for="othername">Othername</label>
				</span>
			    </div>   

                <!-- <div class="field col-12 md:col-4">
				<span class="p-float-label">
              
					<Dropdown id="dropdown" :options="cities" v-model="role" optionLabel="name"></Dropdown>
					<label for="dropdown">Role *</label>
				</span>
			</div>				 -->
	
    <div class="col-12 md:col-12">
		
				<h5>Role</h5>
				<div class="grid">
                    <!-- <div class="col-12 md:col-3">
						<div class="field-radiobutton mb-0">
							<RadioButton id="option1" name="option" value="cooperator" v-model="role" />
							<label for="option1">Cooperator</label>
						</div>
					</div> -->
					<div class="col-12 md:col-3">
						<div class="field-radiobutton mb-0">
							<RadioButton id="staff"  value="employee" v-model="role" />
							<label for="staff">Staff</label>
						</div>
					</div>
					<div class="col-12 md:col-3">
						<div class="field-radiobutton mb-0">
							<RadioButton id="admin" value="admin" v-model="role" />
							<label for="admin">Admin</label>
						</div>
					</div>
					<div class="col-12 md:col-3">
						<div class="field-radiobutton mb-0">
							<RadioButton id="option3" value="" v-model="role" />
							<label for="option3">No Role</label>
						</div>
					</div>
				</div>

				

				
		

			

			
		</div>

  
		
				</div>
                  <SubmitButton>
                    <template v-slot:action>
                        <button>Create Account</button>
                    </template>
                </SubmitButton>
                </form>
        </div>
		</div>
	</div>


  <div>{{role}}</div>

</template>

<script>
import axios from 'axios'
import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'
import {mapGetters,mapActions} from 'vuex'

export default {

    data(){
        return{
            username:'',
            password:'',
            password2:'',
            surname:'',
            firstname:'',
            othername:'',
            employee:false,
            staff:false,
            role:''
       
        }
    },
    components:{
    SubmitButton,
  
},
computed: {
    ...mapGetters(['user_Detail'])
},
    methods: {

        ...mapActions(['newAccount','getUserByUsername']),

        createAccount(){
            
             
            if(!this.username){
            this.$notify({
              text:'Please provide a username',
              duration:5000,
              type:'error',
            })
               
            }else if(!this.password && !this.password2){
                  this.$notify({
              text:'Missing password or confirm password value',
              duration:5000,
              type:'error',
            })     
            }else if(this.password != this.password2){
                  this.$notify({
              text:'Password do not match',
              duration:5000,
              type:'error',
            })
            }else if(!this.surname){
                  this.$notify({
              text:'Provide a surname',
              duration:5000,
              type:'error',
            })
              
            }else if(!this.firstname){
                  this.$notify({
              text:'Provide a firstname',
              duration:5000,
              type:'error',
            })
           
            }else{

                    if(this.role=='admin'){
                        this.staff=true
                    }
                    if(this.role=='employee'){
                        this.employee=true
                    }
                const formData = {
                username:this.username,
                last_name:this.surname,
                first_name:this.firstname,
                other_name:this.othername,
                password:this.password,
                re_password:this.password2,
                is_employee:this.employee,
                is_staff:this.staff
                }


                this.newAccount(formData).then(()=>{
                  this.getUserByUsername(this.username).then(()=>{
                    // console.log(this.user_Detail.user.id)
                    this.$router.push({ name:'new-profile',params:{user_id:this.user_Detail.user.id}})
                   
                    this.$notify({
                        text:'Account Created Successfully, Please Fill The User Profile',
                        duration:5000,
                        type: 'success'
                    })
                  }).catch((err)=>{
                    console.log(err)
                     this.$router.push({ name:'all-users'})
                  })

                }).catch(err=>{
                    this.$notify({
                        text:err.response.data.msg,
                        duration:5000,
                        type:'error'
                    })
                })

                
                
            }
                
        }
    },
}
</script>

<style scoped>

</style>