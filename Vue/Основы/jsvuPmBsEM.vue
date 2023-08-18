<script>
  export default {
    name: 'App',

    data() {
	    return {
        url: 'http://code.mu/ru/javascript/framework/vue/book/prime/basis/events-modifiers/',
      }
    },

    methods: {
      show: function() {
        alert('клик');
      }
    },
  }
</script>

<template>
  <a @click.prevent :href="url">ссылка без перехода</a>
  <button @click.once="show">2-ой клик не сработает</button>
</template>
