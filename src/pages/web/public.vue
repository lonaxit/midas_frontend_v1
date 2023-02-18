<template>

<Header></Header>


    <div class="surface-0 overflow-hidden">
    

        <div class="grid py-4 px-4 lg:px-8 relative" id="hero">
            <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                <h1 class="text-6xl font-bold text-gray-900 line-height-2"><span class="font-light block"> MIDAS Touch Multi-Purpose Cooperative </span>Unlock Your Financial Freedom...   </h1>
                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Your Trusted Partner for Growth and Prosperity</p>
                <p class="font-normal text-2xl line-height-3 md:mt-3 text-black-700">
                    Unlock your world of possibilities
                </p>
                <!-- <Button label="Get Started" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3"></Button> -->
                <LogButton/>
            </div>
            <img src="layout/images/data-science.png" class="bottom-0" alt="hero screen" style="right:10%; top:10%">
        </div>


         <!-- llll -->
             <div class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
               
                <div class="col-12 text-center mt-8 mb-4">
                    <h2 class="text-900 font-normal mb-2">Our Core Servicess</h2>
                    <span class="text-600 text-2xl">Unmatched Financial Expertise and Personalized Solutions</span>
                </div>
            <div class="grid justify-content-center">
                <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                     <div class="flex align-items-center justify-content-center  mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <!-- <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i> -->
                                <img src="layout/images/pay.png" alt="" style="width:3.5rem;height:3.5rem">
                            </div>
                     <h5 class="mb-2 text-900">Loans</h5>
                            <!-- <span class="text-600">Someone peeping? No worries you are safe</span> -->
                </div>
                 <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                     <div class="flex align-items-center justify-content-center  mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <!-- <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i> -->
                                <img src="layout/images/wallet.png" alt="" style="width:3.5rem;height:3.5rem" >
                            </div>
                       <h5 class="mb-2 text-900">Savings</h5>
                            <!-- <span class="text-600">Someone peeping? No worries you are safe</span> -->
                </div>
                 <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                     <div class="flex align-items-center justify-content-center  mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                           
                                <img src="layout/images/basket.png" alt="" style="width:3.5rem;height:3.5rem">
                            </div>
                      <h5 class="mb-2 text-900">Welfare Schemes</h5>
                            <!-- <span class="text-600">Someone peeping? No worries you are safe</span> -->
                </div>
            </div>
            <div class="text-center mt-5">
                <router-link to="/" class="call-button">View More</router-link>
                </div>
            </div>
        <!-- ooooo -->
        
        <div class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8" id="features">
            <div class="grid justify-content-center">
                <div class="col-12 text-center mt-8 mb-4">
                    <h2 class="text-900 font-normal mb-2">Key Features</h2>
                    <!-- <span class="text-600 text-2xl">Unmatched Financial Expertise and Personalized Solutions</span> -->
                </div>

                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                         
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                              
                                <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                            </div>
                              <!-- <img src="layout/images/smartphone.png" class="bottom-0" alt="" style="height:30px;"> -->
                            <h5 class="mb-2 text-900">Competitive Interest Rates</h5>
                            <span class="text-600">Enjoy high interest rates on your deposits and loans, making your money work harder for you.</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-cyan-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Mobile Banking</h5>
                            <span class="text-600">Stay connected to your finances on-the-go with our user-friendly apps.</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-indigo-200" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Personalized Financial Solutions</h5>
                            <span class="text-600">Financial solutions tailored to your unique needs.</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-bluegray-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">24/7 Customer Support</h5>
                            <span class="text-600">Our staff support team is available around the clock to address any concerns you may have</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-orange-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-star text-2xl text-orange-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Competitive Loan Products</h5>
                            <span class="text-600">Whatever your needs are, we offer competitive options to help you achieve your goals</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-pink-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Security and Fraud Protection</h5>
                            <span class="text-600">Rest easy knowing your accounts records are secure and protected.</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-teal-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Credit Score Monitoring</h5>
                            <span class="text-600">Keep track of your credit score and maintain a healthy credit profile</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-blue-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Easy Account Opening</h5>
                            <span class="text-600">Become a member with a few clicks</span>
                        </div>
                    </div>
                </div>
        
                <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                    <div style="height:160px; padding:2px; border-radius:10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2));">
                        <div class="p-3 surface-card h-full" style="border-radius:8px;">
                            <div class="flex align-items-center justify-content-center bg-purple-200 mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                            </div>
                            <h5 class="mb-2 text-900">Privacy</h5>
                            <span class="text-600">Someone peeping? No worries you are safe</span>
                        </div>
                    </div>
                </div>

               
            </div>
            
        </div>

       
            
        <div class="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8" id="highlight">
            <div class="text-center">
                <h2 class="text-900 font-normal mb-2">Powerful Everywhere</h2>
                <!-- <span class="text-600 text-2xl">Amet consectetur adipiscing elit.</span> -->
                   <!-- <div><router-link to="/" class="nav-button">Login</router-link></div> -->
            </div>

            <div class="grid mt-8 pb-2 md:pb-8">
                <div class="flex justify-content-center col-12 lg:col-6  p-0 flex-order-1 lg:flex-order-0" style="border-radius:8px;">
                    <img src="layout/images/smartphone1.png" class="w-11" alt="mockup mobile">
                </div>

                <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end lg:text-right align-items-center text-center ">
                    <!-- <div class="flex align-items-center justify-content-center bg-purple-200" style="width:4.2rem; height:4.2rem; border-radius: 10px;">
                        <i class="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                    </div> -->
                    <h2 class="line-height-1 text-900 text-4xl font-normal">Crafted For Productivity</h2>
                    <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width:650px;">Productivity is a key factor in achieving financial success. At MIDAS, we understand that managing your finances can be time-consuming and stressful. That's why we've designed a range of features and services to help you increase your productivity and simplify your financial management.</span>
                    <p>
                        <span class="text-700 text-2xl line-height-3 ml-0 md:ml-2" style="max-width:650px;">
                            Our online platform provides you with easy access to your account information, empowering you to manage your finances from anywhere, at any time. You can view your account balances, apply for loans and download your statements with just a few clicks, giving you the power to take control of your financial situation.
                        </span>
                    </p>
                </div>
            </div>

            <div class="grid my-8 pt-2 md:pt-8">
                <div class="col-12 lg:col-6 my-auto flex flex-column lg:align-items-start align-items-center">
                    <!-- <div class="flex align-items-center justify-content-center bg-yellow-200" style="width:4.2rem; height:4.2rem; border-radius:10px;">
                        <i class="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                    </div> -->
                    <h2 class="line-height-1 text-900 text-4xl font-normal">Enhanced Collaboration</h2>
                    <span class="text-700 text-2xl line-height-3 mr-0 md:mr-2" style="max-width:650px;">We also offer personalized financial solutions that can help you achieve your unique financial goals. Our team of financial advisors works with you to develop a customized plan that takes into account your individual needs and preferences, so you can feel confident in your financial decisions.</span>
                </div>

                <div class="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6  p-0" style="border-radius:8px;">
                    <img src="layout/images/computer1.png" class="w-11 pt-4" alt="mockup">
                </div>
            </div>
        </div>

       

        <!-- footer below -->
        <Footer/>
    </div>
