<template>
    

    <!-- new login template -->
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-4">
    <div class="text-center mb-5">
        <img src="/images/logo.png" alt="MIDAS Logo" height="60" class="mb-3" style="width:60px; height:60px;">

        <div class="text-900 text-3xl font-medium mb-3">Sign In</div>
        <!-- <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> -->
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Username</label>
        <InputText id="username" v-model="username" type="text" class="w-full mb-3" />

        <label for="password" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password" v-model="password" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <!-- <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Remember me</label>
            </div> -->
        

            <router-link to="" class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</router-link>
        </div>

        <Button @click="submitLogin" label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
    <div class="error" v-if="errors.length">
                        <p v-for="error  in errors" :key="error">
                        {{error}}
                        </p>
    </div>
</div>
    </div> 

</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
            errors: [],
            
        }
    },
    
    methods: {
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
                    this.$store.commit('setToken',token)
                    

                    axios.defaults.headers.common['Authorization'] = "Token " + token

                    // store in the local storage 
                    localStorage.setItem('token',token)

                    // set username for user
                    localStorage.setItem('username',this.username)
                    this.$store.commit('setUsername',this.username)

                   
                    this.$router.push('/home')
                
                    
                })
                .catch(error =>{
                    console.log(error) 
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

    computed: {
        logoColor() {
            if (this.$appState.darkTheme) return 'white';
            return 'dark';
        },
       
    },
  
}
</script>

<style scoped>
.pi-eye {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
}
</style>