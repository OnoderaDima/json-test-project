<template>
  <div id="app">
    <div class="container-fluid first-page">
      <a @click="getJSONData">Обработать данные</a>
    </div>
    <div class="container-fluid">
      <h1 v-if="gridData.H1Content">{{gridData.H1Content}}</h1>
    </div>
    <div class="container-fluid">
      <Grid :cols="cols"/>
    </div>
  </div>
</template>

<script>
//import Button from './components/Button.vue'
import Grid from './components/Grid.vue'

export default {
  name: 'App',

  data() {
    return {
      gridData: {},
      cols: [],
    }
  },

  methods: {
    parseData() {
      // изменяем заголовок таблицы
      document.title = this.gridData.PageTitle;

      // получаем массив ключей полей
      let colKeys = Object.keys(this.gridData.ColsTitles);
      let colTitles = this.gridData.ColsTitles;
      let colTypes = this.gridData.ColsTypes;

      // проходим по всем ключам 
      this.cols = colKeys.map((i,index)=>({id: index, title: colTitles[i], type: colTypes[i]}));

      console.log(this.cols);
    },

    async getJSONData() {
      let response = await fetch('https://raw.githubusercontent.com/OnoderaDima/json-test-project/master/example.json');

      if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();

        // сохраняем дату из полученного json-файла
        this.gridData = json;

        // вызываем метод обработки полученных данных
        this.parseData();

      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    },
  },  
  
  components: {
    Grid,
   // Button,
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.first-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
