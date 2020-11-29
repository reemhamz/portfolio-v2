<template>
  <div class="about">
    <div class="about__image">
      <img src="~/assets/images/figs.jpg" alt="" />
    </div>
    <div class="about__text">
      <h2>about me</h2>
      <p>
        I'm a front-end developer based in Toronto currently working at
        <a href="https://fueled.com" rel="noreferrer noopener" target="_blank"
          >Fueled</a
        >! I started editing themes on Tumblr back in 2010 (just making heading
        tags). Now I'm building full-on websites, professionally!
      </p>
      <br />
      <p>
        I'm really into web accessibility and focusing on the user experience.
        I'm dabbling with creative web design and I'm excited to see what all
        these skills help me produce over time. Also a follower of the
        <a
          href="https://jamstack.org/"
          rel="noreferrer noopener"
          target="_blank"
          >Jamstack</a
        >
        <span role="img" aria-label="grapes">🍇</span>
        <span role="img" aria-label="stack of pancakes">🥞</span> movement, so
        much that this website is built using
        <a href="https://nuxtjs.org/" rel="noreferrer noopener" target="_blank"
          >Nuxt.js</a
        >, a static site generator with the core Jamstack methodology in mind.
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 4px dashed $orange;
  position: relative;
  margin-bottom: 80px;


  &__image {
    margin: 0 80px;

  }

  &__text {
    margin-right: 80px;
    font-family: $Niramit;
    font-size: 1.2rem;

    h2 {
        font-family: $Prospectus;
        font-size: 3.5rem;
        color: $navy;
    }
  }
}
</style>