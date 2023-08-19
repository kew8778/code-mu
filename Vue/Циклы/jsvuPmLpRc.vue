<script>
  export default {
    name: 'App',

    data() {
      return {
        arr: ['elem1', 'elem2', 'elem3'],
        init: 3,
      };
    },

    methods: {
      add: function() {
        this.arr.push(
          'elem' + (this.init + 1)
        );

        this.init++;
      },

      removeFirstElem: function() {
        this.arr.shift();
      },

      removeLastElem: function() {
        this.arr.pop();
      },

      removeSecondToLastElem: function() {
        this.arr.splice(-2, 1);
      },

      sort: function() {
        this.arr.sort();
      },

      reverse: function() {
        this.arr.reverse();
      },
    },
  }
</script>

<template>
  <ul>
    <li v-for="elem in arr">{{ elem }}</li>
  </ul>

  <button @click="add">add</button>
  <button @click="removeFirstElem">remove first item</button>
  <button @click="removeLastElem">remove last item</button>
  <button @click="removeSecondToLastElem">remove second to last item</button>
  <button @click="sort">sort</button>
  <button @click="reverse">reverse</button>
</template>
