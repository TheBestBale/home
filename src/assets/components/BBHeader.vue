<template>
  <div class="header">
    <div class="header-title">
      <BestBaleLogo/>
    </div>
    <div/>
    <div class="header-subtitle">
      Be better. Bale better. Bale Best.
    </div>
    <!--    <img src="@/assets/images/hay1.jpg">-->
  </div>
</template>

<script>
import BestBaleLogo from "@/assets/components/BestBaleLogo";

export default {
  name: "BBHeader",
  components: {BestBaleLogo}
}
</script>

<style lang="scss" scoped>
.header {
  background-image: url('../images/bale_rows.jpg');
  background-size: 100%;
  color: $color-white;
  display: flex;
  padding: 3%;
  justify-content: space-between;
  height: 40px;

  &-title {
    font-size: $font-size-xxlarge;
    display: flex;
    justify-content: center;
  }

  &-subtitle {
    font-size: $font-size-large;
    font-style: italic;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    width: 120px;
  }
}
</style>