:<template>

        <div class="col  text-center">
            <img :src="card.card_images[0].image_url" :alt="card.name">
            <h4>{{ card.name }}</h4>
            <p>{{ card.archetype }}</p>

        </div>
</template>

<script>
    export default {
        name: 'CardsComponent',
        props: ['card']
    }
</script>

<style lang="scss" scoped>

</style>