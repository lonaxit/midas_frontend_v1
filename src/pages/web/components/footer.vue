<template>
<div class="py-4 px-4 mx-0 mt-8 lg:mx-8" id="contact">
            <div class="grid justify-content-between">
                <div class="col-12 md:col-2" style="margin-top:-1.5rem;">
                    <div class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3">
                        <div class="logo">
                        <img src="../../../../public/images/logo.png" alt="Logo" class="midas-logo"> 
                        </div>
                        <!-- <img :src="'layout/images/logo-' + logoColor + '.svg'" alt="footer sections" width="50" height="50" class="mr-2"> -->
                        <!-- <h4 class="font-medium text-3xl text-900">MIDAS</h4> -->
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
        </div>
</template>

<script> 
export default {
     methods: {
        
    },
    }


</script>

<style>

</style>