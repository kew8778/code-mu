<script>
  export default {
    name: 'App',

    data() {
      return {
        task1: {
          num: '',
          sqrt: '',
        },

        task2: {
          num1: '',
          num2: '',
          sum: '',
        },

        err: 'invalid number',

        task3: {
          text1: '',
          text2: '',
        },

        task4: {
          fullName: '',
          fio: [],
        },        
      };
    },

    methods: {
      getSquareNum: function() {
        if (this.task1.num * 1 == this.task1.num) {
          this.task1.sqrt = this.task1.num ** 2;
        } else {
          this.task1.sqrt = this.err;
        }       
      },

      getSumNums: function() {
        if (this.task2.num1 * 1 == this.task2.num1 && this.task2.num2 * 1 == this.task2.num2) {
          this.task2.sum = +this.task2.num1 + +this.task2.num2;
        } else {
          this.task2.sum = this.err;
        }
      },

      reverseText: function() {
        this.task3.text2 = this.task3.text1.split('').reverse().join('');
      },

      showFio: function() {
        this.task4.fio = this.task4.fullName.split(' ');
      },
    },
  }
</script>

<template>
  <input v-model="task1.num" placeholder="number">
  <button @click="getSquareNum">get the square of a number</button>
  <p>{{ task1.sqrt }}</p>

  <input v-model="task2.num1" placeholder="number1">
  <input v-model="task2.num2" placeholder="number2">
  <button @click="getSumNums">get the sum of the numbers</button>
  <p>{{ task2.sum }}</p>

  <input v-model="task3.text1" placeholder="text">
  <input v-model="task3.text2" disabled>
  <button @click="reverseText">reverse text</button>

  <input v-model="task4.fullName" placeholder="full name">
  <button @click="showFio">show fio</button>
  <p v-for="name in task4.fio">{{ name }}</p>
</template>

<style></style>
