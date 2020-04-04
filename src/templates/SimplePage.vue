<template>
    <div class="page-template">
        <div class="container-fluid">
            <div class="container-fluid">
                <h1 v-if="h1Content">{{getH1Content()}}</h1>
            </div>
            <div class="container-fluid">
                <Grid :cols="getCols()" :data="getData()"/>
            </div>
        </div>
    </div>
</template>
<script>
import Grid from '@/components/Grid.vue';

export default {
    name: "SimplePageTemplate",

    props: {
      h1Content: String,
      cols: Array,
      data: Array,
    },

    methods: {
      getH1Content() {
          return this.$store.getters.getH1Content;
      },

      getCols() {
          return this.$store.getters.getCols;
      },
      
      getData() {
          return this.$store.getters.getData;
      },      
    },

    components: {
      Grid,
    },
}
</script>
<style lang="scss">
  body {
      background-color: #333333!important;
  }

  .grid {
      .panel {
          padding: 15px;
          background-color: #666666;

          button {
              margin: 10px;
          }
      }

      table.table {
          border: {
              width: 5px;
              color: #666666;
              style: solid;
          }

          thead {
              th {
                  background-color: #000000;
                  color: #FFFFFF;
                  border-width: 0!important;
                  text-align: center;
                  vertical-align: middle;

                  font: {
                      size: 14px;
                      weight: normal;
                      family: Arial;
                  }
              }
          }

          tbody {
              tr:nth-child(odd) {
                  td {
                    background-color: #666666;
                  }
              }

              tr:nth-child(even) {
                  td {
                    background-color: #555555;
                  }
              }

              tr:hover {
                  td {
                    background-color: #ffc107;
                  }
              }              

              td {                
                  color: #FFFFFF;
                  border-width: 0!important;
                  text-align: center;
                  vertical-align: middle;

                  font: {
                      size: 12px;
                      weight: normal;
                      family: Arial;
                  }  

                  transition: background-color .5s;
                  -webkit-transition: background-color .5s;
                  -moz-transition: background-color .5s;
                  -o-transition: background-color .5s;

                  input.form-control {
                      background-color: #555555;
                      color: #FFFFFF;

                      font: {
                        size: 12px;
                        weight: normal;
                        family: Arial;
                      }

                      border: 2px solid #999999;                      
                  }                
              }
          }
      }
  }
</style>