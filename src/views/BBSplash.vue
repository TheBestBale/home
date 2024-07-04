<template>
  <div class="bb">
    <BBHeader/>
    <BBProductInfo/>
    <!--  <ImageViewer image="field"/>-->
    <!--  <ImageViewer image="bale"/>-->
    <BBFooter/>
  </div>
</template>

<script>
import BBHeader from "@/assets/components/BBHeader";
import BBFooter from "@/assets/components/BBFooter";
import BBProductInfo from "@/assets/components/BBProductInfo";
export default {
  name: "BBSplash",
  components: {BBProductInfo, BBFooter, BBHeader}
}
</script>

<style lang="scss" scoped>
.bb {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>