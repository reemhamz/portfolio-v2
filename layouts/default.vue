<template>
  <div>
    <!-- <Wip /> -->
    
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: fixed;
  top: 30px;
  left: 30px;
  transition: transform 0.3s;
  z-index: 10;
  img {
    height: 80px;
  }
  &:hover {
    transform: scale(0.9);
  }
}
</style>
