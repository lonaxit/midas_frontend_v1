<template>
  <!-- <div> -->
         <!-- <div class="w-6 md:w-2 flex justify-content-space-evenly"> -->

            <slot name="deleteText">
                <span class="text-red-500 mr-5 delete_button"><i class="pi pi-trash" @click="deleteItem(item.id)"></i></span>
            </slot>
                	
        <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
    name:"DeleteItem",
    props:{
        item:{
            type:Object,
            required:true
        }
    },

    methods: {
        deleteItem(id){
            this.$emit('deleteRecord',id)
        }
    }

}
</script>

<style scoped>
.delete_button{
    cursor: pointer;
}
</style>