<template>

<Header></Header>
<!--  -->
    <div class="surface-0 overflow-hidden">
    

        <div class="grid py-4 px-4 lg:px-8 relative" id="hero">
            <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                <h1 class="text-6xl font-bold text-gray-900 line-height-2"><span class="font-light block"> MIDAS Touch Multi-Purpose Cooperative </span>Products and Services</h1>
                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700"> Your Trusted Partner for Growth and Prosperity</p>
                <p class="font-normal text-2xl line-height-3 md:mt-3 text-black-700">
                    Unlock your world of possibilities
                </p>
                <!-- <Button label="Get Started" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3"></Button> -->
               <LoginButton/>
            </div>
            <img src="layout/images/add-product.png" class="bottom-0" alt="hero screen" style="right:10%; top:10%">
        </div>


         <!-- llll -->
             <div class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
               
                <div class="col-12 text-center mt-8 mb-4">
                    <h2 class="text-900 font-normal mb-2">Our Core Servicess</h2>
                    <span class="text-600 text-2xl">Unmatched Financial Expertise and Personalized Solutions</span>
                </div>
            <div class="grid justify-content-center">
                <div class="col-12 md:col-12 lg:col-4 p-5 lg-4 mt-4 lg:mt-0">
                     <div class="flex align-items-center justify-content-center  mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <!-- <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i> -->
                                <img src="layout/images/pay.png" alt="" style="width:3.5rem;height:3.5rem">
                            </div>
                     <h5 class="mb-2 text-900 ">Loans</h5>
                            <span class="text-600 text-2xl">Our financial institution offers a variety of loan options to help you achieve your goals. Whether you're looking to purchase a home, start a business, or cover unexpected expenses, we have a loan product to meet your needs. Our loan options come with competitive interest rates and flexible repayment terms to make borrowing affordable and accessible. Our loan experts are available to guide you through the application process and help you choose the best loan product for your needs</span>
                </div>
                 <div class="col-12 md:col-12 lg:col-4 p-5 lg-4 mt-4 lg:mt-0">
                     <div class="flex align-items-center justify-content-center  mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                                <!-- <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i> -->
                                <img src="layout/images/wallet.png" alt="" style="width:3.5rem;height:3.5rem">
                            </div>
                       <h5 class="mb-2 text-900">Savings</h5>
                            <span class="text-600 text-2xl">Saving is an important part of achieving financial stability and security. Our financial institution offers a range of savings products to help you build your nest egg. Our savings accounts come with competitive interest rates, making it easy to grow your savings over time. We also offer specialized savings products such as retirement accounts, education savings accounts, and health savings accounts to help you achieve your long-term financial goals. With our online banking platform, you can easily manage your savings accounts and track your progress towards your financial goals</span>
                </div>
                 <div class=" text-center col-12 md:col-12 lg:col-4 p-5 lg-4 mt-4 lg:mt-0">
                     <div class="flex align-items-center justify-content-center  mb-3" style="width:3.5rem;height:3.5rem; border-radius:10px;">
                           
                                <img src="layout/images/basket.png" alt="" style="width:3.5rem;height:3.5rem">
                            </div>
                      <h5 class="mb-2 text-900">Welfare Schemes</h5>
                            <span class="text-600 text-2xl">As a socially responsible financial institution, we offer welfare schemes to support the welfare of our customers and communities. Our welfare schemes are designed to provide assistance to those in need, including low-interest loans for education and healthcare, and community outreach programs to support local charities and initiatives. Our team is dedicated to helping those in need, and we strive to make a positive impact in our community through our welfare schemes. We believe that by supporting our customers and communities, we can help create a brighter future for all.</span>
                </div>
            </div>
            <div class="text-center mt-5">
                <router-link to="/" class="call-button">Home</router-link>
                </div>
            </div>
            <hr>
        <!-- ooooo -->
        
       

    

       

        <!-- footer below -->
        <Footer/>
    </div>
</template>

<script>
import Header from './components/menu.vue'
import Footer from './components/footer.vue'
import LoginButton from './components/callToLogin.vue'
export default {
    methods: {
     
    },
    computed: {
      
},
components:{
Header,
Footer,
LoginButton
}
}
</script>

<style scoped>
#hero {
    background: linear-gradient(135deg, #FFC107, #FF9800);
    height: 800px;
    overflow: hidden;
}
/* #hero{
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
    height:700px;
    overflow:hidden;
} */

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