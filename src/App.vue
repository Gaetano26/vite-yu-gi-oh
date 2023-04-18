<template>
  <header>
    <HeaderComponents />
  </header>
  <main>
     <SelectComponent @search-change="getCards"/>
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
      let url = cards.baseUrl + cards.endPoint;
      /*if (cards.search.archetype != ''){
        let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=' + cards.search.archetype;
         console.log(cards.search)
      }*/
      let params = {}
      for (let key in cards.search) {
        if (cards.search[key]) {
          params[key] = cards.search[key]
        }
      }
      if (cards.search.archetype != ''){
        url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?'
         console.log(url)
      }
      axios.get(url, {params}).then((res) => {
        cards.cardsList = res.data.data;
         
      });

    },
    
  },
  mounted(){
    cards.endPoint = '?num=50&offset=0';
    this.getCards();
  }
}

</script>
 

<style lang="scss" scoped>

</style>