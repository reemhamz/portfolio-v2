<template>
  <div>
    <!-- <Wip /> -->
    <div class="logo">
     <NuxtLink to=""> <img src="~assets/images/logo.svg" alt="navy swirl with a circle of flowers and an orange 'R'. Click to go to main page"> </NuxtLink>
    </div>
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
  img {
    height: 80px;
  }
  &:hover {
    transform: scale(0.9);
  }
}
</style>
