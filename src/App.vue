<template>
  <header>
    <HeaderComponents />
  </header>
  <main>
     <SelectComponent @searchChange="getCards"/>
     <MainComponent />
  </main>
</template>

<script>
import { cards } from './data/store';
import axios from 'axios';
import HeaderComponents from './components/HeaderComponents.vue';
import SelectComponent from './components/SelectComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponents,
    SelectComponent,
    MainComponent

  },
    data () {
    

    return {
      cards
    }
  },
  methods: {
    getCards() {
      const url = cards.baseUrl + cards.endPoint;
      let options = {}
      let params = {}
      for (let key in cards.search) {
        if (cards.search[key]) {
          params[key] = cards.search[key]
        }
      }
   
      if (Object.keys(params).length > 0) {
        options.params = params;
      }
      axios.get(url, options).then((res) => {
        cards.cardsList = res.data.data;
        
      })
    }
  },
  mounted(){
    cards.endPoint = '?num=50&offset=0';
    this.getCards();
  }
}

</script>
 

<style lang="scss" scoped>

</style>