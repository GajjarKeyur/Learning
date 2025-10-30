<script setup lang="ts">
defineOptions({ name: 'RandomQuoteGeneratorPage' })
import { ref } from 'vue'

const quotes = [
  'The best way to get started is to quit talking and begin doing.',
  'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.',
  "Don't let yesterday take up too much of today.",
]

const current = ref(quotes[0])
const randomize = () => {
  current.value = quotes[Math.floor(Math.random() * quotes.length)]
}
</script>
<template>
  <div class="quote-generator">
    <h2 class="app-title">Random Quote Generator</h2>
    <blockquote class="quote-container">
      <p>{{ current }}</p>
      <cite>Random Quote Generator</cite>
    </blockquote>
    <button class="quote-button" @click="randomize">New Quote</button>
  </div>
</template>
<style scoped>
.quote-generator {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.quote-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

cite {
  font-style: normal;
  color: #777;
}

.quote-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quote-button:hover {
  background-color: #2980b9;
}
</style>
