<template>
  <div class="projects">
    <div class="projects__head">
      <h2>Portfolio pieces</h2>
      <p>Projects that showcase some of my skillsets. Enjoy!</p>
    </div>
    <div class="projects__container">
      <div class="project">
        <div class="project__info">
          <div class="project__title">
            <h3>
              <span
                role="img"
                aria-label="Cedar tree, which is the national tree of Lebanon"
                >🌲</span
              >
              LebaNews
            </h3>
          </div>
          <div class="project__text">
            <p>
              A news site about Lebanon's economy and political state. Created
              this in reaction to the
              <a
                href="https://en.wikipedia.org/wiki/2020_Beirut_explosion"
                rel="noreferrer noopener"
                target="_blank"
                class="active-link"
                >Beirut blast</a
              >. Still a WIP.
            </p>
          </div>
          <div class="project__buttons">
            <a
              href="https://lebanews.netlify.app/"
              class="project__button button active-link"
              rel="noreferrer noopener"
              target="_blank"
              >View live</a
            >
            <a
              href="https://github.com/reemhamz/lebanon-news"
              class="project__button button active-link"
              rel="noreferrer noopener"
              target="_blank"
              >View code</a
            >
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project__info">
          <div class="project__title">
            <h3>
              <span role="img" aria-label="camera with flash">📸</span>
              PokéPolaroid
            </h3>
          </div>
          <div class="project__text">
            <p>
              A Pokédex-like experience in polaroid format. I also wrote a whole
              blogpost about it
              <a
                href="https://dev.to/reemhamz/how-react-js-helped-me-start-building-my-dream-website-3jn5"
                rel="noreferrer noopener"
                target="_blank"
                class="active-link"
                >here</a
              >.
            </p>
          </div>
          <div class="project__buttons">
            <a
              href="https://reemhamz.github.io/pokedex-app/"
              class="project__button button active-link"
              rel="noreferrer noopener"
              target="_blank"
              >View live</a
            >
            <a
              href="https://github.com/reemhamz/pokedex-app"
              class="project__button button active-link"
              rel="noreferrer noopener"
              target="_blank"
              >View code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="project__info">
          <div class="project__title">
            <h3>
              <span role="img" aria-label="green plant with two leaves"
                >🌱</span
              >
              Herba Shoppe
            </h3>
          </div>
          <div class="project__text">
            <p>
              Vanilla JS shopping cart. The cart's total quantity and price will
              update based on the quantity of each item placed by user.
            </p>
          </div>
          <div class="project__buttons">
            <a
              href="https://reemhamz.github.io/herbalove-shoppe/"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View live</a
            >
            <a
              href="https://github.com/reemhamz/herbalove-shoppe"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="project__info">
          <div class="project__title">
            <h3>
              <span role="img" aria-label="castle">🏰</span>
              Westerosi Wiki
            </h3>
          </div>
          <div class="project__text">
            <p>
              Learn about the great houses Westeros. Select a house sigil on the
              interactive map to view info. Built alongside
              <a
                href="https://www.vipinkirthane.com/"
                rel="noreferrer noopener"
                target="_blank"
                class="active-link"
                >Vipin</a
              >.
            </p>
          </div>
          <div class="project__buttons">
            <a
              href="https://agameofdevs.github.io/westerosi-wiki/"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View live</a
            >
            <a
              href="https://github.com/agameofdevs/westerosi-wiki"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="project__info">
          <div class="project__title">
            <h3>
              <span role="img" aria-label="green potion">🧪</span>
              Trippy Tincture
            </h3>
          </div>
          <div class="project__text">
            <p>
              User takes a ~<em>trippy tincture</em>~ and a story is generated.
              The more drops a user selects, the more latin phrases appear.
            </p>
          </div>
          <div class="project__buttons">
            <a
              href="https://reemhamz.github.io/trippyTinctureProjectFive/"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View live</a
            >
            <a
              href="https://github.com/reemhamz/trippyTinctureProjectFive"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="project__info">
          <div class="project__title">
            <h3>
              <span role="img" aria-label="coffee cup">☕️</span>
              Starbucks Szns
            </h3>
          </div>
          <div class="project__text">
            <p>
              User speaks to a Starbucks barista and answers questions to get a
              recommended drink.
            </p>
          </div>
          <div class="project__buttons">
            <a
              href="https://reemhamz.github.io/reemHamouiprojectThree/"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View live</a
            >
            <a
              href="https://github.com/reemhamz/reemHamouiprojectThree"
              class="project__button button active-link"
              target="_blank"
              rel="noreferrer noopener"
              >View code</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.projects {
  padding: 40px 0;
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;

  &__head {
    h2 {
      color: $navy;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 80px;
    }
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project {
    border: 4px dashed $darkTeal;
    display: flex;
    justify-content: space-around;
    height: 330px;
    width: 30%;
    position: relative;
    margin-bottom: 30px;
    background: $white;

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      height: 100%;
      width: 100%;

      background: rgba($orange, 0.7);
      z-index: -10;
    }

    &__info {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: auto;

      h3 {
        color: $darkTeal;
        display: inline-block;
        position: relative;
        font-size: 3em;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          height: 15%;
          width: 100%;
          background: rgba($orange, 0.7);
          z-index: 1;
        }
      }
    }

    &__text {
      margin: 20px 0;
    }
  }

  @include max-width(1222) {
    &__container {
      justify-content: space-between;
      .project {
        width: 40%;
      }
    }
  }

  @include max-width(920) {
    .project {
      width: 45%;
    }
  }

  @include max-width(820) {
    &__head {
      margin-bottom: 20px;
      h2,
      p {
        margin: 0;
        padding: 0 15px;
      }
    }
    .project {
      flex-direction: column;
      padding-top: 20px;
      width: 100%;
      margin: 30px;
      &__info {
        width: 100%;

        h3 {
          &::before {
            height: 10%;
          }
        }
      }
    }
  }

  @include max-width(500) {
    .button {
      width: 100%;
      margin: 0 auto;
      align-self: center;
      text-align: center;
      margin-bottom: 15px;
    }
  }
}
</style>