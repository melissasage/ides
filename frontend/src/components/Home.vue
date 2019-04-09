<template>
  <div>
    <p>Hello world! I'm in Vue.js.</p>
    <p>Here's a random number: {{ randomNumber }}</p>
    <button @click="getRandomFromBackend">New number?</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      randomNumber: 0
    };
  },
  methods: {
    getRandomFromBackend() {
      axios
        .get(`/api/random`)
        .then(res => (this.randomNumber = res.data.randomNumber))
        .catch(err => console.error(err));
    }
  },
  created() {
    this.getRandom();
  }
};
</script>
