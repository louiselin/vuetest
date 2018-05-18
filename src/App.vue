<template>
  <div id="app">
    <!-- <router-view name="nav"></router-view>
    <router-view></router-view> -->
    <v-app>
    <v-navigation-drawer
      absolute
      class="hidden-sm-and-up"
      v-model="sideNav">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              <!-- <v-icon>done</v-icon> -->
              <router-link
                to="/"
                tag="span"
                style="cursor: pointer"
                >
                <img src="require('@/assets/logo.png')" />{{ appName }}
              </router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list>
        <v-btn to="/AT"><v-icon left>person</v-icon>营业额看版</v-btn>
        <v-btn @click.prevent="fullscreen"><v-icon left>fullscreen</v-icon>全荧幕</v-btn>
        <v-btn @click.prevent="logout"><v-icon left>chevron_right</v-icon>登出</v-btn>
      </v-list>
    </v-navigation-drawer>

    <!-- 大 螢幕 -->
    <v-toolbar class="grey darken-3 white--text">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <!-- <v-icon>shopping_basket</v-icon> -->
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
          >
          <img :src="require('@/assets/logo.png')" />{{ appName }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn class="grey darken-3 white--text" to="/AT"><v-icon left>person</v-icon>营业额看版</v-btn>
        <v-btn class="grey darken-3 white--text" @click.prevent="fullscreen"><v-icon left>fullscreen</v-icon>全荧幕</v-btn>
        <!-- <v-btn to="/userinfo"><v-icon left>person</v-icon>userinfo</v-btn> -->
        <v-btn class="grey darken-3 white--text" @click.prevent="logout"><v-icon left>chevron_right</v-icon>登出</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer class="xs12 pa-3 grey darken-3 white--text">
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false,
      appName: "vue w/ Echarts",
    }
  },
  methods: {
    logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
      },
    fullscreen() {
        var docElm = document.documentElement;
        //W3C
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        }

        //FireFox
        else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        }

        //Chrome等
        else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        }

        //IE11
        else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
  }
}
</script>

<style lang="scss">
@import './assets/css/app.scss';
</style>
