<template>
  <div id="app">
    <div class="container-fluid first-page">
      <a class="link" @click="getJSONData">Обработать данные</a>
    </div>
    <component :is="PageTemplate"></component>
  </div>
</template>

<script>
//import Button from './components/Button.vue'
import SimplePage from './templates/SimplePage.vue'

export default {
  name: 'App',

  data() {
    return {
      PageTemplate: "",
    }
  },

  methods: {
    parseData(json) {
      // изменяем заголовок таблицы
      document.title = json.PageTitle;

      // получаем стиль шаблона страницы
      this.PageTemplate = json.PageTemplate;

      // сохраняем h1 в state Vuex
      this.$store.commit('updateH1Content',json.H1Content);

      // получаем массив ключей полей
      let colKeys = Object.entries(json.ColsOrder);

      // производим сортировку массива по значению 
      colKeys.sort((prev, next) => {        
          if (prev[1] < next[1] ) return -1;
          if (prev[1] < next[1] ) return 1;
      });

      let colTitles = json.ColsTitles;
      let colTypes = json.ColsTypes;
      let colOrders = json.ColsOrder;
      let colShow = json.ColsShow;      

      // проходим по всем ключам и формирует структурированный массив объектов колонок
      let cols = colKeys.map(id=>({
                                    id: id[0],
                                    title: colTitles[id[0]], 
                                    type: colTypes[id[0]],
                                    order: colOrders[id[0]],
                                    show: colShow[id[0]],
                                  }));

      this.$store.commit('updateCols',cols);

      // сохраняем данные
      this.$store.commit('updateData',json.Data);
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
    SimplePage,
  },


}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100%;
  
}

#app {
  height: 100%;
  width: 100%;
}

.first-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  a.link {
    cursor: pointer;
    color: #FFFFFF;
  }

  a.link:hover {
    color: #ffc107;
  }
}
</style>