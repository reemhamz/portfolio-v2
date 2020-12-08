<template>
  <div class="container">
    <Header />
    <About />
    <Toolkit />
    <!-- <nuxt-content :document="welcome" /> -->
  </div>
</template>

<script>
import Toolkit from '~/components/Toolkit.vue'
export default {
  async asyncData({ $content, params }) {
    const welcome = await $content('welcome').fetch()
    return { welcome }
  },
}
</script>

<style lang="
Toolkitscss" scoped>
</style>

