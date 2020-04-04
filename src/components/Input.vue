<template>
    <input :name="name" :type="type" :value="value" :class="getInputClass" :placeholder="placeholder">
</template>
<script>
export default {
    name: "Input",

    props: {
        name: String,
        type: String,
        value: String,
        inputClass: String,
        placeholder: String,
    },

    computed: {
        getInputClass() {
            return "form-control " + this.inputClass;
        },
    },
}
</script>
<style lang="scss">

</style>