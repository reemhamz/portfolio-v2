<template>
  <div class="projects">
    <h2>projects</h2>
    <div class="project left">
      <div class="project__image">
        <img src="~assets/images/polaroid.jpg" alt="" />
      </div>
      <div class="project__info">
        <div class="project__title">
          <h3>
            <span role="img" aria-label="camera with flash">📸</span>
            PokéPolaroid
          </h3>
        </div>
        <div class="project__text">
          <p>
            Used the PokéAPI to create a Pokédex-like experience in polaroid
            format. User can flip each polaroid to read a quick description
            about the selected Pokémon.
          </p>
        </div>
        <div class="project__buttons">
          <a
            href="https://reemhamz.github.io/pokedex-app/"
            class="project__button button"
            rel="noreferrer noopener"
            target="_blank"
            >View live</a
          >
          <a
            href="https://github.com/reemhamz/pokedex-app"
            class="project__button button"
            rel="noreferrer noopener"
            target="_blank"
            >View code</a
          >
        </div>
      </div>
    </div>

    <div class="project right">
      <div class="project__image">
        <img src="~assets/images/castle.jpg" alt="" />
      </div>
      <div class="project__info">
        <div class="project__title">
          <h3>
            <span role="img" aria-label="castle">🏰</span>
            Westerosi Wiki
          </h3>
        </div>
        <div class="project__text">
          <p>
            Westerosi Wiki showcases the great houses of George RR Martin's
            world of Westeros. User selects a house sigil on the interactive map
            and is views selected house history. Built alongside
            <a
              href="https://www.vipinkirthane.com/"
              rel="noreferrer noopener"
              target="_blank"
              >Vipin</a
            >.
          </p>
        </div>
        <div class="project__buttons">
          <a
            href="https://agameofdevs.github.io/westerosi-wiki/"
            class="project__button button"
            rel="noreferrer noopener"
            >View live</a
          >
          <a
            href="https://github.com/agameofdevs/westerosi-wiki"
            class="project__button button"
            target="_blank"
            >View code</a
          >
        </div>
      </div>
    </div>

    <div class="project left">
      <div class="project__image">
        <img src="~assets/images/potion.jpg" alt="" />
      </div>
      <div class="project__info">
        <div class="project__title">
          <h3>
            <span role="img" aria-label="green potion">🧪</span>
            Trippy Tincture
          </h3>
        </div>
        <div class="project__text">
          <p>
            User takes a Trippy Tincture and a story is generated based on
            user's inputs. Utilized Firebase to retrieve phrases about the sun
            and moon based on user day-time selections, and the more drops a
            user selects, the more latin phrases appear.
          </p>
        </div>
        <div class="project__buttons">
          <a
            href="https://reemhamz.github.io/trippyTinctureProjectFive/"
            class="project__button button"
            rel="noreferrer noopener"
            >View live</a
          >
          <a
            href="https://github.com/reemhamz/trippyTinctureProjectFive"
            class="project__button button"
            target="_blank"
            >View code</a
          >
        </div>
      </div>
    </div>

    <div class="project right">
      <div class="project__image">
        <img src="~assets/images/starbucks.jpg" alt="" />
      </div>
      <div class="project__info">
        <div class="project__title">
          <h3>
            <span role="img" aria-label="coffee cup">☕️</span>
            Starbucks Seasons
          </h3>
        </div>
        <div class="project__text">
          <p>
            User speaks to a Starbucks barista and answers questions to get a
            recommended drink based on seasons, temperature, and caffeine.
            Basically a chat with a barista in quiz form.
          </p>
        </div>
        <div class="project__buttons">
          <a
            href="https://reemhamz.github.io/reemHamouiprojectThree/"
            class="project__button button"
            rel="noreferrer noopener"
            >View live</a
          >
          <a
            href="https://github.com/reemhamz/reemHamouiprojectThree"
            class="project__button button"
            target="_blank"
            >View code</a
          >
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
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  h2 {
    color: $orange;
    margin-bottom: 80px;
  }

  .project {
    border: 4px dashed $darkTeal;
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    position: relative;
    margin-bottom: 100px;
    &__image {
      height: calc(100% + 70px);
      position: absolute;
      left: 0;
      width: 35%;
      align-self: center;
      margin: 0 20px;
      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
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
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      margin-left: auto;

      h3 {
        color: $darkTeal;

        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          height: 20%;
          width: 100%;
          background: rgba($orange, 0.5);
          z-index: -100;
        }
      }
    }

    &__text {
      margin: 20px 0;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    .project__info {
      margin-left: 0;
    }

    .project__image {
      right: 0;
      left: auto;
    }
  }
}
</style>