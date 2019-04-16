<template>
  <div>
    <h1>Current</h1>
    <div>
      <p>Name(event): {{ name }}</p> 
      <button v-on:click="$emit( 'update:name', 'bar' )">Update name</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
}
</script>

<style>
</style>
