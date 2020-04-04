<template>

<div class="grid container-fluid">
    <div class="container-fluid panel">
        <Button text="Сохранить" btnClass="warning"/>
        <Button @click="confirmChanges" text="Применить изменения" btnClass="secondary"/>
    </div>
    <table class="table table-inverse">
        <thead>
            <tr>
                <th v-for="col in cols" :data-type="col.type" v-show="col.show" :key="col.id">{{col.title}}</th>
                <th>Редактировать</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, index) in cache" @dblclick="edit(index)" :key="index">
                <td v-for="col in cols" v-show="col.show" :data-type="col.type" :key="col.id">
                    <span v-if="!isEdit(index)">{{value[col.id]}}</span>
                    <Input :name="col.id+'_'+index" v-if="isEdit(index)" :type="convertInputTypes(col.type)" :value="value[col.id]"/>
                </td>
                <td><Button @click="edit(index)" :btnClass="getEditBtnClass(index)" icon="pencil-square"/></td>
            </tr>
        </tbody>
        <tfoot>
            
        </tfoot>
    </table>
</div>
</template>
<script>
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

export default {
    name: "grid",

    data() {
        return {
            cache: [],
        }
    },

    props: {
        cols: Array,
        data: Array,
    },

    components: {
        Button,
        Input,
    },

    mounted() {
        // копируем данные во временный кэш
        this.cache = this.data;  
    },

    methods: {
        async confirmChanges() {
            let response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.data)
            });

            let result = await response.json();
            alert(result.message);
        },

        saveAll() {
            
        },

        convertInputTypes(type) {
            switch(type) {
                case "NUM":
                    return "number";
                case "STR":
                    return "string";   
                case "DATE":
                    return "date";  
                default:
                    return "string";                                    
            }
        },

        getEditBtnClass(index) {
            return this.isEdit(index)?"warning":"success";
        },

        isEdit(index) {
            return (("edit" in this.cache[index])?this.cache[index].edit:false);
        },

        edit(index){ 
            if ("edit" in this.cache[index]) {             
                this.cache[index].edit = !this.cache[index].edit;
            }
            else {
                this.$set(this.cache[index], "edit", true);
            }
        },
    },
}
</script>
<style lang="scss">

</style>