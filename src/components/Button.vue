<template>
    <button @click="click" :class="getClassName"><i v-if="icon" :class="getIcon"></i>{{text}}</button>
</template>
<script>
export default {
    name: "Button",

    props: {
        btnClass: String,
        text: String,
        icon: String,
        click: Function,
    },

    computed: {
        getClassName(){
            return ("btn btn-"+this.btnClass);
        },

        getIcon(){
            return ("glyphicon glyphicon-"+this.icon);
        },
    },
}
</script>
<style lang="scss">

</style>