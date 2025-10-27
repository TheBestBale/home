<template>
  <div class="gallery">
    <div class="gallery-wheel">
      <ImageViewer :image="images[prevPage]" class="gallery-image side"/>
      <ImageViewer :image="images[index]" class="gallery-image"/>
      <ImageViewer :image="images[nextPage]" class="gallery-image side"/>
    </div>

    <div class="gallery-nav">
      <ClickButton @click="prev">Previous</ClickButton>
      <ClickButton @click="next">Next</ClickButton>
    </div>
  </div>
</template>

<script>
import ImageViewer from "@/assets/components/ImageViewer";
import ClickButton from "@/assets/components/ClickButton.vue";

export default {
  name: "PageGallery",
  components: {
    ClickButton,
    ImageViewer,
  },
  data() {
    return {
      index: 0,
      images: [
        "rows",
        "bg1",
        "bg2",
        "bg3",
        "bg4",
        "comp1",
        "comp2",
        "attach1",
        "attach2",
        "field1",
        "field2",
        "mount1",
        "mount2",
        "name1",
        "tractor",
        "install1",
        "install2",
        "install3",
        "install4",
        "screen1",
        "screen2",
      ],
    }
  },
  methods: {
    next() {
      if (this.index === this.maxIndex) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    prev() {
      if (this.index === 0) {
        this.index = this.maxIndex;
      } else {
        this.index--;
      }
    },

  },
  computed: {
    maxIndex() {
      return this.images.length - 1;
    },
    prevPage() {
      if (this.index === 0) {
        return this.maxIndex;
      } else {
        return this.index - 1;
      }
    },
    nextPage() {
      if (this.index === this.maxIndex) {
        return 0;
      } else {
        return this.index + 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;

  &-nav {
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    margin: 12px auto;
    text-align: center;
  }

  &-wheel {
    display: flex;
    margin: auto;
    padding: 12px;
  }

  &-image {
    margin: auto 12px;
    height: 600px;
    width: auto;
    border-radius: $radius-medium;


    &.side {
      height: 100px;
      width: 100px;
      opacity: 0.5;
    }
  }
}
</style>