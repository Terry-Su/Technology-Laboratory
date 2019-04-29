
<template>
  <div>
    <!-- directive: v-html -->
    <span v-html="`<h1>Test1</h1>`"></span>

    <!-- dynamic arguments -->
    <h1 v-on:[attrName]="handleTest2Click">Test2</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrName: 'click'
    }
  },
  methods: {
    handleTest2Click() {
      console.log( 'Test2' )
    }
  }
}
</script>

<style>
</style>
