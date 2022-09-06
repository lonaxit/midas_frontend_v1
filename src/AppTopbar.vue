<template>
	<div class="layout-topbar">
		<router-link to="/home" class="layout-topbar-logo">
			<img alt="Logo" :src="topbarImage()" />
			<span>MIDAS TOUCH</span>
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', 
			leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true}">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			
			<li>
				
				<span class="p-input-icon-left p-input-icon-right">
							<i class="pi pi-user" />
							<InputText type="text" placeholder="Search" />
							<i class="pi pi-search" />
				</span>
			</li>
			
			<li v-if="isLoggedIn">
				
				<button class="p-link layout-topbar-button" @click="logout">
					<i class="pi pi-power-off" ></i>
					<!-- <span>Events</span> -->
				</button>
			</li>
			
		
			<!-- <li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-cog"></i>
					<span>Settings</span>
				</button>
			</li> -->
			<li>
				<button class="p-link layout-topbar-button">
					<!-- <i class="pi pi-user"></i> -->
					{{$store.state.auth.username}}
					<!-- <span>Profile</span> -->
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			
		}
	},
	
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		topbarImage() {
			return this.$appState.darkTheme ? 'images/logo2.png' : 'images/logo.png';
		},
		logout(){
			axios.defaults.headers.common['Authorization']=""

			localStorage.removeItem('token')
			localStorage.removeItem('myStatus')
			localStorage.removeItem('username')
			this.$store.commit('removeToken')
			this.$store.commit('removeStatus')
			this.$store.commit('removeUsername')
			this.$router.push('/login')
		},
	
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		},
		isLoggedIn (){
			return this.$store.state.auth.user.isAuthenticated
		},
		
	}
}
</script>