</template>

<script>
import Header from './components/menu.vue'
import Footer from './components/footer.vue'
import LogButton from './components/callToLogin.vue'
export default {
    methods: {
     
    },
    computed: {
      
},
components:{
Header,
Footer,
LogButton
}
}
</script>

<style>
#hero{
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
    height:700px;
    overflow:hidden;
}

@media screen and (min-width: 768px) {
    #hero{
        -webkit-clip-path: ellipse(150% 87% at 93% 13%);
        clip-path: ellipse(150% 87% at 93% 13%);
        height: 530px;
    }
}

@media screen and (min-width: 1300px){
    #hero > img {
        position: absolute;
    }

    #hero > div > p { 
        max-width: 450px;
    }
}

@media screen and (max-width: 1300px){
    #hero {
        height: 600px;
    }

    #hero > img {
        position:static;
        transform: scale(1);
        margin-left: auto;
    }

    #hero > div {
        width: 100%;
    }

    #hero > div > p {
        width: 100%;
        max-width: 100%;
    }
}

/* lllll */
/* .top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #f8f8f8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 60px;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu li {
  margin: 0 10px;
}

.menu li a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.2s ease;
}

.menu li a:hover {
  color: #ff6600;
} */


/* second one */
header{
  background:#fff;
}
nav {
max-width: 1120px;
margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  padding: 15px;
}
.logo {
  margin-right: auto;
}
.menu {
  display: flex;
  justify-content: flex-end;
}
.link-item{
  margin-left: 20px;
}
.midas-logo {
    height: 50px;
}
a {
    
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

/* For Buttons */
.nav-button{
  background:#fff;
  color: #1aac83;
  border: 2px solid #1aac83;
  padding: 6px 10px;
  border-radius:4px;
  
  cursor: pointer;
  font-size: 1em;
  margin-left: 20px;
}

.call-button{
  background:#fff;
  color: white;
  background: #1aac83;
  /* border: 2px solid #1aac83; */
  padding: 15px;
  border-radius:4px;

  cursor: pointer;
  font-size: 15;

  max-width: 90px
}

</style>