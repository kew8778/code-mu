<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['elem1', 'elem2', 'elem3'],
        obj: {
          hidden: true,
        },
      };
    },

    methods: {
      show: function() {
        this.obj.hidden = false;
      },

      hide: function() {
        this.obj.hidden = true;
      },

      toggle: function() {
        this.obj.hidden = !this.obj.hidden;
      },
    },
  }
</script>

<template>
  <template v-for="(elem, key) of arr">
    <p v-if="(key + 1) % 2 === 0" :class="obj">{{ elem }}</p>
    <p v-else>{{ elem }}</p>
  </template>

  <button @click="show">show second paragraph</button>
  <button @click="hide">hide second paragraph</button>
  <button @click="toggle">toggle second paragraph</button>
</template>

<style>
  p.hidden {
    display: none;
  }
</style>
