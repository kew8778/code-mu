<script>
  export default {
    name: 'App',

    data() {
      return {
        isShown: false,
      };
    },

    methods: {
      toggle: function() {
        this.isShown = !this.isShown;
      },
    },
  }
</script>

<template>
  <p v-show="isShown">paragraph</p>
  <button @click="toggle">hide or show</button>
</template>
