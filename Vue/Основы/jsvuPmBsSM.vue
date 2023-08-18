<script>
  export default {
    name: 'App',

    data() {
	    return {
		    arrNamesDays: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      }
    },

    methods: {
      showNameCurrentDay: function() {
        let currentData = new Date();

        alert(
          this.arrNamesDays[
            this.getNumDay(currentData.getDate(), currentData.getMonth(), currentData.getFullYear())
          ]
        );
      },

      getNumDay: function(data, month, year) {
        return new Date(year, month, data).getDay();
      },
    },
  }
</script>

<template>
  {{ showNameCurrentDay() }}
</template>
