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
  <p>{{ visibles.visible1 ? 'hide' : 'show' }}</p>
  <p>{{ visibles.visible2 ? 'hide' : 'show' }}</p>
  <p>{{ visibles.visible3 ? 'hide' : 'show' }}</p>

  <button @click="toggle('visible1')">toggle #1</button>
  <button @click="toggle('visible2')">toggle #2</button>
  <button @click="toggle('visible3')">toggle #3</button>
</template>
