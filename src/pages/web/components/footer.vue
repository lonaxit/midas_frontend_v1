<template>
<!-- <div class="py-4 px-4 mx-0 mt-8 lg:mx-8" id="contact">
            <div class="grid justify-content-between">
                <div class="col-12 md:col-2" style="margin-top:-1.5rem;">
                    <div class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3">
                        <div class="logo">
                        <img src="../../../../public/images/logo.png" alt="Logo" class="midas-logo"> 
                        </div>
                        
                    </div>
                </div>

                <div class="col-12 md:col-7">
                    <div class="grid text-center md:text-left">
                        <div class="col-12 md:col-3">
                            <router-link to="/" class="font-medium text-2xl line-height-3 mb-3 text-900">Home</router-link>
                        </div>
                        
                        <div class="col-12 md:col-3 mt-4 md:mt-0">
                            <router-link to="/" class="font-medium text-2xl line-height-3 mb-3 text-900">About</router-link>
                      
                        </div>
        
                        <div class="col-12 md:col-3 mt-4 md:mt-0">
                            <router-link to="/" class="font-medium text-2xl line-height-3 mb-3 text-900">Services</router-link>
                        
                        </div>
        
                        <div class="col-12 md:col-3 mt-4 md:mt-0">
                            <router-link to="/" class="font-medium text-2xl line-height-3 mb-3 text-900"> Mission </router-link>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        
<footer>
    <div class="row">
        <div class="col">
            <img src="../../../../public/images/logo.png" alt="Logo" class="logo">
            <p>
                MIDAS Touch is a staff cooperative society in Federal Medical Center Makurdi that is committed not only to the welfare of her members but also to promote excellence in corporate financial management
            </p>
        </div>


        <div class="col">
            <h3>Office <div class="underline"><span></span></div></h3>
            <p>MIDAS Touch Complex.</p>
            <p>1 Hospital Road</p>
            <p>Wadata, Makurdi</p>
            <p class="email-id">mindastouch@gmail.com</p>
            <h4>+234 0811 890 1411</h4>
        </div>
        <div class="col">
            <h3>Links <div class="underline"><span></span></div></h3>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/">Contact</router-link></li>

            </ul>
        </div>
        <div class="col">
            <h3>Social <div class="underline"><span></span></div></h3>
            <div class="social-icons">
                <i class="pi pi-telegram"></i>
            </div>
            <!-- <form>
                <div class="form-control">
                    <input type="text" placeholder="Enter username" v-model="username">
                    <i class="pi pi-user"></i>
                </div>
                <div class="form-control">
                    <input type="password" placeholder="Password" v-model="password">
                    <i class="pi pi-lock"></i>
                </div>
                
                <button class="submit">login</button>
            </form> -->
        </div>
    </div>
    <hr>
    <p class="copyright"> 2023 MIDAS Touch Multipurpose Cooperative Society</p>
</footer>

</template>

<script> 
export default {
     methods: {
        
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

footer{
    width:100%;
    position: relative;
    /* bottom: 0;  */
    background: linear-gradient(to right, #00093c, #2d0b00);
    color: #fff;
    padding: 100px 0 30px;
    border-top-left-radius: 125px;
    font-size: 13px;
    line-height: 20px;
}

.row {
    width:85%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
}
.col{
    flex-basis: 25%;
    padding: 10px;
}
.col :nth-child(2), .col:nth-child(3){
    flex-basis: 15%;
}
.logo{
    width:80px;
    margin-bottom: 30px;
}
.col h3 {
    width: fit-content;
    margin-bottom: 40px;
    position: relative;
    font-size: 14px;
    font-weight: bold;
}
.email-id{
    width: fit-content;
    border-bottom: 1px solid #ccc;
    margin: 20px 0;
}

ul li{
    list-style: none;
    margin-bottom: 12px;
}
ul li a {
    text-decoration: none;
    color: #fff;
}

.social-icons i{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 50px;
    /* color: #000;
    background: #fff;
    margin-right:15px; */
    cursor: pointer;
}

hr{
    width: 90%;
    border: 0;
    border-bottom: 1px solid #ccc;
    margin: 20px auto;
}
.copyright{
    text-align: center;
}

.underline {
    width: 100%;
    height: 5px;
    background: #767676;
    border-radius: 3px;
    position: absolute;
    top: 25px;
    left: 0;
    overflow: hidden;
}
.underline span{
    width: 15px;
    height: 100%;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 10px;
    animation: moving 2s linear infinite;
}

@keyframes moving {
    0%{
        left: -20px;
    }
    100%{
        left: 100%;
    }
}

@media ( max-width: 700px){
    footer{
        bottom: unset;
    }

    .col{
    flex-basis: 100%;
}
.col :nth-child(2), .col:nth-child(3){
    flex-basis: 100%;
}
}
/* contact form */
/* form{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    margin-bottom: 50px;
} */
/* to position side by side */
/* form .fas{
    font-size: 18px;
margin-right : 10px;
} */

/* form button */
/* form button {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
}
form button .fas{
    font-size: 18px;
    color:white
} */



/* .form-control {
    width: 100%;
    position: relative;
    margin-bottom: 24px;
}
input,button{
    border: none;
    outline: none;
    border-radius: 4px;
} */
/* input{
    width: 100%;
    background: #e6e6e6;
    color: #333;
    letter-spacing: 0.5px;
    padding: 16px 64px; */
    /* others */
    /* background: transparent;
    color: #ccc;
    border: 0;
    outline: none;
*/
/* } */
/* input ~ i {
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
 button.submit{
  background:#fff; 
  color: white;
  border: 2px solid #1aac83;
  padding: 10px 25px;
  border-radius:4px;
  cursor: pointer;
  font-size: 2em;
  margin: 32px auto;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  background-image: linear-gradient(to right, #8b33c5, #15a0e1); 
  transition: opacity 0.4s;
}
button.submit:hover{
    opacity: 0.9s;
} */

</style>