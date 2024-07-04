<template>
  <div class="header">
    <div class="header-title">
      Best Bale
    </div>
    <div class="header-subtitle">
      Be better. Bale better. Bale Best.
    </div>
    <!--    <img src="@/assets/images/hay1.jpg">-->
  </div>
</template>

<script>
export default {
  name: "BBHeader"
}
</script>

<style lang="scss" scoped>
.header {
  background-image: url('../images/hay1.jpg');
  background-size: 100%;
  color: $color-white;
  display: flex;
  padding: 3%;
  justify-content: space-between;

  &-title {
    font-size: $font-size-xxlarge;
  }

  &-subtitle {
    font-size: $font-size-large;
    font-style: italic;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>