<script>
  export default {
    name: 'App',

    data() {
	    return {
        text: 'text #1',
      }
    },

    methods: {
      editText1: function() {
        this.text = 'text #2';
      },

      editText2: function() {
        this.text = 'text #1';
      },
    },
  }
</script>

<template>
  <p>{{ text }}</p>
  <button @click="editText1">изменить на "text #2"</button>
  <button @click="editText2">изменить на "text #1"></button>
</template>
