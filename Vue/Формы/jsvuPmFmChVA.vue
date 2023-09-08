<script>
  export default {
    name: 'App',

    data() {
      return {
        languages: ['HTML', 'CSS', 'JS', 'PHP'],
        languagesChecked: [],
      };
    },

    methods: {},
  }
</script>

<template>
  <p>what programming languages do you know ?</p>

  <label v-for="language in languages">
    <input type="checkbox" v-model="languagesChecked" :value="language">{{ language }}
  </label>

  <ul>
    <li v-for="language in languagesChecked">{{ language }}</li>
  </ul>
</template>

<style></style>
