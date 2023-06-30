<template>
    <div class="new-accout-container">
  <h1>Change Password</h1>
  <form @submit.prevent="handleSubmit">

<!-- <label >Username</label>
<input type="text"  v-model="formData.username"/> -->

<label >Password</label>
 <input type="password"  v-model="password"/>
 <!-- <div v-if="passwordError" class="error">{{passwordError}}</div> -->

<label >Confirm Password</label>
 <input type="password"  v-model="re_password"/>
 <!-- <div v-if="passwordError" class="error">{{passwordError}}</div> -->
 
 
 <!-- <label>Roles:</label>
 <select v-model="formData.role">
     <option value="employee">Employee</option>
     <option value="admin">Admin</option>
 </select>  -->

<div class="submit">
    <button type="submit">Update Account</button>
</div>

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

        
            password:'',
            re_password:'',
          
          error: []
            
   
       
        }
    },
    components:{
    // SubmitButton,
  
},
computed: {
    ...mapGetters(['user_Detail','profile_Detail'])
},
    methods: {

        ...mapActions(['changeLoginDetails']),

         handleSubmit(){
            
            this.error=[]

            if(!this.password && !this.re_password){
              this.error.push('Missing password value')
              this.$notify({
              text:'Missing password value',
              duration:5000,
              type:'error',
            })     
            }

            if(this.password != this.re_password){
              this.error.push('Password do not matach') 
              this.$notify({
              text:'Password do not match',
              duration:5000,
              type:'error',
            })
            }
            const payload={
                password:this.password,
                userid:this.$route.params.userid
            }

                this.changeLoginDetails(payload).then((res)=>{
                  
                    // console.log(this.user_Detail.user.id)
                    this.$router.push({ name:'change-settings'})
                   
                    this.$notify({
                        text:'Account update successfully!',
                        duration:5000,
                        type: 'success'
                    })

                }).catch(err=>{
               
                    this.$notify({
                        text:err,
                        duration:5000,
                        type:'error'
                    })
                    this.$router.push({ name:'change-settings'})
                })
                
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