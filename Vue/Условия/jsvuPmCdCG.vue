<script>
  export default {
    name: 'App',

    data() {
      return {
        hidden: false,
      };
    },

    methods: {
      toggle: function() {
        this.hidden = !this.hidden;
      },
    },
  }
</script>

<template>
  <template v-if="!hidden">
    <p>paragraph #1</p>
    <p>paragraph #2</p>
    <p>paragraph #3</p>
  </template>

  <button @click="toggle">hide or show</button>
</template>
