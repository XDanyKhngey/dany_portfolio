<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button class="btn btn-primary" @click="count++">You clicked me {{ count }} times.</button>
</template>