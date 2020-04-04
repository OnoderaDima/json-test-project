<template>
    <button @click="$emit('click')" :class="getClassName" :disabled="disabled">
        <b-icon v-if="icon" :icon="icon"></b-icon>
        {{text}}
    </button>
</template>
<script>
export default {
    name: "Button",

    props: {
        btnClass: String,
        disabled: Boolean,
        text: String,
        icon: String,
        click: Function,
    },

    computed: {
        getClassName(){
            return ("btn btn-"+this.btnClass+' '+(this.disabled?"disabled":""));
        },

        getIcon(){
            return ("glyphicon glyphicon-"+this.icon);
        },
    },
}
</script>
<style lang="scss">

</style>