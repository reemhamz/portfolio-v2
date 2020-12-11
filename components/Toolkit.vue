<template>
  <aside class="toolkit">
    <div class="toolkit__info">
      <h2>pretty good skillset</h2>
      <p>
        Tbh, I'm always picking up new things and sharpening up on fundamentals.
        I'm currently rlly getting into
        <a
          href="https://jamstack.org/"
          rel="noreferrer noopener"
          target="_blank"
          >JamStack <span role="img" aria-label="grapes">🍇</span
          ><span role="img" aria-label="stack of pancakes">🥞</span></a
        >
        because it prioritizes building speedy sites in a super easy way with
        static site generators (this website is actually built using
        <a href="https://nuxtjs.org/" rel="noreferrer noopener" target="_blank"
          >Nuxt</a
        >). Anyway, here are my current skills:
      </p>
    </div>
    <br />
    <ul class="toolkit__list">
      <li class="toolkit__list-item">
        <span class="toolkit__type"
          ><span role="img" aria-label="brain">🧠</span> Core languages:</span
        >
        <span class="toolkit__skill">HTML, CSS (+ Sass), JavaScript</span>
      </li>
      <li class="toolkit__list-item">
        <span class="toolkit__type"
          ><span role="img" aria-label="robot arm flexing">🦾</span>
          Frameworks:</span
        >
        <span class="toolkit__skill">jQuery, React JS, Vue JS</span>
      </li>
      <li class="toolkit__list-item">
        <span class="toolkit__type"
          ><span role="img" aria-label="two peanuts">🥜</span> Version control &
          collaboration:</span
        >
        <span class="toolkit__skill">Git, GitHub, Netlify</span>
      </li>
      <li class="toolkit__list-item">
        <span class="toolkit__type"
          ><span role="img" aria-label="female painter">👩🏻‍🎨</span> Design:</span
        >
        <span class="toolkit__skill">Procreate, Figma, Sketch</span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.toolkit {
  width: 100%;
  padding: 40px 0;
  border: 4px dashed $orange;
  display: inline-block;
  position: relative;
  background-color: $white;
  margin-bottom: 150px;

  &__info {
    margin: 0 80px;

    h2 {
      color: $navy;
    }

    p {
      width: 80%;
    }
  }

  &__list {
    list-style: none;
    // margin: 80px;
    margin: 0 80px;
  }

  &__type {
    font-weight: bold;
  }

  &__skill {
    font-size: 0.9em;
  }
}
</style>