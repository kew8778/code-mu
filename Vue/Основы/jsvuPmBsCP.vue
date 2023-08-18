<script>
  export default {
    name: 'App',

    data() {
	    return {
        cost: 200,
        amount: 5,
      }
    },

    computed: {
      price: function() {
        return this.cost * this.amount;
      },
    },

    methods: {
      increase: function() {
        this.amount++;
      },
    },
  }
</script>

<template>
  <p>Цена: {{ cost }}</p>
  <p>Количество: {{ amount }}</p>

  <p>Итого: {{ price }}</p>
  <button @click="increase">Увеличить кол-во на 1</button>
</template>
