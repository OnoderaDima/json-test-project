<template>
    <input type="button" :class="getClassName" :value="text">
</template>
<script>
export default {
    name: "Button",

    props: {
        btnClass: String,
        text: String,
    },

    computed: {
        getClassName(){
            return ("btn btn-"+this.btnClass);
        },
    },
}
</script>
<style lang="scss">

</style>