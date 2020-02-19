<template>
  <button :style="style" class="button">
    <router-link class="button__link" :to="route">{{ title }}</router-link>
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
    titleColor: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      style: {
        '--font-color': this.titleColor || '#000000',
        '--background-color': this.backgroundColor || '#ffffff',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: var(--background-color);
  border-radius: 8px;
  border-width: 0;
  color: var(--font-color);
  display: flex;
  font-size: 1.35rem;
  text-transform: uppercase;

  &__link {
    color: inherit;
    padding: 1rem 1rem;
    text-decoration: none;
  }
}

.button:hover {
  background-color: var(--font-color);
  color: var(--background-color);
}
</style>
