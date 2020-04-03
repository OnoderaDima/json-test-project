<template>

<div class="container-fluid">
    <div class="container-fluid">
        <Button @click="hello" text="Применить изменения" btnClass="secondary"/>
    </div>
    <table class="table table-inverse">
        <thead>
            <tr>
                <th v-for="col in cols" :data-type="col.type" v-show="col.show" :key="col.id">{{col.title}}</th>
                <th>Редактировать</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, index) in data" :key="index">
                <td v-for="col in cols" v-show="col.show" :data-type="col.type" :key="col.id">
                    {{value[col.id]}}
                    {{("edit" in data[index])?data[index].edit:false}}
                    <input v-if="isEdit(index)">
                </td>
                <td><Button @click="edit(index)" btnClass="success" icon="pencil-square"/></td>
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

        isEdit(index) {
            return (("edit" in this.data[index])?this.data[index].edit:false);
        },

        edit(index){ 
            if ("edit" in this.data[index]) {             
                this.data[index].edit = !this.data[index].edit;
            }
            else {
                this.$set(this.data[index], "edit", true);
            }
        },
    },
}
</script>
<style lang="scss">

</style>