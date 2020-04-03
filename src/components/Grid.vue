<template>

<div class="container-fluid">
    <div class="container-fluid">
        <Button :click="hello" text="Применить изменения" btnClass="secondary"/>
    </div>
    <table class="table table-inverse">
        <thead>
            <tr>
                <th v-for="col in cols" :data-type="col.type" v-show="col.show" :key="col.id">{{col.title}}</th>
                <th>Редактировать</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, name, index) in data" :key="index">
                <td v-for="col in cols" v-show="col.show" :data-type="col.type" :key="col.id">{{value[col.id]}}</td>
                <td><Button text="edit" btnClass="primary" icon="pencil"/></td>
            </tr>
        </tbody>
        <tfoot>
            
        </tfoot>
    </table>
</div>
</template>
<script>
import Button from '@/components/Button.vue';

export default {
    name: "grid",

    data() {
        return {

        }
    },

    props: {
        cols: Array,
        data: Array,
    },

    components: {
        Button,
    },

    methods: {
        hello() {
            alert('Привет из грида!')
        },

        
    },
}
</script>
<style lang="scss">

</style>