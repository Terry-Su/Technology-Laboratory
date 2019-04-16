<template>
  <div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrName: 'click'
    }
  },
  computed: {
    time() {
      return Date.now()
    }
  },
  mounted() {
    console.log( this.time )
    // Second log result won't change
    setTimeout( () => console.log( this.time ), 1000 )
  }
}
</script>

<style>
</style>
