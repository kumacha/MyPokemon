<template>
  <v-container>
    <v-row>
      <v-col v-for="type in types" :key="type.id">
        <v-btn :to="{ name: 'types-id', params: { id: type.name } }">{{
          type.name
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      types: [
        { id: 1, name: 'ノーマル' },
        { id: 2, name: 'かくとう' },
        { id: 3, name: 'ひこう' },
        { id: 4, name: 'どく' },
        { id: 5, name: 'じめん' },
        { id: 6, name: 'いわ' },
        { id: 7, name: 'むし' },
        { id: 8, name: 'ゴースト' },
        { id: 9, name: 'はがね' },
        { id: 10, name: 'ほのお' },
        { id: 11, name: 'みず' },
        { id: 12, name: 'くさ' },
        { id: 13, name: 'でんき' },
        { id: 14, name: 'エスパー' },
        { id: 15, name: 'こおり' },
        { id: 16, name: 'ドラゴン' },
        { id: 17, name: 'あく' },
        { id: 18, name: 'フェアリー' },
      ],
    }
  },
}
</script>
