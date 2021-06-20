/* eslint-disable no-console */
<template>
  <div>
    <SearchPlace />
    <PokemonArray />
  </div>
</template>

<script>
import PokemonArray from '~/components/PokemonArray.vue'
import SearchPlace from '~/components/SearchPlace.vue'
export default {
  components: {
    PokemonArray,
    SearchPlace,
  },
}
</script>
