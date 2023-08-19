<script>
  export default {
    name: 'App',

    data() {
      return {
        hrefs: [
          {href: '1.html', text: 'text1'},
          {href: '2.html', text: 'text2'},
          {href: '3.html', text: 'text3'},
        ],

        products: [
          {
            name: 'product1',
            price: 100,
            quantity: 5
          },
          {
            name: 'product2',
            price: 200,
            quantity: 4
          },
          {
            name: 'product3',
            price: 300,
            quantity: 3
          },
        ],
      };
    },

    methods: {},
  }
</script>

<template>
  <ul>
    <li v-for="href in hrefs">
      <a :href="href.href">{{ href.text }}</a>
    </li>
  </ul>

  <table>
    <tr v-for="product in products">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.quantity }}</td>
    </tr>
  </table>
</template>
