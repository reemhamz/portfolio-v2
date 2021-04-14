<template>
  <div class="blog">
    <h2>Web development feels, opinions, and occasional lessons.</h2>

    <h3>(Actually under development this time)</h3>
    <div class="articles">
      <div class="article" v-for="(article, id) of articles" :key="id">
        <!-- <nuxt-link
          :to="{
            name: 'slug',
            params: {
              slug: article.slug,
            },
          }"
          class="article__link"
        >
          <div class="article__image">
            <img :src="require(`~/assets/blog/${article.img}`)" alt="" />
          </div>
          <div class="article__info">
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <p>{{ formatDate(article.updatedAt) }}</p>
          </div>
        </nuxt-link> -->
      </div>
    </div>
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
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only([
        'title',
        'description',
        'img',
        'slug',
        'createdAt',
        'updatedAt',
        'id',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  min-height: 95vh;
  text-align: center;
  padding: 40px 0;
  h2 {
    border-bottom: 4px dashed $orange;
  }
  h3 {
    color: $darkTeal;
  }
}
.articles {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.article {
  margin: 30px;
  width: 40%;
  height: 400px;
  padding: 10px;
  &__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 4px dashed $navy;
  }
  &__image {
    margin-bottom: auto;
    position: relative;
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 10px;
      right: 10px;
      height: 100%;
      width: 100%;
      background: $orange;
      z-index: -10;
    }

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      height: 100%;
      width: 100%;

      background: rgba($orange, 0.5);
      z-index: -10;
    }
  }
  &__info {
    margin-bottom: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
  }
}
</style>