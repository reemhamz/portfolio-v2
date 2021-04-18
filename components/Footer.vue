<template>
  <footer>
    <div>
      <p>
        Designed and coded w/
        <span role="img" aria-label="hand doing the rock n' roll gesture"
          >🤘🏼</span
        >
        by Reem. Picrew character library by
        <a
          href="https://picrew.me/image_maker/380116"
          target="_blank"
          rel="noreferrer noopener"
          
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
  z-index: 100000;
  background-color: $navy;
  width: 100%;
  padding: 10px;
  clear: both;
  margin-top: 0px;
  position: absolute;
  left: 0;
  div {
    text-align: center;
    color: $white;

    a {
      color: $white !important;
      border: 1px solid transparent;
      transition: 0.5s border;
      &::hover {
        border: 1px solid white;
      }
    }
  }
}
</style>