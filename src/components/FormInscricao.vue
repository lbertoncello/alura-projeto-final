<template>
  <section class="inscricao">
    <div class="container">
      <h3 class="subtitle">Seus dados</h3>

      <form class="inscricao__form" action="">
        <div class="inscricao__form__form-group">
          <label class="inscricao__form__form-group__label" for="nome">Nome</label>
          <input class="inscricao__form__form-group__input" name="nome" type="text" />
        </div>
        <div class="inscricao__form__form-group">
          <label class="inscricao__form__form-group__label" for="email">Email</label>
          <input class="inscricao__form__form-group__input" name="email" type="email" />
        </div>
        <a class="btn btn--color-primary">Realizar inscrição</a>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inscricao {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  &__form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    & > * {
      margin: 0.4rem;
    }

    &__form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &__label {
        margin-bottom: 0.2rem;
      }

      &__input {
        width: 100%;
      }
    }
  }
}
</style>
