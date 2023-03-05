<template>
    <!-- <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
    <div class="text-center mb-5">
         <router-link to="/">
          <img src="/images/logo.png" alt="MIDAS Logo" height="60" class="mb-3" style="width:60px; height:60px;">
         </router-link>
       

        <div class="text-900 text-3xl font-medium mb-3">Sign In</div>
  
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Username</label>
        <InputText id="username" v-model="username" type="text" class="w-full mb-3" />

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" v-model="password" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
       
            <router-link to="" class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</router-link>
        </div>

        <Button @click="submitLogin" label="Sign In" icon="pi pi-user" class="w-full">
        </Button>
    </div>
    <div class="error" v-if="errors.length">
                        <p v-for="error  in errors" :key="error">
                        {{error}}
                        </p>
    </div>
</div>
    </div>  -->

<div class="wrapper">

<section class="side">

<div class="logo-wrapper">
  <div class="nameplate-wrapper">
     <router-link to="/">
       <div class="logo-midas"><img src="/images/logo.png" alt="MIDAS Logo"></div>
    </router-link>
    
    <div class="signature">MIDAS TOUCH</div>
  </div>
  <div class="name-title">Multipurpose cooperative Society </div>
</div>

<div class="contact-wrapper">
    <p class="contact-title">Contact Us</p>
    <p> <i class="pi pi-phone"></i>  <span>+234 0811 890 1411</span></p>
    <p> <i class="pi pi-envelope"></i>  <span>mindastouch@gmail.com</span></p>
</div>

    <img src="/layout/images/smartphone.png" alt="MIDAS Logo">
</section>

<section class="main">

    <div class="login-container">
        <div class="alternate-logo-container">
    <router-link to="/">
       <img src="/images/logo.png" alt="MIDAS Logo" class="logo">
    </router-link>
            
        </div>
        <p class="title">
            Welcome Back
        </p>
        <div class="separator"></div>
        <p class="welcome-message">Please provide login credentials to proceed to have access to our services</p>

        <p class="signin">sign in</p>

        <form @submit.prevent="submitLogin" class="login-form">
                <div class="form-control">
                    <input type="text" placeholder="Enter username" v-model="username">
                    <i class="pi pi-user"></i>
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password" v-model="password">
                    <i class="pi pi-lock"></i>
                </div>
                <button class="submit">login</button>
        </form>

     <div class="error" v-if="errors.length">
                        <p v-for="error  in errors" :key="error">
                        {{error}}
                        </p>
    </div>
    </div>

</section>
</div>
 


</template>

<script>

import axios from 'axios'

import { mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: '',
            errors: [],
            
        }
    },
  
    computed: {
        ...mapGetters(['user_Detail','getUsername'])
    },
    
    methods: {
        ...mapMutations(['setUsername','setToken']),
  
          submitLogin(){
          
        //   reset token
            axios.defaults.headers.common['Authorization'] = ""

            // remove old token from localStorage
            localStorage.removeItem('token')

            // // reset the errors array to empty
            this.errors=[]
            
            if(this.username === ''){
               
                this.errors.push('The username field is empty')
        
            }
            if(this.password === ''){
                this.errors.push('The password field is empty')
      
            }
            

            // send data when no error exists
            if(!this.errors.length){

                const FormData ={
                    username: this.username,
                    password: this.password
                }

                // send data through using axios using promises
                axios
                .post('/api/v1/token/login/',FormData)
                .then(response => {

               

                    const token = response.data.auth_token
                    // call setToken mutation
                    this.setToken(token)
                    //call setUsername mutation
                    this.setUsername(this.username)
                    
                    axios.defaults.headers.common['Authorization'] = "Token " + token

                    // store in the local storage 
                    localStorage.setItem('token',token)
                    localStorage.setItem('username',this.username)
                  

                   
                    this.$router.push('/home')
                
                    
                })
                .catch(error =>{
                     this.errors.push(error)
                    })

                // post data with axios using asycn/wait
                // const sendPostRequest = async () => {
                // try {
                // const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
                // console.log(resp.data);
                // } catch (err) {
                // // Handle Error Here
                // console.error(err);
                // }
                // };
                // sendPostRequest();

         } 
        }
    },
   

 
  
}
</script>

<style scoped>
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-size: 1.2rem;
}
.wrapper{
    min-height: 100vh;
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.side{
    position: relative;
}
.logo-wrapper{
    padding: 24px;
    position: absolute;
    left: 0;
    top: 0;
}
.contact-wrapper{
     padding: 24px;
    position: absolute;
    left: 0;
    bottom: 0;
}
span {
    font-size:0.9rem;
    color:black;
    font-weight: 300;
}

.nameplate-wrapper{
   display: flex;
   flex-direction: row;
}
.logo-midas{
    display: flex;
  justify-content: center;
  align-items: center;

}

img {
  width: 150px;
  height: auto;
  filter: grayscale(50%); 
}
.logo {
    height: 50px;
    width: 50px;
}

.contact-img{
    width:15px;
    height: 20px;
}
.signature {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.7rem;
    color: black;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
}
.name-title{
    padding:10px 10px 10px 35px;
     text-transform:capitalize;
    font-size: 1.4rem;
    color: black;
    font-weight: bold;
}
.contact-title{
    margin-bottom: 4px;
    text-transform:uppercase;
    font-size: 1.1rem;
    color: black;
    font-weight: bold;
}
section{
    display:flex;
    justify-content: center;
    align-items: center;
}
section.side{
    background: url(/layout/images/Fluid.png) no-repeat;
    background-size: 100% 102%;
}
.side img {
    width:50%;
    max-width:50%;
}
.login-container{
    max-width: 450px;
    padding:24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    text-transform: uppercase;
    font-size: 1.7rem;
    color: black;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
}
.signin{
    text-transform: uppercase;
    text-align: center;
    line-height: 28px;
    font-size: 1.5rem;
    margin-bottom:25px;
    font-weight: bold;
    color: #696969;
}
.separator{
    width: 150px;
    height: 4px;
    background-color: #843bc7;
    margin:24px;
}
.welcome-message{
    text-align: center;
    line-height: 28px;
    font-size: 1.1rem;
    margin-bottom:30px;
    color: #696969;
}

.login-form{
    width: 100%;
    display: flex;
    flex-direction: column; 
}

.form-control {
    width: 100%;
    position: relative;
    margin-bottom: 24px;
}
input,button{
    border: none;
    outline: none;
    background-color: red;
    border-radius: 4px;
}
input{
    width: 100%;
    background: #e6e6e6;
    color: #333;
    letter-spacing: 0.5px;
    padding: 16px 64px;

}
input ~ i {
    position: absolute;
    left: 32px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
    transition: color 0.4s;
}
 input:focus ~ i {
    color: #843bc7;
 }
i{
    color:brown;
}
 button.submit{
  /* background:#fff; */
  color: white;
  border: 2px solid #1aac83;
  padding: 14px 64px;
  border-radius:4px;
  cursor: pointer;
  font-size: 2em;
  /* margin: 32px auto; */
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  background-image: linear-gradient(to right, #8b33c5, #15a0e1);
  transition: opacity 0.4s;
}
button.submit:hover{
    opacity: 0.9s;
}


/* media queries */
@media (max-width: 780px){
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .side{
        display: none;
    }
}
@media (min-width: 780px){
    .alternate-logo-container{
        display: none;
    }
}

 
.pi-eye {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
}





</style>