<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img src="/images/logo.png" alt="Midas logo" class="mb-5" style="width:60px; height:60px;">
            </div>
            <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; ">
                <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="text-center mb-5">
                        <!-- <img src="layout/images/avatar.png" alt="Image" height="50" class="mb-3"> -->
                        <div>
                            <span class="text-600 font-medium">Sign in to continue</span>
                        </div>
                        
                    </div>

                        <div class="w-full md:w-10 mx-auto">
                        <label for="email1" class="block text-900 text-xl font-medium mb-2">Username</label>
                        <InputText id="email1" v-model="username" type="text" class="w-full mb-3" placeholder="username" style="padding:1rem;" />
                
                        <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>

                        <div class="flex align-items-center justify-content-between mb-5">
                            
                            <!-- <div class="flex align-items-center">
                                <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2"></Checkbox>
                                <label for="rememberme1">Remember me</label>
                            </div> -->
                            <!-- <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)" href="#">Forgot password?</a> -->

                            <router-link to="/signup"  class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</router-link>

                        </div>
                        <!-- <button label="Sign In" class="w-full p-3 text-xl">Login</button> -->
                        

                        <Button @click="submitLogin" label="Sign In" class="w-full p-3 text-xl"></Button>
                       
                    </div>
                    
                      <div class="notify" v-if="errors.length">
                        <p v-for="error  in errors" :key="error">
                        {{error}}
                        </p>
                     </div>
                    
                  </div>
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