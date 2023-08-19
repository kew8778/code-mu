<script>
  export default {
    name: 'App',

    data() {
      return {
        items: [1, -2, 3, -4, 5],
      };
    },

    methods: {},
  }
</script>

<template>
  <template v-for="item in items">
    <p v-if="item > 0">{{ item }}</p>
  </template>
</template>
