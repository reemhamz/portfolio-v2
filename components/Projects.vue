<template>
  <div class="projects">
    <div class="projects__head">
      <h2>Portfolio pieces</h2>
      <p>
        Projects that showcase some of my skillsets. Enjoy!
      </p>
    </div>
      <div class="project right">
      <div class="project__image">
        <img
          src="~assets/images/news.jpg"
          alt="Lady with the news paper on her head"
        />
      </div>
      <div class="project__info">
        <div class="project__title">
          <h3>
            <span role="img" aria-label="Cedar tree, which is the national tree of Lebanon">🌲</span>
            LebaNews
          </h3>
        </div>
        <div class="project__text">
          <p>
            A site that filters news about Lebanon's economy and political state. Incorporated several API calls from news and social media sites. Created this to filter out the news to give me correct information after the <a href="https://en.wikipedia.org/wiki/2020_Beirut_explosion" rel="noreferrer noopener"
            target="_blank" class="active-link">Beirut blast</a>. Still a WIP.
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
    <div class="project left">
      <div class="project__image">
        <img
          src="~assets/images/polaroid.jpg"
          alt="polaroid camera with a colorful background"
        />
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
            about the selected Pokémon. I also wrote a whole blogpost about it <a href="https://dev.to/reemhamz/how-react-js-helped-me-start-building-my-dream-website-3jn5" rel="noreferrer noopener"
            target="_blank" class="active-link">here</a>.
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

    <div class="project right">
      <div class="project__image">
        <img
          src="~assets/images/rosemary.jpg"
          alt="A starbucks frappaccino with whip cream and chocolate shavings"
        />
      </div>
      <div class="project__info">
        <div class="project__title">
          <h3>
            <span role="img" aria-label="green plant with two leaves">🌱</span>
            Herbalove Shoppe
          </h3>
        </div>
        <div class="project__text">
          <p>
            Vanilla JS shopping cart. The cart's total quantity and price will update based on the quantity of each item placed by user. Will also show a message if order has been fulfilled or an error message if there are no items in cart.
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

    <div class="project left">
      <div class="project__image">
        <img
          src="~assets/images/castle.jpg"
          alt="castle with trees surrounding it"
        />
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
            to view selected house history. Built alongside
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

    <div class="project right">
      <div class="project__image">
        <img
          src="~assets/images/potion.jpg"
          class="tincture"
          alt="a small jar with clear liquid inside it closed with a cork on a table"
        />
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

    <div class="project left">
      <div class="project__image">
        <img
          src="~assets/images/starbucks.jpg"
          alt="A starbucks frappaccino with whip cream and chocolate shavings"
        />
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.projects {
  padding: 40px 0;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;

  &__head {
    h2 {
      color: $navy;
      // margin: 0 80px;
      margin-bottom: 20px;
    }
    p {
      // margin: 0 80px;
      margin-bottom: 80px;
    }
  }

  .project {
    border: 4px dashed $darkTeal;
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
        display: inline-block;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          height: 15%;
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
      &__image {
        position: relative;
        height: 100%;
        width: 100%;

        img {
          height: 250px;
          width: 100%;
        }

        .tincture {
          object-position: right bottom;
        }
      }

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