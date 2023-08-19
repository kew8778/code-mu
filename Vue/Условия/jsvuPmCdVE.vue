<script>
  export default {
    name: 'App',

    data() {
      return {
        isAdmin: true,
      };
    },

    methods: {},
  }
</script>

<template>
  <p v-if="isAdmin">text1</p>
  <p v-else>text2</p>
</template>
