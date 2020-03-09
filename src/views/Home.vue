<template>
  <div id="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <customHeader
      :anchors="anchors"
      :bannerTitle="bannerTitle"
      :bannerSubtitle="bannerSubtitle"
      :buttonTitle="buttonTitle"
      :buttonRoute="buttonRoute"
    ></customHeader>
    <sobre></sobre>
    <palestrantes></palestrantes>
    <formInscricao></formInscricao>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sobre from '@/components/Sobre.vue';
import Palestrantes from '@/components/Palestrantes.vue';
import FormInscricao from '@/components/FormInscricao.vue';

export default {
  components: {
    customHeader: Header,
    sobre: Sobre,
    palestrantes: Palestrantes,
    formInscricao: FormInscricao,
  },

  data() {
    return {
      anchors: [
        {
          id: '#sobre',
          title: 'Sobre',
        },
        {
          id: '#palestrantes',
          title: 'Palestrantes',
        },
        {
          id: '#inscricao',
          title: 'Inscricao',
        },
      ],
      bannerTitle: 'Aluraconf',
      bannerSubtitle: '30 de Maio | Rio',
      buttonTitle: 'Inscreva-se',
      buttonRoute: '/',
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
