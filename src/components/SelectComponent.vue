:<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <select class="form-select ms-1 my-3" v-model.trim="cards.search.archetype" @change="$emit('search-change')">
                    <option selected value="">all</option>
                    <option :value="status.archetype_name" v-for="(status,index) in archetypeOptions" :key="index">{{ status.archetype_name }}</option>
                </select>
            </div>
        </div>

    </div>
</template>

<script>
import { cards } from '../data/store';
import axios from 'axios';
    export default {
       name: 'SelectComponent',
       data(){
        return {
            cards,
            archetypeOptions: [

            ]
        }
       },
       methods: { 
        
       },
       mounted() {
        
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {
               this.archetypeOptions = res.data;
               console.log(this.archetypeOptions);
            })
       }
        
    }
</script>

<style lang="scss" scoped>
  select {
    max-width: 150px;
  }

</style>