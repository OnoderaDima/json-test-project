<template>
  <div id="app">
    <div class="container-fluid first-page">
      <a @click="getJSONData">Обработать данные</a>
    </div>
    <div class="container-fluid">
      <h1 v-if="h1Content">{{h1Content}}</h1>
    </div>
    <div class="container-fluid">
      <Grid :cols="cols" :data="data"/>
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
      h1Content: "",
      cols: [],
      data: [],
    }
  },

  methods: {
    parseData(json) {
      // изменяем заголовок таблицы
      document.title = json.PageTitle;

      // сохраняем h1 
      this.h1Content = json.H1Content;

      // получаем массив ключей полей
      let colKeys = Object.keys(json.ColsTitles);
      let colTitles = json.ColsTitles;
      let colTypes = json.ColsTypes;
      let colOrders = json.ColsOrder;
      let colShow = json.ColsShow;      

      // проходим по всем ключам и сохраняем колонки в дату
      this.cols = colKeys.map(id=>({
                                    id, 
                                    title: colTitles[id], 
                                    type: colTypes[id],
                                    order: colOrders[id],
                                    show: colShow[id],
                              }));

      // сохраняем данные
      this.data = json.Data;
    },

    async getJSONData() {
      let response = await fetch('https://raw.githubusercontent.com/OnoderaDima/json-test-project/master/example.json');

      if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();

        // вызываем метод обработки полученных данных
        this.parseData(json);

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
