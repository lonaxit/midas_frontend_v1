<template>

<div v-if={isLoading}>


    <div class="mb-3 user-profile">
    <div class="user-panel">
    
      <h1 class="username"> {{fullName}}</h1>
      <!-- <span>
        <router-link :to="{name:'new-profile',params:{user_id:profile_Detail.user.id}}">
        <span class="text-cyan-500 mr-4"><i class="pi pi-user-edit"></i></span>
        </router-link>
        </span> -->
      
     
      <div class="follower_count">
        <strong>MIDAS NUMBER {{profile_Detail.user.id}}</strong>
        
      </div>
    </div>
  </div>


<div class="mb-3 user-profile">
<div class="user-panel">

   
<div class="grid">
   
<div class="col-12 lg:col-6 xl:col-4">
	<div class="user-profile-item">
    <h5>Full Name</h5>
    <p>{{fullName}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Sex</h5>
    <p>{{profile_Detail.gender}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Date of Birth</h5>
    <p>{{profile_Detail.user.dob}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Marital Status</h5>
    <p>{{ profile_Detail.marital_status}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Telephone</h5>
    <p>{{ profile_Detail.phone}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Home Address</h5>
    <p>{{ profile_Detail.home_address }}</p>
   </div>
</div>


		<div class="col-12 lg:col-6 xl:col-4">
			<div class="user-profile-item">
    <h5>Date of First Appointment</h5>
    <p>{{ profile_Detail.user.dofa }}</p>
   </div>

    <div class="user-profile-item">
    <h5>Home Address</h5>
    <p>{{ profile_Detail.home_address }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Email</h5>
    <p>{{ profile_Detail.email }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Ippis Number</h5>
    <p>{{ profile_Detail.user.ippis_number }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Employment Type</h5>
    <p>{{ profile_Detail.employment_type }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Job Cadre</h5>
    <p>{{ profile_Detail.job_cadre }}</p>
   </div>

</div>



		<div class="col-12 lg:col-6 xl:col-4">
			<div class="user-profile-item">
    <h5>Next of Kin Full Name</h5>
    <p>{{ profile_Detail.nok_fullname }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Next of Kin Relationshp</h5>
    <p>{{ profile_Detail.nok_relationship }}</p>
   </div>

   <div class="user-profile-item">
    <h5>Next of Kin Telephone</h5>
    <p>{{ profile_Detail.nok_phone }}</p>
   </div>
   
   <div class="user-profile-item">
    <h5>Bank</h5>
    <p>{{ profile_Detail.bank }}</p>
   </div>


   <div class="user-profile-item">
    <h5>Account Number</h5>
    <p>{{ profile_Detail.bank_account }}</p>
   </div> 
</div>
    
</div>
   
</div>
</div>





 <div class="mb-3 user-profile">
    <div class="user-panel">
      <h1 class="username">Account Info</h1>

      <span>
         <router-link :to="{name:'change-pass'}">
        <span class="text-cyan-500"></span> Edit Account Settings <i class="pi pi-key"></i>
        </router-link>
        </span>
    </div>
  </div>

<div class="mb-3 user-profile">
<div class="user-panel">

   
<div class="grid">
   
<div class="col-12">
	<div class="user-profile-item">
    <h5>Username</h5>
    <p>{{profile_Detail.user.username}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Date Joined</h5>
    <p>{{dateJoined}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Member Since</h5>
    <p>{{memberSince}}</p>
   </div>

   <div class="user-profile-item">
    <h5>Password</h5>
    <p>xxxxxxxxxxx</p>
   </div>


</div>

</div>
   
</div>
</div>



<!-- <div class="grid">
    <div class="col-12 lg:col-4 xl:col-4 profile-picture__wrapper">
      <img class="image" src="https://picsum.photos/200/300" alt="Random Profile Image">
      <h6 class="title">Me</h6>
      <p class="sub-title">{{fullName}}</p>
      <p class="sub-title" > <span  class="sub-head">DOB:</span> 555-555-5555</p>
      <p class="sub-title"><span  class="sub-head">Joined:</span> 123 Main St, Anytown USA</p>
    </div>

    <div class="col-12 lg:col-8 xl:col-8  profile-details">
      <h3>Profile Detail</h3>
      <p><span class="sub-head">Email:</span> john.doe@example.com</p>
      <p> <span class="sub-head">Phone:</span> 555-555-5555</p>
      <p><span  class="sub-head">Address:</span> 123 Main St, Anytown USA</p>
    </div>
</div> -->

</div>
<div v-else>
    Please wait loading data .....
</div>

</template>

<script>
  import { mapGetters,mapActions} from 'vuex'
  import { formatDistance, format,sub,parseISO  } from 'date-fns';

export default {
  
  data(){
    return{
        isLoading:false,
        dateNow: new Date()
    }
  },
  methods:{
    ...mapActions(['Me','getUserDetail'])
  },

  computed:{
    ...mapGetters(['fullName','user_Detail','profile_Detail']),

    memberSince:function (){
      const today = this.dateNow
      const pastDate = parseISO(this.profile_Detail.user.date_joined) 
      return formatDistance(pastDate,today,{ includeSeconds: true,addSuffix:true })
   
    },

    dateJoined: function (){
      const date = parseISO(this.profile_Detail.user.date_joined) 
      return format(date, 'MMMM dd, yyyy')
    }

  },
   created(){
      this.Me().then(()=>{
        this.getUserDetail(this.profile_Detail.user.id).then(()=>{
             this.isLoading = true  
        })
      })
      
    },

}
</script>

<style>






/* below not in use */
.container {
  width: 80%;
  margin: 0 auto;
}

.profile-picture {
  text-align: center;
}

.profile-picture img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

/* above from CHATGPT */
.profile-picture__wrapper{
    text-align: center;
}
.profile-details{
    text-align: center;
}

.bio-data{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #dfdfdf;
    margin-right:20px;
}
.box-1{
    text-align: center;
}
.image{
    margin-bottom:7px;
    margin-top:-25px;
    width: 100px;
    height: 100px;
    text-align:center;
    border-radius:50%;
}
.background-container{
    width: 100%;
    height:70px;
    background-color:cornflowerblue;
}

.profile-info{
    display: block;
    border: 2px solid #e60e739d;
}
.title{
    font-size:18px;
    font-weight:bold;
    margin-top: 3px;
    margin-bottom: 3px;
    /* color:black; */
    
}
.sub-title{
    font-size:14px;
    font-weight:500;
    margin-bottom: 5px;

    /* color:black; */
}
.sub-head{
    font-size:15px;
    font-weight:600;
}


/* Media Queries */
/* Extra small devices (phones, 600px and down) */
@media (min-width: 480px) {
/* contet here */
}
/* Small devices (portrait tablets and large phones, 600px and up) */
/* @media (min-width: 600px) {...} */
/* Medium devices (landscape tablets, 768px and up) */
/* @media (min-width: 768px) {...} */
/* Large devices (laptops/desktops, 992px and up) */
/* @media (min-width: 992px) {...} */
/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media (min-width: 1200px) {...} */



    /* 320px—480px: Mobile devices */
    /* 481px—768px: iPads, Tablets */
    /* 769px—1024px: Small screens, laptops */
    /* 1025px—1200px: Desktops, large screens */
    /* 1201px and more—Extra large screens, TV */
     

</style>