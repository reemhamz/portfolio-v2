<template>
  <div class="toolkit">
    <div class="toolkit__info">
      <h2>Pretty good skillset</h2>
      <p>
        Tbh, I'm always picking up new things and sharpening up on fundamentals.
        I'm currently rlly getting into
        <a
          href="https://jamstack.org/"
          rel="noreferrer noopener"
          target="_blank"
          class="active-link"
          >JamStack <span role="img" aria-label="grapes">🍇</span
          ><span role="img" aria-label="stack of pancakes">🥞</span></a
        >
        because it prioritizes building speedy sites in a super easy way with
        static site generators (this website is actually built using
        <a
          href="https://nuxtjs.org/"
          rel="noreferrer noopener"
          target="_blank"
          class="active-link"
          >Nuxt</a
        >). I'm also trying to break into the
        <a
          href="https://www.mongodb.com/mern-stack"
          rel="noreferrer noopener"
          target="_blank"
          class="active-link"
          >MERN stack</a
        >
        realm! Anyway, here are my current skills:
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
          ><span role="img" aria-label="robot arm flexing">🦾</span> Frameworks
          & Libraries:</span
        >
        <span class="toolkit__skill"
          >jQuery, React.js, Vue.js, Next.js, Nuxt.js, Node.js</span
        >
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
          ><span role="img" aria-label="baseball">⚾️</span> Database
          management:</span
        >
        <span class="toolkit__skill">Firebase, SQL (MySQL)</span>
      </li>
      <li class="toolkit__list-item">
        <span class="toolkit__type"
          ><span role="img" aria-label="female painter">👩🏻‍🎨</span> Design:</span
        >
        <span class="toolkit__skill">Procreate, Figma, Sketch</span>
      </li>
    </ul>
  </div>
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
    margin: 0 80px;
  }

  &__type {
    font-weight: bold;
  }

  &__skill {
    font-size: 0.9em;
  }

  @include max-width(1170) {
    &__info {
      margin: 0;
      padding: 30px;

      p {
        width: 100%;
      }
    }
  }

  @include max-width(700) {
    border: 0;
    border-top: 4px dashed $orange;
    border-bottom: 4px dashed $orange;
    padding: 0;
    &__info {
      padding: 15px;
    }

    &__list {
      margin: 0;
      padding: 15px;
    }
  }

  @include max-width(600) {
    margin-bottom: 80px;
  }
}
</style>