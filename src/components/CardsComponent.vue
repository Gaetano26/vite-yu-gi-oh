<template>

        <div class="col p-0">
            <div class="text-center cont-img">
                 <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
                <h4 class="mt-3">{{ card.name }}</h4>
                <p class="mt-3 fs-5">{{ card.archetype }}</p>
            </div>
           

        </div>
</template>

<script>

    export default {
        name: 'CardsComponent',
        props: ['card']
    }
</script>

<style lang="scss" scoped>
  .cont-img {
    background-color: orange;
    min-height: 460px;
  }
  h4 {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
  }


</style>