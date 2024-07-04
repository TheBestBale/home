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
  color: $color-white;
  display: flex;
  padding: 3%;
  justify-content: space-between;
  background-color: #7C6E35;

  &-text {
    font-size: $font-size-medium;
    font-style: italic;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>