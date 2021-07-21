<template>
  <div>
    <SearchPlace />
    <SearchType />
  </div>
</template>

<script>
import SearchPlace from '../components/SearchPlace.vue'
import SearchType from '../components/SearchType.vue'
export default {
  components: {
    SearchPlace,
    SearchType,
  },
}
</script>
