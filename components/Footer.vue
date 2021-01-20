<template>
  <footer>
    <div>
      <p>
        Designed and coded w/
        <span
          role="img"
          aria-label="hand doing the rock n' roll gesture"
          >🤘🏼</span
        >
        by Reem. Picrew character library by
        <a
          href="https://picrew.me/image_maker/380116"
          target="_blank"
          rel="noreferrer noopener"
          class="active-link"
          >Sagravi</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  z-index: 100000;
  background-color: $orange;
  width: 100%;
  position: absolute;
  left: 0;
  padding: 10px;
  div {
    text-align: center;
    color: $white;

    a {
      color: $white;
    }
  }
}
</style>