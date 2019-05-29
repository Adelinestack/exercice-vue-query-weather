<template>
  <div class="hello">
    <h1>Weather in Paris for 5 days</h1>
    <div>
      <ul>
        <li v-for="({dt_txt, weather}, id) in parisWeather" :key="id">
          <p>{{dt_txt}}</p>
          <p>{{weather[0].description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getWeather } from "../services/apiCalls";

export default {
  name: "Weather",
  data: () => ({
    parisWeather: {}
  }),
  methods: {
    async fetchWeather() {
      const weather = await getWeather();
      this.parisWeather = weather;
    }
  },

  mounted() {
    this.fetchWeather();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
