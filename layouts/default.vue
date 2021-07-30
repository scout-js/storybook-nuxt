<template>
  <section class="container">
    <Nuxt />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home',
    }
  },
}
</script>

<style lang="scss">
  .container {
    padding: 0 15px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
