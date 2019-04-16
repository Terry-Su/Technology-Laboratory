<template>
  <div>
    {{ fullName }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  },
  computed: {
    fullName: {
      get() {
        return `${ this.firstName }-${this.lastName}`
      },
      set( vals ) {
        this.firstName = vals[ 0 ]
        this.lastName = vals[ 1 ]
      },
    }
  },
  mounted() {
    this.fullName = [ 'Smith', 'Foo' ]
  }
}
</script>

<style>
</style>
