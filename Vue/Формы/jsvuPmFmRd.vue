<script>
  export default {
    name: 'App',

    data() {
      return {
        languages: {
          'русский': 'Добро пожаловать',
          'украинский': 'Ласкаво просимо',
          'белорусский': 'Сардэчна запрашаем',
        },

        languageChecked: [],
      };
    },

    methods: {},
  }
</script>

<template> 
  <p>what is your native language ?</p>

  <label v-for="(text, language) in languages">
    <input type="radio" v-model="languageChecked" :value="language">{{ language }}
  </label>

  <template v-for="(text, language) in languages">
    <p v-if="languageChecked === language">{{ text + '!!!' }}</p>
  </template>
</template>

<style></style>
