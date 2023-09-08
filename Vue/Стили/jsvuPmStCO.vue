<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['elem1', 'elem2', 'elem3'],
        obj: {
          done: true,
          selected:  false,
        },
      };
    },

    methods: {},
  }
</script>

<template>
  <template v-for="(elem, key) of arr">
    <p v-if="(key + 1) % 2 === 0" :class="obj">{{ elem }}</p>
    <p v-else>{{ elem }}</p>
  </template>
</template>

<style>
  .done {
    color: blue;
  }

  .selected {
    color: red;
  }
</style>
