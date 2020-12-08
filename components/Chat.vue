<template>
  <div class="chat">
    <header class="chat__header">
      Reem IM <span role="img" aria-label="rocketship launching">🚀</span>
    </header>
    <div class="chat__box">
      <div class="guest">
        <span class="guest__title">Site Guest says:</span>
        <p class="guest__text">where am i?</p>
      </div>
      <div class="reem">
        <span class="reem__title">Reem says:</span>
        <p class="reem__text">
          ur on my website. i'm reem, and i've designed this world
          <span role="img" aria-label="globe">🌏</span>
        </p>
      </div>
      <div class="guest">
        <span class="guest__title">Site Guest says:</span>
        <p class="guest__text">
          wow. it's so good to have landed here
          <span role="img" aria-label="smiling face with hearts">🥰</span>
        </p>
      </div>
      <div class="reem">
        <span class="reem__title">Reem says:</span>
        <p class="reem__text">
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
  // height: 100%;
  width: 320px;
  font-family: $Plex;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: 100%;

  &__header {
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

      &__title {
        color: $darkTeal;
        font-size: 1.6em;
      }

      &__text {
        color: $grey;
        font-size: 1.92em;
        margin-left: 10px;
        font-family: $Plex;
      }
    }

    .reem {
      margin: 15px 0;

      &__title {
        color: $orange;
        font-size: 1.6em;
      }

      &__text {
        color: $grey;
        font-size: 1.92em;
        font-family: $Plex;
      }
    }
  }
}
</style>