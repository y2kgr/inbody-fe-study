<template>
  <div id="app">
    <h1>Welcome to My Vue 3 App</h1>
    <ExampleComponent />
  </div>
</template>

<script>
import ExampleComponent from './components/ExampleComponent.vue';

export default {
  name: 'App',
  components: {
    ExampleComponent
  }
};
</script>

<style>
@import './assets/styles.css';
</style>