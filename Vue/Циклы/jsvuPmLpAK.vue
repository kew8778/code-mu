<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['x', 'y', 'z'],
      };
    },

    methods: {},
  }
</script>

<template>
  <ul>
    <li v-for="(elem, key) in arr">{{ key }}</li>
  </ul>
</template>
