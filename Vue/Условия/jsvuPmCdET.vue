<script>
  export default {
    name: 'App',

    data() {
      return {
        visibles: {
          visible1: false,
          visible2: false,
          visible3: false,
        },
      }
    },

    methods: {
      toggle: function(visiblesKey) {
        this.visibles[visiblesKey] = !this.visibles[visiblesKey];
      },
    },
  }
</script>

<template>
  <p v-if="visibles.visible1">Paragraph #1</p>
  <p v-if="visibles.visible2">Paragraph #2</p>
  <p v-if="visibles.visible3">Paragraph #3</p>

  <button @click="toggle('visible1')">toggle #1</button>
  <button @click="toggle('visible2')">toggle #2</button>
  <button @click="toggle('visible3')">toggle #3</button>
</template>
