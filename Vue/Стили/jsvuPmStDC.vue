<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['elem1', 'elem2', 'elem3'],
        isValid: true,
        isDisabled: true,
      };
    },

    methods: {},
  }
</script>

<template>
  <template v-for="(elem, key) of arr">
    <p v-if="(key + 1) % 2 === 0" :class="{hidden: isDisabled,}">{{ elem }}</p>
    <p v-else :class="{red: isValid}">{{ elem }}</p>
  </template>
</template>

<style>
  p.hidden {
    display: none;
  }

  p.red {
    color: red;
  }
</style>
