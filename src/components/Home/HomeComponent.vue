<script setup>
import { ref } from 'vue'
import HeaderComponent from '../Header/HeaderComponent.vue';

const count = ref(0)
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    <h1 class="text-center">Hello World</h1>
  <button class="btn btn-primary" @click="count++">You clicked me {{ count }} times.</button>

  <div class="mt-3">
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('home') }}</p>
  </div>
  </div>

</template>