<template>
  <div class="info">
    <div v-for="f in functions" :key="f.id" class="info_item">
      <div class="info_item_title">{{ f.label }}</div>
<!--      <div class="info_item_details">{{ f.details }}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "PageProductInfo",
  data() {
    return {
      functions: [
        {id: "1", label: "Accurate Speed Recommendations", details: "detail"},
        {id: "2", label: "Compaction and flake size measurements", details: "detail"},
        {id: "3", label: "Precision control and measurement of hydraulic pressure", details: "detail"},
        {id: "4", label: "Measure bale count", details: "detail"},
        {id: "5", label: "Stroke counts", details: "detail"},
        {id: "6", label: "Bale flake counts", details: "detail"},
        {id: "7", label: "Bale weight", details: "detail"},
        {id: "8", label: "Automatic Lubrication", details: "detail"},
        {id: "9", label: "Camera Integration", details: "detail"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 85%;

  &_item {
    border: 1px solid $color-primary;
    border-radius: $radius-small;
    margin: $margin-small;
    padding: $padding-medium;
    text-align: center;
    box-shadow: $shadow-small;
  }
}
</style>