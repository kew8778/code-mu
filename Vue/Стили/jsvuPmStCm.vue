<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['elem1', 'elem2', 'elem3'],
      };
    },

    methods: {},
  }
</script>

<template>
  <ul>
    <li v-for="elem in arr">{{ elem }}</li>
  </ul>
</template>

<style>
  ul {
    list-style-type: none;
  }

  li {
    color: brown;
  }
</style>
