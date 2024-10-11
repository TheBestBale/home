<template>
  <div class="footer">
    <div class="footer-text">All rights reserved</div>
    <div class="footer-text">800-555-1234</div>
  </div>
</template>

<script>
export default {
  name: "BBFooter"
}
</script>


<style lang="scss" scoped>
.footer {
  background-position: center;
  color: $color-white;
  display: flex;
  padding: 1%;
  justify-content: space-between;
  background-color: $color-secondary;
  position: absolute;
  height: 20px;
  bottom: 0;
  left: 0;
  right: 0;

  &-text {
    font-size: $font-size-medium;
    font-style: italic;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>