<template>
  <div class="wip-body">
    <div class="wip">
      <p>
        <!-- 👋🏻 Hi! This is all still a work in progress and has been published for
        testing purposes. It's not even mobile friendly, yet! 👩🏻‍🔧 -->
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wip-body {
    position: relative;
    z-index: 10000;
}

.wip {
  background-color: $darkTeal;
  color: $white;
  position: fixed;
  width: 100%;
  left: 0;
  text-align: center;
  padding: 10px;
}
</style>