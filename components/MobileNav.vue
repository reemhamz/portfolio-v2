<template>
  <nav class="mobileNavigation">
    <ul>
      <span>
        <li><nuxt-link to="/">reem hamoui</nuxt-link></li>
      </span>
      <li>
        <nuxt-link to="/blog"
          ><span role="img" aria-label="speech bubble" aria-hidden="true"
            >💭</span
          >
          blog</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/projects"
          ><span role="img" aria-label="old witch" aria-hidden="true">🧙🏼‍♀️</span>
          projects</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/#contact"
          ><span role="img" aria-label="red phone" aria-hidden="true">☎️</span>
          contact</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
//   background-color: $white;
  padding-top: 5px;
  z-index: 1000;
  height: 100%;
  position: fixed;
  background-color: rgba($navy, 0.9);
  top: 0;
  width: 40%;
  left: 0;
  padding-top: 20px;
  @include max-width(600){
      width: 100%;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: flex-start;
    align-items: flex-start;
    li {
      margin: 0 20px;
      padding: 10px;
      transition: 0.3s;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0);
      font-size: 2.5em;
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 0px 20px rgba($navy, 0.4);
      }
      a {
        padding: 10px;
        height: 10%;
        color: white;
      }
    }
    span {
    //   margin-right: auto;
      a {
        font-size: 1.9em;
        border-bottom: 2px solid $orange;
        color: $orange;
        padding: 0;
        font-family: $ProspectusReg;
      }
    }
    a {
      color: $navy;
      text-decoration: none;
      font-size: 1.2em;
      font-weight: 500;
    }
  }
}
</style>