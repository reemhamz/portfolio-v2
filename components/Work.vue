<template>
  <div class="work">
    <h2>My work and stuff</h2>
    <div class="work__box">
      <div class="projects work__box--thing">
        <h3>Projects <span role="img" aria-label="ball of orange yarn">🧶</span></h3>
        <p>
          I've worked on projects for myself that helped me understand a
          framework/language, some cute dev challenges, and I'm starting to do
          some free lance. Check out what I have!
        </p>
        <NuxtLink to="projects" class="button active-link">View projects</NuxtLink>
      </div>
      <div class="blog work__box--thing">
        <h3>Blog <span role="img" aria-label="pot of honey">🍯</span></h3>
        <p>
          I've done some blogging in the past and realized I want to help people
          understand some web dev concepts, this will be updated every now and
          then when I have knowledge to offer.
        </p>
        <NuxtLink to="blog" class="button active-link">View blog</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.work {
  margin: 0 80px;
  margin-bottom: 150px;

  h2 {
    color: $navy;
  }

  &__box {
    display: flex;
    justify-content: space-between;
    &--thing {
      width: 45%;
      border: 4px dashed rgba($darkTeal, 0.8);
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        color: $orange;
        position: relative;
        margin-bottom: 20px;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          height: 20%;
          width: 100%;
          background: rgba($darkTeal, 0.3);
          z-index: -100;
        }
      }
      .button {
        align-self: center;
        text-align: center;
        
        margin-top: 20px;
        width: 100%;
      }
    }
  }

  @include max-width(900){
    margin: 0;
    padding: 20px;
  }

  @include max-width(650) {
    padding: 15px;
    &__box {
      flex-direction: column;

      &--thing {
        width: 100%;
        margin-bottom: 40px;
        padding: 10px;
      }
    }
    .button {
      margin: 10px;
      width: 80%;
    }
  }
}
</style>