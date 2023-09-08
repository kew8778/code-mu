<script>
  export default {
    name: 'App',

    data() {
      return {
        message: '',
        num: '',
      };
    },

    methods: {},
  }
</script>

<template>
  <input v-model="message" placeholder="text">
  <p>{{ message.toUpperCase() }}</p>

  <input v-model="num" placeholder="number">
  <p v-if="num != 0">{{ num ** 2 }}</p>
</template>

<style></style>
