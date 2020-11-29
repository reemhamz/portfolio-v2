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
  &__wrapper {
    margin: 0 120px;
    background-color: $navy;
    align-self: center;
    width: 100%;
    padding: 20px;
    font-size: 1.5rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .container {
      margin-left: 80px;

      span {
        font-family: 'Niramit', sans-serif;
      }

      &__title {
        color: $orange;
        font-family: 'Prospectus Pro L DEMO';
        text-transform: lowercase;
        font-size: 5rem;
        margin: -20px 0;
      }

      &__gpoy {
        margin: 20px 0;

        img {
          height: 200px;
          display: block;
        }
      }

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 20px;
        left: 20px;
        border: 3px dashed $navy;
        z-index: -10;
      }
    }
  }

  &__chat {
    margin-right: 80px;
    right: 0;
    bottom: 0;
    position: absolute;
  }
}
</style>