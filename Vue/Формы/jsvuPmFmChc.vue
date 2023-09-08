<script>
  export default {
    name: 'App',

    data() {
      return {
        checked: false,
      };
    },

    methods: {},
  }
</script>

<template>
  <input type="checkbox" v-model="checked">
  <p v-if="checked === true">Paragraph</p>
</template>

<style></style>
