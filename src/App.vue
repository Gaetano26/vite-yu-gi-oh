<template>
  <header>
    <HeaderComponents />
  </header>
  <main>
     <SelectComponent />
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
      const url = cards.baseUrl;
      axios.get(url).then((res) => {
        cards.cardsList = res.data;
      })
    }
  },
  mounted(){
    this.getCards();
  }
}

</script>
 

<style lang="scss" scoped>

</style>