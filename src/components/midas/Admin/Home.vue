<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Welcome to MIDAS TOUCH</h5>
        <!-- <p>Use this page to start from scratch and place your custom content.</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/AppEventBus";
import axios from "axios";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setStaff", "setNormal", "setEmployee", "setUsername"]),
    ...mapActions(["Me"]),
  },
  computed: {
    ...mapState(["normal", "staff", "employee"]),
    ...mapGetters([
      "user_Detail",
      "getStaff",
      "getNormal",
      "getEmployee",
      "getUsername",
      "getAuthentication",
    ]),
  },

  mounted() {},
  beforeUnmount() {},
  created() {
    this.Me().then(() => {
      this.setStaff(this.user_Detail.is_staff);
      this.setEmployee(this.user_Detail.is_employee);
      this.setNormal(this.user_Detail.is_normal);
      this.setUsername(this.user_Detail.username);
    });
    //get user profile
    // axios.get('auth/me/')
    // .then(res =>{
    // 	console.log(res)
    // if (res.data.user.is_employee || res.data.user.is_account || res.data.user.is_normal) {
    // this.myRole = true

    // localStorage.setItem('myStatus', this.myRole)
    // this.$store.commit('setStatus', this.myRole)
    // this.$store.commit('setUsername',res.data.user.username)
    // } else {
    // this.myRole = false
    // localStorage.setItem('myStatus',this.myRole)
    // this.$store.commit('setStatus', this.myRole)
    // this.$store.commit('setUsername',res.data.user.username)
    // }

    // })
    // .catch(err =>{
    //                 console.log(err)
    //             })
  },
};
</script>
