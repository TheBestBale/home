<template>
  <div class="shadow-box">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ShadowBox'
}
</script>

<style lang="scss" scoped>
.shadow-box {
  border: 1px solid $color-secondary;
  border-radius: 12px;
  padding: 16px;
  margin: 4px;
  background-color: $color-white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

}
</style>