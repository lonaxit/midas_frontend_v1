<template>



    <div class="new-accout-container">
  <h1>Create a new account</h1>
  <form @submit.prevent="handleSubmit">

  <label >Surname</label>
  <input type="text"  v-model="formData.last_name" placeholder="Enter Surname"/>

  <label >Firstname</label>
  <input type="text"  v-model="formData.first_name"/>

  <label >Othername</label>
  <input type="text" v-model="formData.other_name"/>

  <label >IPPIS Number</label>
  <input type="number" min="1"  v-model="formData.ippis_number"/>

  <label >Date of Birth</label>
  <input type="date"  v-model="formData.dob"/>

  <label >Date of First Appointment</label>
  <input type="date"  v-model="formData.dofa"/>

  <label >Username</label>
  <input type="text"  v-model="formData.username"/>

<label >Password</label>
 <input type="password"  v-model="formData.password"/>
 <!-- <div v-if="passwordError" class="error">{{passwordError}}</div> -->

<label >Confirm Password</label>
 <input type="password"  v-model="formData.re_password"/>
 <!-- <div v-if="passwordError" class="error">{{passwordError}}</div> -->
 
 
 <label>Roles:</label>
 <select v-model="role">
     <option value="employee">Employee</option>
     <option value="admin">Admin</option>
 </select>

 <!-- <label>Skills</label>
 <input type="text" v-model="tempSkill" @keyup.alt="addSkill">

 <div v-for="skill in skills" :key="skill" class="pill">

<span @click="deleteSkill(skill)">{{ skill }}</span>
     

 </div> -->

 <!-- <div class="terms">
     <input type="checkbox" required v-model="terms">
     <label>Accept Terms and Conditions </label>
 </div> -->


<div class="submit">
    <button type="submit">Create an Account</button>
</div>
 <!-- <div>
        <input type="checkbox" value="Shaun" v-model="names">
     <label>Shaun</label>
 </div>

 <div>
    <input type="checkbox" value="Yoshi" v-model="names">
     <label>Yoshi</label>
 </div>
 <div>
        <input type="checkbox" value="Mario" v-model="names">
     <label>Mario</label>
 </div> -->

<!-- <div class="error" v-for="i in error" :key="i">
  <p>{{i}}</p>
  </div> -->
</form>



    </div>


</template>

<script>
import axios from 'axios'
import SubmitButton from '@/components/midas/ReusableComponents/submitUpdateButton.vue'
import {mapGetters,mapActions} from 'vuex'

export default {

    data(){
        return{

          formData:{
            username:'',
            password:'',
            re_password:'',
            last_name:'',
            first_name:'',
            other_name:'',
            is_employee:false,
            is_staff:false,
            dob:'',
            dofa:'',
            ippis_number:''
          },
          error: [],
          role:''
            
   
       
        }
    },
    components:{
    // SubmitButton,
  
},
computed: {
    ...mapGetters(['user_Detail'])
},
    methods: {

        ...mapActions(['newAccount','getUserByUsername']),

        handleSubmit(){
            
              this.error=[]

            if(!this.formData.username){
              this.error.push('Please provide a username') 
            this.$notify({
              text:'Please provide a username',
              duration:5000,
              type:'error',
            }) 
            }

            if(!this.formData.password && !this.formData.re_password){
              this.error.push('Missing password value')
              this.$notify({
              text:'Missing password value',
              duration:5000,
              type:'error',
            })     
            }

            if(this.formData.password != this.formData.re_password){
              this.error.push('Password do not matach') 
              this.$notify({
              text:'Password do not match',
              duration:5000,
              type:'error',
            })
            }

            if(!this.formData.last_name){
              this.error.push('Provide a surname') 
              this.$notify({
              text:'Provide a surname',
              duration:5000,
              type:'error',
            })
            }

            if(!this.formData.first_name){
              this.error.push("Provide a firstname")
              this.$notify({
              text:'Provide a firstname',
              duration:5000,
              type:'error',
            })
            }

            if(!this.formData.ippis_number){
              this.error.push("Provide  ippis number") 
              this.$notify({
              text:'Provide ippis number',
              duration:5000,
              type:'error',
            })
            }

            if(!this.formData.dob){
              this.error.push("Provide  a date of birth")
              this.$notify({
              text:'Provide a date of birth',
              duration:5000,
              type:'error',
            })
            }

            if(!this.formData.dofa){
              this.error.push("Provide date of first appointment")
              this.$notify({
              text:'Provide date of first appointment',
              duration:5000,
              type:'error',
            })
            }

             if(this.role==='admin'){
                this.formData.is_staff=true
              }
              if(this.role==='employee'){
                this.formData.is_employee=true
              }

            if(this.error.length ===0 ){

                   
              


                this.newAccount(this.formData).then((res)=>{
                 
                  this.getUserByUsername(this.formData.username).then(()=>{
                    // console.log(this.user_Detail.user.id)
                    this.$router.push({ name:'new-profile',params:{user_id:this.user_Detail.user.id}})
                   
                    this.$notify({
                        text:'Account Created Successfully, Please Fill The User Profile',
                        duration:5000,
                        type: 'success'
                    })
                  }).catch((err)=>{
                    
                     this.$router.push({ name:'all-users'})
                  })

                }).catch(err=>{
                    this.$notify({
                        text:err,
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

.new-accout-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

form{
    width: 700px;
    margin: 5px; 
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    /* color: #aaa; */
    display:inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    /* border: none; */
    /* border-bottom: 1px solid #ddd; */

  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  /* color:#555; */
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
/* .pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius:20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight:bold;
    color: #777;
    cursor: pointer;
} */
/* button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
} */

button[type="submit"],
button[type="reset"] {
  /* width: 100px; */
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  cursor: pointer;
}
.submit{
    text-align: center;
}
.error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}



</style>