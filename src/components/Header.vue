<template>
  <header class="header">
    <navbar :routes="routes"></navbar>
    <banner
      :bannerTitle="bannerTitle"
      :bannerSubtitle="bannerSubtitle"
      :buttonTitle="buttonTitle"
      :buttonRoute="buttonRoute"
      :buttonBackgroundColor="buttonBackgroundColor"
      :buttonTitleColor="buttonTitleColor"
    ></banner>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';

export default {
  components: {
    navbar: Navbar,
    banner: Banner,
  },

  props: {
    routes: {
      type: Array,
      required: true,
    },
    bannerTitle: {
      type: String,
      required: true,
    },
    bannerSubtitle: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
    buttonRoute: {
      type: String,
      required: true,
    },
    buttonBackgroundColor: {
      type: String,
      required: false,
    },
    buttonTitleColor: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  justify-content: space-between;
  background: url('~@/assets/img/destaque.jpeg') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  width: 100%;
}
</style>
