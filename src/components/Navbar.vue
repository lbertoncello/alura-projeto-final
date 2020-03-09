<template>
  <nav class="navbar">
    <ul class="navbar__menu">
      <li class="navbar__menu__item" v-for="(anchor, index) in anchors" :key="index">
        <!-- <a :href="'#' + anchor.id">{{ anchor.title }}</a> -->
        <a class="navbar__menu__item__link" :href="anchor.id ? anchor.id : '#'">{{
          anchor.title
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    anchors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$font-color: #ffffff;
$background-color: #ffffff;
$background-hover-color: #48a3a6;

.navbar {
  align-items: center;
  display: flex;
  justify-content: center;
}

.navbar__menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  &__item {
    display: flex;
    text-transform: uppercase;

    &__link {
      color: $font-color;
      background-color: rgba($background-color, 0.1);
      border-radius: 8px;
      font-size: 1.2rem;
      margin: 0.3rem;
      padding: 0.8rem 1rem;
      text-decoration: none;
      transition: background-color 0.3s;
    }

    &__link:hover {
      background-color: rgba($background-hover-color, 1);
    }
  }
}
</style>
