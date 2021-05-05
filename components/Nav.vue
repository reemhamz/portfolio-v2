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
        <nuxt-link to="/#contact"
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
  padding-top: 5px;
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
      padding: 10px;
      transition: 0.3s;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0);
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 0px 20px rgba($navy, 0.4);
      }
      a {
        padding: 10px;
        height: 10%;
      }
    }
    span {
      margin-right: auto;
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