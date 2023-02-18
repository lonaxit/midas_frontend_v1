<template>

<Header></Header>



<!--  -->
    <div class="surface-0 overflow-hidden">
    

        <div class="grid py-4 px-4 lg:px-8 relative" id="hero">
            <div class="mx-4 md:mx-8 mt-0 md:mt-4">
                <h1 class="text-6xl font-bold text-gray-900 line-height-2"><span class="font-light block"> MIDAS Touch Multi-Purpose Cooperative </span>About Us</h1>
                <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Your Trusted Partner for Growth and Prosperity</p>
                <p class="font-normal text-2xl line-height-3 md:mt-3 text-black-700">
                    Unlock your world of possibilities
                </p>
       
                 <LogButton/>
            </div>
            <img src="layout/images/collaboration.png" class="bottom-0" alt="hero screen" style="right:10%; top:10%">
        </div>


         <!-- llll -->
             <div class="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
               
                <div class="col-12 text-center mt-8 mb-4">
                    <h2 class="text-900 font-normal mb-2">About MIDAS</h2>
                    <span class="text-600 text-2xl">This explains our journey so far...</span>
                </div>
            <div class="grid justify-content-center">
               
              
                 <div class="col-12 md:col-12 lg:col-12 p-0 lg-12 mt-4 lg:mt-0">
                   
                      
                            <p class="text-600  text-2xl">
                                The idea of a cooperative society called "MIDAS Touch" was conceived by Mr. Shimakaa Iorlumun in 2016. Mr. Iorlumun was a successful entrepreneur who had been involved in various business ventures over the years. He had noticed that many of his peers were struggling to access financial services and were often left with few options when it came to managing their finances.
                            </p>
                             <p class="text-700 text-2xl">
                              Mr. Iorlumun believed that a cooperative society could help address these challenges by providing members with access to financial solutions that were transparent and affordable. He shared his vision with a few close friends and colleagues, including Ternenge Torough and Sesugh Denen, who quickly jumped on board..
                            </p>
                            <p class="text-700 text-2xl">
                                Together, the pioneer management team worked tirelessly to bring the cooperative society to fruition. Ternenge Torough was appointed as the Financial Secretary, while Sesugh Denen took on the role of Secretary. They worked with Mr. Iorlumun to develop the objectives of the cooperative, which were to bring in transparency and improve on the financial solutions available to members.
                            </p>
                             <p class="text-700 text-2xl">
                                The cooperative was officially launched in late 2016, with Mr. Iorlumun serving as the President. The initial membership was small, but the founders were optimistic that they could attract more members by delivering on their promises of transparency and affordability.
                            </p>
                              <p class="text-700 text-2xl">
                                Over the years, MIDAS Touch grew steadily, with more and more members joining and contributing to the cooperative's success. The management team worked hard to ensure that members' needs were met, and they constantly sought feedback to improve the services offered by the cooperative.
                            </p>
                              <p class="text-700 text-2xl">
                                In 2019, MIDAS Touch celebrated its third anniversary, and the founders were proud of what they had achieved. The cooperative had helped many members access financial services that were previously out of reach, and it had brought transparency and fairness to the financial sector.
                            </p>
                            <p class="text-700 text-2xl">
                                Looking ahead, the founders of MIDAS Touch were optimistic about the future. They believed that the cooperative had the potential to continue growing and making a positive impact on the lives of its members. With a strong foundation built on transparency, affordability, and member satisfaction, MIDAS Touch was poised to become a leading cooperative society in the region.
                            </p>
                           
                </div>
            </div>
            <div class="text-center mt-5">
                <router-link to="/" class="call-button">Home</router-link>
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
Footer,LogButton
}
}
</script>

<style scoped>

#hero {
    background: linear-gradient(to bottom right, #FFB6C1, #ADD8E6, #90EE90);
    height: 500px;
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