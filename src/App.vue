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
import { store } from './data/store';
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
      store
    }
  },
  methods: {
      getCards() {
      const url = store.baseUrl;
      axios.get(url).then((res) => {
        console.log(this.res)
      })
    }
  },
}

</script>
 

<style lang="scss" scoped>

</style>