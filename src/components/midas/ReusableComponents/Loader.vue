<template>
  <div v-show="$store.state.SchemesProduct.schemes.length == 0">
  <img src="./../../../../public/images/spinners/Dual.gif">
  
  <p class="msg__color">{{msg}}</p>
  
</div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            required:true
        },
        // list:{
        //     type:Object,
        //     required:true
        // }
    }

}
</script>

<style scoped>
.msg__color{
color:black;
font-size: 14px
}
</style>