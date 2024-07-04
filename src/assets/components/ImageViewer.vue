<template>
  <img v-if="field" :alt="src" src="@/assets/images/hay1.jpg"/>
  <img v-else-if="bale" :alt="src" src="@/assets/images/hay2.jpg"/>
  <img v-else :alt="src" src="@/assets/images/logo.png"/>
</template>

<script>
export default {
  name: "ImageViewer",
  props: {
    image: {
      type: String,
      options: ["hay", "bale"]
    }
  },
  computed: {
    field() {
      return this.image === 'field';
    },
    bale() {
      return this.image === 'bale';
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 100px;
  width: 100px;
  border-radius: 10%;
}

</style>