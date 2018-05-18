<template>
  <div>
    <!-- <v-btn flat to="/flow">
      <v-icon left>date_range</v-icon>
      <span>Event Calendar</span>
    </v-btn> -->
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/flow">Flow</router-link>
    <router-link to="/data">Data</router-link>
    <router-link to="/member">Member</router-link> -->
    <a href="" @click.prevent="logout">Logout</a>
    <a href="" @click.prevent="fullscreen">Fullscreen</a>
    <!-- <router-link to="/AT">測試</router-link> -->

  </div>
</template>
<script>
  export default {
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
<style>
/* html:-moz-full-screen {
background: red;
}

html:-webkit-full-screen {
background: red;
}

html:fullscreen {
background: red;
} */

</style>
