<script>
  export default {
    name: 'App',

    data() {
	    return {
        visible: false,
      }
    },

    methods: {
      show: function() {
        this.visible = true;
      },

      hide: function() {
        this.visible = false;
      }
    },
  }
</script>

<template>
  <p v-if="visible">Hidden paragraph !!!</p>
  <button v-if="!visible" @click="show">show</button>
  <button v-if="visible" @click="hide">hide</button>
</template>
