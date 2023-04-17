:<template>
    <div class="container">
        <div class="row">
          <div class="col-12 px-5">
              <div class="bg-dark text-white mt-5 ps-3 py-3">Found 39 Cards</div>
          </div>
        </div>
        <div class="row row-cols-lg-5">
          <CardsComponent v-for="(card, index) in cards.cardsList" :key="index" :card="card"/>
        </div>

    </div>
</template>

<script>
  import { cards } from '../data/store';
  import CardsComponent from './CardsComponent.vue';
export default {
    name: 'MainComponent',
    components: {
       CardsComponent
    },
    data () {
        

        return {
            cards
        }
    }
}
</script>

<style lang="scss" scoped>
   .container {
    background-color: white;
   }

</style>