<template>
  <section class="banner">
    <section class="banner__title">
      <h1 class="main-title">{{ bannerTitle }}</h1>
      <h2 class="title">{{ bannerSubtitle }}</h2>
    </section>
    <section class="banner__call-to-action">
      <router-link class="btn btn--color-primary btn--size-xg" :to="buttonRoute">{{
        buttonTitle
      }}</router-link>
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
    }

    h2 {
      color: $subtitle-font-color;
    }
  }

  &__call-to-action {
    display: flex;
    justify-content: center;
  }
}
</style>
