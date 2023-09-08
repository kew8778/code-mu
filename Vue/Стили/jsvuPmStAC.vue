<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['elem1', 'elem2', 'elem3'],
        cssClasses: 'italic red',
      };
    },

    methods: {},
  }
</script>

<template>
  <p :class="cssClasses" v-for="elem of arr">{{ elem }}</p>
</template>

<style>
  .italic {
    font-style: italic;
  }

  .red {
    color: red;
  }
</style>
