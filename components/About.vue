<template>
  <div class="about">
    <div class="about__image">
      <img src="~/assets/images/turkish-coffee.jpg" alt="" />
    </div>
    <div class="about__text">
      <h2 class="about__title">about me</h2>
      <p>
        I'm a front-end developer based in Toronto currently working @
        <a href="https://fueled.com" rel="noreferrer noopener" target="_blank"
          >Fueled</a
        >
        <span role="img" aria-label="fuel pump">⛽️</span>!
      </p>
      <br />
      <br>
      <p>
        I'm really into web accessibility
        <a
          href="https://fueled.com/blog/what-is-web-accessibility/"
          rel="noreferrer noopener"
          target="_blank"
          class="accessibility-article"
          >(peep my article)</a
        >
        and focusing on the user experience. I'm dabbling with creative web
        design and I'm excited to see where all these skills take me over time.
      </p>
      <br />
      <p>
        Like every developer, my blood runs on coffee
        <span role="img" aria-label="cup of coffee">☕️</span>, I'm also really into Levantine cooking
        <span role="img" aria-label="female chef holding spatula">👩🏻‍🍳</span>.
      </p>
      <br />
      <p>
        I'm a new fan of dystopian books
        <span role="img" aria-label="zombie with arms out">🧟‍♀️</span>, recent
        plant mama <span role="img" aria-label="sunflower">🌻</span>, and
        aspiring cottage-core lady
        <span role="img" aria-label="farm girl with carrot and straw hat"
          >👩🏻‍🌾</span
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 4px dashed $orange;
  position: relative;
  margin-bottom: 100px;

  &__image {
    margin-left: 80px;
    position: absolute;
    left: 0;
    height: calc(100% + 60px);
    width: 35%;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 10px;
      right: 10px;
      height: 100%;
      width: 100%;
      background: rgba($navy, 0.5);
      z-index: -10;
    }

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      height: 100%;
      width: 100%;
      background: $navy;
      z-index: -10;
    }
  }

  &__text {
    margin-right: 80px;
    width: 45%;
    margin-left: auto;
    align-self: center;
  }

  &__title {
   color: $navy;
  }
}
</style>