<template>
  <article>
    <Nav />
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
     const article = await $content('articles', params.slug).fetch()
      return { article }
  },
}
</script>

<style>
article{
  min-height: 100vh;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 40px;
  
}
  
</style>