<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/commom.scss';
@import '@/assets/scss/buttons.scss';
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/text.scss';
@import '@/assets/scss/container.scss';
@import '@/assets/scss/img.scss';

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
