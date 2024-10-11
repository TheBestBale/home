<template>
  <div class="gallery">
    <div v-for="i in images" :key="i">
      <ImageViewer :image="i" class="gallery-image"/>
    </div>
  </div>
</template>

<script>
import ImageViewer from "@/assets/components/ImageViewer";

export default {
  name: "PageGallery",
  components: {
    ImageViewer,
  },
  data() {
    return {
      images: [
        "comp1",
        "attach1",
        "attach2",
        "mount1",
        "mount2",
        "install1",
        "install2",
        "install3",
        "install4",
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  overflow: auto;

  &-image {
    margin: 10px;
    height: 300px;
    width: 300px;
    border-radius: $radius-medium;
    box-shadow: $shadow-small;
  }
}
</style>