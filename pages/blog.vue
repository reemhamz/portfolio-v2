<template>
  <div class="blog">
    <Nav />
    <div class="blog__header">
      <h2>Blog.</h2>
      <h3>Web development opinions, feels, and occasional lessons, alongside some other things I want to write about.</h3>
    </div>

    <!-- <div class="articles">
      <div class="article" v-for="(article, id) of articles" :key="id">
        <nuxt-link
          :to="{
            name: 'slug',
            params: {
              slug: article.slug,
            },
          }"
          class="article__link"
        > -->
          <!-- <div class="article__image">
            <img :src="require(`~/assets/blog/${article.img}`)" alt="" />
          </div> -->
          <!-- <div class="article__info">
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <p>Published: {{ formatDate(article.updatedAt) }}</p>
          </div>
        </nuxt-link>
      </div>
    </div> -->
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
        // 'img',
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
  &__header {
    padding: 40px 0;
    h2 {
      margin-top: 80px;
    }
    h3 {
      color: $darkTeal;
      font-family: $DMSans;
      color: $grey;
      font-weight:400;
      font-size: 2.5em;
      width: 70%;
    }
  }
}
.articles {
  display: flex;
  align-items: flex-start;
}
.article {
  margin: 30px 0;
  width: 100%;
  height: 200px;
  transition: 0.5s box-shadow;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0px 20px rgba($navy, 0.4);
  border-radius: 10px;
  &__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    text-decoration: none;
    border-radius: 4px;
    p {
      color: $navy;
      font-weight: 400;
    }
    &::hover {
      box-shadow: 10px 5px blue;
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