<template>
<header>
<nav>
  <div class="logo">
   <img src="../../../../public/images/logo.png" alt="Logo" class="midas-logo"> 
  </div>
  <div class="menu">
    <router-link to="/" class="link-item">Home</router-link>
    <router-link to="/about" class="link-item">About</router-link>
    <router-link to="/services" class="link-item">Services</router-link>
    <!-- <router-link to="/" class="link-item">Contact</router-link> -->
    <router-link to="/login" target="_blank" class="nav-button">Login</router-link>
    
  </div>
</nav>
</header>
</template>

<script> 
export default {
     methods: {
        
    },
    }


</script>

<style>
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
</style>