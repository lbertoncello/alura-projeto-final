<template>
  <div class="card">
    <img :src="img" class="img card__img" />
    <div class="card__text card__text--type-title">{{ title }}</div>
    <div class="card__text card__text--type-subtitle">{{ subtitle }}</div>
    <div class="card__text card__text--type-description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgba(var(--white), 1);
  border-radius: 0.6rem;
  color: rgba(var(--black), 1);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.1rem 0.6rem;

  &__img {
    border-radius: 50%;
    margin: 1rem 0.5rem;
  }

  &__text {
    margin: 0.35rem;
    text-align: center;

    &--type {
      &-title {
        font-weight: 500;
      }

      &-subtitle {
        font-weight: bold;
      }

      &-description {
      }
    }
  }
}
</style>
