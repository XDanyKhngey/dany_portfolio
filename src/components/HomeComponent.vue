<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1 class="text-center">Hello World</h1>
  <button class="btn btn-primary" @click="count++">You clicked me {{ count }} times.</button>
</template>