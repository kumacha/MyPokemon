/* eslint-disable no-console */
<template>
  <v-container>
    <v-row justify="center">
      <v-form v-model="valid" @submit.prevent
        ><v-text-field
          v-model="keyword"
          label="Pokemon Name"
          @keydown.enter="toSearch()"
        ></v-text-field>
      </v-form>
      <v-btn :to="{ name: 'keyword', query: { name: keyword } }">検索</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      keyword: '',
    }
  },

  methods: {
    toSearch() {
      this.$router.push({ name: 'keyword', query: { name: this.keyword } })
    },
  },
}
</script>
