<template>
  <div class="layout" :class="{ open: showNav }">
    <div id="mobileNav" v-if="showNav">
      <MobileNav />
    </div>
    <div id="burgerMenu" v-if="mobileView" @click="showNav = !showNav">
      <ph-list :size="58" />
    </div>
    <Nav v-if="!mobileView" />
    <Nuxt :clickaway="closeNav"/>
    <Footer />
  </div>
</template>

<script>
import { PhList } from 'phosphor-vue'
import { directive as onClickaway } from 'vue-clickaway';

export default {
  data: () => {
    return {
      mobileView: '',
      showNav: false,
    }
  },
   directives: {
    onClickaway: onClickaway,
  },
  methods: {
    handleView() {
      if (window.innerWidth <= 815) {
        this.mobileView = true
      } else {
        this.mobileView = false
      }
      console.log('blabla', this.mobileView)
    },
    closeNav: function () {
      showNav = false
      console.log(this.showNav)
    },
  },
  mounted() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
  components: {
    PhList,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  // position: relative;
  #mobileNav {
    // width: 50%;
    position: absolute;
    height: 100%;
    left: 50%;
  }
  #burgerMenu {
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    color: $orange;
    z-index: 1000;
    background: white;
    text-align: right;
    position: fixed;
    top: 0;
    right: 0;
  }
  .open {
    // transform: translateX(300px);
  }
}
</style>
