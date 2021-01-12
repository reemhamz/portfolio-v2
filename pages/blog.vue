<template>
  <div class="blog">
      <h2>
          Oops, nothing to see here (yet) ...<span role="img" aria-label="hourglass with sand in it">⏳</span>
      </h2>
  </div>
</template>

<script>
export default {
 head() {
    return {
      title: "Reem's Blog",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'Blog page',
          content: 'Showing you my blogposts!',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog{
    height: calc(100vh );
    h3 {
        // margin: 80px 0;    
    }
}
</style>