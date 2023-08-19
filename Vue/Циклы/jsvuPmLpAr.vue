<script>
  export default {
    name: 'App',

    data() {
      return {
        items: [1, 2, 3, 4, 5],
      };
    },

    methods: {},
  }
</script>

<template>
  <div v-for="item in items">{{ item }}</div>

  <ul>
    <li v-for="item in items">{{ item ** 2 }}</li>
  </ul>
</template>
