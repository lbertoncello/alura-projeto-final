<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <customHeader
      :routes="routes"
      :bannerTitle="bannerTitle"
      :bannerSubtitle="bannerSubtitle"
      :buttonTitle="buttonTitle"
      :buttonRoute="buttonRoute"
      :buttonBackgroundColor="buttonBackgroundColor"
      :buttonTitleColor="buttonTitleColor"
    ></customHeader>
    <router-view />
  </div>
</template>

<script>
import router from '@/router';
import Header from '@/components/Header.vue';

export default {
  components: {
    customHeader: Header,
  },

  data() {
    return {
      routes: router.options.routes.filter((route) => route.showOnMenu),
      bannerTitle: 'Aluraconf',
      bannerSubtitle: '30 de Maio | Rio',
      buttonTitle: 'Inscreva-se',
      buttonRoute: '/',
      buttonBackgroundColor: '#48a3a6',
      buttonTitleColor: '#ffffff',
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/buttons.scss';

#app {
  background-color: #cfcfcf;
  color: #2c3e50;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
