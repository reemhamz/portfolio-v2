<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="container">
        <span class="container__greetings"
          ><span
            role="img"
            aria-label="hand with close fingers but split betwen middle and ring fingers"
            >🖖🏼</span
          >
          greetings, i'm</span
        >
        <h1 class="container__title">Reem Hamoui</h1>
        <div class="container__gpoy">
          <img src="~/assets/images/me.svg" alt="" />
        </div>
        <div class="container__tldr">
          <p>
            <span role="img" aria-label="woman working on a laptop">👩🏻‍💻</span>
            web developer
          </p>
          <p>
            <span role="img" aria-label="paper with some writing and a pencil"
              >📝</span
            >
            dunder mifflinite
          </p>
          <p>
            <span
              role="img"
              aria-label="cedar tree, the symbolic tree of Lebanon"
              >🌲</span
            >
            lebanese diasporite
          </p>
        </div>
      </div>
      <div class="header__chat">
        <Chat />
      </div>
    </div>
    <div class="arrow">
            <a href="#" aria-label="Scroll to main section" tabindex="0" v-scroll-to="{
              el: '.about',
              offset: -80,
              duration: 600,
            }">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
  </header>
</template>

<script>
export default {
  // components: true,
}
</script>

<style lang="scss" scoped>
.header {
  color: $white;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  &__wrapper {
    background-color: $navy;
    align-self: center;
    width: 100%;
    padding: 20px 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container {
      margin-left: 80px;

      &__greetings {
        font-size: 2.3em;
      }

      &__gpoy {
        margin: 20px 0;

        img {
          height: 250px;
          max-width: 100%;
        }
      }

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 20px;
        left: 20px;
        border: 4px dashed $navy;
        z-index: -10;
      }
    }
  }

  &__chat {
    margin-right: 80px;
    height: 100%;
    position: absolute;
    right: 0;
    align-self: center;
    height: calc(100% + 60px);
  }

  // Arrow styling
  .arrow {
    cursor: pointer;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    a {
      &::before {
        content: '';
        height: 0;
      }
    }
  }
  .arrow span {
    display: block;
    width: 25px;
    height: 25px;
    border-bottom: 4px solid $orange;
    border-right: 4px solid $orange;
    transform: rotate(45deg);
    margin: -5px;
    animation: animate 1.5s infinite;
  }
  .arrow span:nth-child(2) {
    animation-delay: -0.2s;
  }
  .arrow span:nth-child(3) {
    animation-delay: -0.4s;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
}
</style>