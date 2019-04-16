<template>
  <div>
    <h1>Parent</h1> 
    
    <div>
      Name(vanilla) 
      <current v-bind:name="name1" v-on:update:name="$data.name1=$event"/>
    </div>
    <div>
      Name(.sync) 
      <current v-bind:name.sync="name2"/>
    </div>
  </div>
</template>

<script>
import Current from './Current'
export default {
  components: {
    Current
  },
  data() {
    return {
      name1: 'foo',
      name2: 'foo',
    }
  },
}
</script>

<style>
</style>
