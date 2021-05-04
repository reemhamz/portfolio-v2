<template>
  <nav class="navigation">
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
        <nuxt-link to="#contact"
          ><span role="img" aria-label="red phone" aria-hidden="true">☎️</span>
          contact</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  background-color: $white;
  padding: 10px;
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    align-items: center;
    li {
      margin: 0 20px;
    }
    span {
      margin-right: auto;
      a {
        font-size: 1.9em;
        border-bottom: 2px solid $orange;
        color: $orange;
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