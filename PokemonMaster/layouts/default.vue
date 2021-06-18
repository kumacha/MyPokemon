<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="fulltitle" @click="GoHome()">{{
        title
      }}</v-toolbar-title>
      <v-spacer />

      <v-btn class="favo" style="color: #ff0080" outlined
        >手持ちのポケモン</v-btn
      >
      <v-btn class="cart" style="color: #2d8c3c" outlined>カート</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'ALL',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'BAG',
          to: '/bag',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'CAP',
          to: '/cap',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'GLASS',
          to: '/glass',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'SHIRT',
          to: '/shirt',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'SHOES',
          to: '/shoes',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'JACKET',
          to: '/jacket',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'JEANS',
          to: '/jeans',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Pokedex',
    }
  },
  methods: {
    GoHome() {
      this.$router.push('/')
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Neuton:wght@300&family=Old+Standard+TT:ital@0;1&family=Quattrocento:wght@700&display=swap');
element.style {
  padding: 0px !important;
}
.fulltitle {
  font-family: 'Bree Serif', serif;
  font-family: 'Neuton', serif;
  font-family: 'Old Standard TT', serif;
  font-family: 'Quattrocento', serif;
}
.favo {
  margin-right: 10px;
}
@media screen and (max-width: 979px) {
  .favo {
    display: none;
  }
  .cart {
    display: none;
  }
}
.v-card {
  min-width: 130px;
}
</style>
