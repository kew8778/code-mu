<script>
  export default {
    name: 'App',

    data() {
      return {
        users: {
          user1: '100$',
          user2: '200$',
          user3: '300$',
        },
      };
    },

    methods: {},
  }
</script>

<template>
  <ul>
    <li v-for="user in users">{{ user }}</li>
  </ul>

  <ul>
    <li v-for="(user, key) in users">{{ key + ' - ' + user }}</li>
  </ul>

  <ul>
    <li v-for="(user, key, ind) in users">{{ key + ' - ' + user + ' - ' + ind }}</li>
  </ul>

  <ul>
    <li v-for="(user, key, ind) in users">{{ key + ' - ' + user + ' - ' + (ind + 1) }}</li>
  </ul>
</template>
