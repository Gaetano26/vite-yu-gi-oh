import { reactive } from 'vue';

export const cards = reactive({
    cardsList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/V7/cardinfo.php',
    endPoint: '',
    search: {
        archetype: '',
    }
})