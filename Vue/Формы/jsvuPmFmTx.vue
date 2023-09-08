<script>
  export default {
    name: 'App',

    data() {
      return {
        text: '',
        words: [],
      };
    },

    methods: {
      showList: function() {
        this.words = this.text.split(' ');
      },
    },
  }
</script>

<template>
  <textarea v-model="text" cols="50" rows="10"></textarea><br>
  <p>{{ text }}</p><br>

  <button @click="showList ">show a list of words</button><br>
  <ul>
    <li v-for="word in words">{{ word }}</li>
  </ul>
</template>

<style></style>
