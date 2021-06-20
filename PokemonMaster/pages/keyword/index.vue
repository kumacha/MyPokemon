<template>
  <div><SearchPlace /> <FilteredArray /></div>
</template>

<script>
import SearchPlace from '~/components/SearchPlace.vue'
import FilteredArray from '~/components/FilteredArray.vue'
export default {
  components: {
    FilteredArray,
    SearchPlace,
  },
}
</script>
