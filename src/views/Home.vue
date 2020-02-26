<template>
  <div id="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <about></about>
    <palestrantes></palestrantes>
    <router-view />
  </div>
</template>

<script>
import About from '@/components/About.vue';
import Palestrantes from '@/components/Palestrantes.vue';

export default {
  components: {
    about: About,
    palestrantes: Palestrantes,
  },

  data() {
    return {

    };
  },
};
</script>

<style lang="scss">

#app {
  background-color: var(--default-background);
  color: var(--default-text);
  // display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  scroll-behavior: smooth;
  // flex-wrap: wrap;
  // height: 100%;
  // justify-content: center;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
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
