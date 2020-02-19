<template>
  <section class="banner">
    <section class="banner__title">
      <h1>{{ bannerTitle }}</h1>
      <h2>{{ bannerSubtitle }}</h2>
    </section>
    <section class="banner__call-to-action">
      <!-- <myButton
        :title="buttonTitle"
        :route="buttonRoute"
        :backgroundColor="buttonBackgroundColor"
        :titleColor="buttonTitleColor"
      ></myButton> -->
      <router-link class="btn btn--color-primary" :to="buttonRoute">TESTE</router-link>
    </section>
  </section>
</template>

<script>
export default {
  props: {
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
$title-font-color: #ffffff;
$subtitle-font-color: #85ff9a;

.banner {
  &__title {
    margin: 1.5rem 0;
    text-transform: uppercase;

    h1 {
      color: $title-font-color;
      font-size: 3rem;
    }

    h2 {
      color: $subtitle-font-color;
      font-size: 2rem;
    }
  }

  &__call-to-action {
    display: flex;
    justify-content: center;
  }
}
</style>
