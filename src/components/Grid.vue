<template>
<div class="container">
    <table class="table">
        <thead>
            <tr>
                <th v-for="col in cols" :data-type="col.type" :key="col.id">{{col.title}}</th>
            </tr>
        </thead>
    </table>
</div>
</template>
<script>
export default {
    name: "grid",

    props: {
        cols: Array,
        data: Array,
    },
}
</script>
<style lang="scss">

</style>