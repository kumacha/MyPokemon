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
            <v-list-item-title @click="GoHome()" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="fulltitle">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn to="/favorite" class="favo-btn" icon @click.prevent>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn to="/party" class="cart-btn" icon @click.prevent
        ><v-icon>mdi-briefcase-outline</v-icon></v-btn
      >
      <v-btn to="/favorite" class="favo" style="color: #ff0080" outlined
        >お気に入りのポケモン</v-btn
      >
      <v-btn to="/party" class="cart" style="color: #2d8c3c" outlined
        >手持ちのポケモン</v-btn
      >
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
          title: 'ポケモン図鑑',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ポケモンを探す',
          to: '/search',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'タイプで探す',
          to: '/type',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'test',
          to: '/test',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ログイン',
          to: '/login',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ログアウト',
          to: '/logout',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ポケモン図鑑',
    }
  },
  methods: {
    signOut() {
      this.$store
        .dispatch('signOut')
        .then(() => {
          this.$router.push({
            name: 'login',
          })
        })
        .catch((err) => {
          alert(err.message)
        })
    },
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
@media screen and (min-width: 979px) {
  .favo-btn {
    display: none;
  }
  .cart-btn {
    display: none;
  }
}
.v-card {
  min-width: 130px;
}
#app {
  margin-left: auto;
  margin-left: auto;
}
</style>
