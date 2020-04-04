<template>

<div class="grid container-fluid">
    <div class="container-fluid panel">
        <Button @click="saveAll" text="Сохранить" btnClass="warning" :disabled="editCache.size?false:true"/>
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
            <tr v-for="(value, index) in data" :key="index">
                <td v-for="col in cols" v-show="col.show" :data-type="col.type" :key="col.id">
                    <span v-if="!isEdit(index)">{{value[col.id]}}</span>
                    <Input :name="col.id+'_'+index" v-if="isEdit(index)" :type="convertInputTypes(col.type)" v-model="editCache.get(index)[col.id]"/>
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
            editIndexes: [],
            editCache: new Map(),
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

    methods: {
        async confirmChanges() {
            alert('В процессе разработки');
            /*
            let response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.data)
            });

            let result = await response.json();
            alert(result.message);
            */
        },

        saveAll() { 
            alert('В процессе разработки');
            /*
            for (let row of this.editCache.entries()) {
                this.editIndexes.pop();
                
                this.data[row[0]] = Object.assign(row[1]);
            }

            this.editCache.clear(); */
        },

        convertInputTypes(type) {
            switch(type) {
                case "NUM":
                    return "number";
                case "STR":
                    return "string";   
                case "DATE":
                    return "date";  
                case "DTIME":
                    return "datetime";                      
                default:
                    return "string";                                    
            }
        },

        getEditBtnClass(index) {
            return this.isEdit(index)?"warning":"success";
        },

        isEdit(index) {
            return (this.editIndexes.indexOf(index)+1)?true:false;
        },

        setEditRowToCache(index) {
            let dataRow = Object.assign(this.data[index]);

            this.editIndexes.push(index);
            this.editCache.set(index, dataRow);
        },

        removeEditRowFromCache(index) {
            this.editIndexes.splice(this.editIndexes.indexOf(index),1);
            this.editCache.delete(index);
        },

        edit(index){ 
            if (this.editCache.has(index)) {     
                this.removeEditRowFromCache(index);
            }
            else {
                this.setEditRowToCache(index);
            }
        },
    },
}
</script>
<style lang="scss">

</style>