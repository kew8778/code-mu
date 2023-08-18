<script>
  export default {
    name: 'App',

    data() {
	    return {}
    },

    methods: {
      showSquareNum: function(num) {
        alert(num ** 2);
      },
    },
  }
</script>

<template>
  <button @click="showSquareNum(2)">Квадрат двух</button><br>
  <button @click="showSquareNum(3)">Квадрат трех</button>
</template>
