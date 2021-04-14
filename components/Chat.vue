<template>
  <div class="chat">
    <div class="chat__head">
      Reem IM <span role="img" aria-label="rocketship launching">🚀</span>
    </div>
    <div class="chat__box">
      <div class="guest">
        <span class="title">Site Guest says:</span>
        <p class="text">where am i?
        <span role="img" aria-label="heart eyes emoji">
          😍
        </span>
        </p>
      </div>
      <div class="reem">
        <span class="title">Reem says:</span>
        <p class="text">
          you're on my website. i'm reem, and i've created this world
          <span role="img" aria-label="globe">🌏</span>
        </p>
      </div>
      <div class="guest">
        <span class="title">Site Guest says:</span>
        <p class="text">
          wow. it's so good to have landed here
          <span role="img" aria-label="smiling face with hearts">🥰</span>
        </p>
      </div>
      <div class="reem">
        <span class="title">Reem says:</span>
        <p class="text">
          enjoy your stay
          <span role="img" aria-label="8bit purple space monster">👾</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.chat {
  width: 320px;
  font-family: $Plex;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: 100%;

  &__head {
    background-color: $orange;
    font-size: 2.4em;
    color: $white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 5px;
    text-align: center;
  }

  &__box {
    border: 4px solid $orange;
    padding: 0 10px;
    background-color: $white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .guest {
      margin: 15px 0;

      .title {
        color: $darkTeal;
      }
    }

    .title {
      font-size: 1.6em;
    }

    .text {
      color: rgba($navy, 0.8);
      font-size: 1.92em;
      margin-left: 10px;
      font-family: $Plex;
    }

    .reem {
      margin: 15px 0;

      .title {
        color: $orange;
      }
    }
  }
}
</style>