<script>
  export default {
    name: 'App',

    data() {
      return {
        items: [1, 2, 3],
      };
    },

    methods: {},
  }
</script>

<template>
  <div v-for="item in items">
    <p>{{ item }}</p>
    <p class="divider"></p>
  </div>

  <ul>
    <template v-for="item in items">
      <li>{{ item }}</li>
	    <li class="divider"></li>
    </template>
  </ul>
</template>
