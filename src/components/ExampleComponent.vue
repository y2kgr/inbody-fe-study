<template>
  <div class="example-component">
    <h1>Hello from ExampleComponent!</h1>
    <p>This is an example of a Vue 3 component with bundled JavaScript and CSS.</p>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data() {
    return {
      message: 'This is a message from the component!'
    };
  },
  mounted() {
    console.log(this.message);
  }
};
</script>

<style scoped>
.example-component {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>