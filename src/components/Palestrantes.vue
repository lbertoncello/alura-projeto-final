<template>
  <section class="palestrantes" id="palestrantes">
    <div class="container">
      <h3 class="subtitle">Palestrantes</h3>
      <h4 class="h4">Aprenda com palestrantes que são referência no mundo</h4>
      <div class="cards">
        <div class="palestrante" v-for="(palestrante, index) in palestrantes" :key="index">
          <card
            :img="palestrante.img"
            :title="palestrante.name"
            :subtitle="palestrante.cargo"
            :description="palestrante.descricao"
          ></card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    card: Card,
  },

  data() {
    return {
      palestrantes: [
        {
          img: '/img/palestrantes/placeholder.jpeg',
          name: 'Flávio Almeida',
          cargo: 'Desenvolvedor e instrutor da Caelum',
          descricao: 'Adicionar',
        },
        {
          img: '/img/palestrantes/placeholder.jpeg',
          name: 'Flávio Almeida',
          cargo: 'Desenvolvedor e instrutor da Caelum',
          descricao: 'Adicionar',
        },
        {
          img: '/img/palestrantes/placeholder.jpeg',
          name: 'Flávio Almeida',
          cargo: 'Desenvolvedor e instrutor da Caelum',
          descricao: 'Adicionar',
        },
        {
          img: '/img/palestrantes/placeholder.jpeg',
          name: 'Flávio Almeida',
          cargo: 'Desenvolvedor e instrutor da Caelum',
          descricao: 'Adicionar',
        },
        {
          img: '/img/palestrantes/placeholder.jpeg',
          name: 'Flávio Almeida',
          cargo: 'Desenvolvedor e instrutor da Caelum',
          descricao: 'Adicionar',
        },
        {
          img: '/img/palestrantes/placeholder.jpeg',
          name: 'Flávio Almeida',
          cargo: 'Desenvolvedor e instrutor da Caelum',
          descricao: 'Adicionar',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.palestrantes {
  background-color: orange;
  color: rgba(var(--white), 1);
  display: flex;
  flex-wrap: wrap;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
}
</style>
