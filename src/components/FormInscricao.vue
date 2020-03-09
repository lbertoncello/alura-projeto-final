<template>
  <section class="inscricao" id="inscricao">
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
        <a class="btn btn--color-primary btn--size-lg">Realizar inscrição</a>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.inscricao {
  display: flex;

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
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      width: 100%;

      &__label {
        font-weight: bold;
        margin-bottom: 0.4rem;
      }

      &__input {
        border-color: grey;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        box-sizing: border-box;
        padding: 0.4rem 0.5rem;
        width: 100%;

        &:focus {
          box-shadow: 1px 1px 10px #48a2a6;
          outline: none;
        }
      }
    }
  }
}
</style>
