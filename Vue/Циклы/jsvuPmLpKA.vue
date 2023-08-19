<script>
  export default {
    name: 'App',

    data() {
      return {
        products: [
          {
            id: 1,
            name: 'product1',
          },
          {
            id: 2,
            name: 'product2',
          },
          {
            id: 3,
            name: 'product3',
          },
        ],
      };
    },

    methods: {},
  }
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product.name }}</li>
  </ul>
</template>
