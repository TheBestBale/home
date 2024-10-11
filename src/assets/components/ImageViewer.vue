<template>
  <img v-if="splash" :alt="alt_text" src="@/assets/images/backsplash.jpg"/>
  <img v-else-if="rows" :alt="alt_text" src="@/assets/images/bale_rows.jpg"/>
  <img v-else-if="bg1" :alt="alt_text" src="@/assets/images/bg1.jpg"/>
  <img v-else-if="bg2" :alt="alt_text" src="@/assets/images/bg2.jpg"/>
  <img v-else-if="bg3" :alt="alt_text" src="@/assets/images/bg3.jpg"/>
  <img v-else-if="bg4" :alt="alt_text" src="@/assets/images/bg4.jpg"/>
  <img v-else-if="comp1" :alt="alt_text" src="@/assets/images/computer1.jpg"/>
  <img v-else-if="comp2" :alt="alt_text" src="@/assets/images/computers.jpg"/>
  <img v-else-if="attach1" :alt="alt_text" src="@/assets/images/best_bale_attach.jpg"/>
  <img v-else-if="attach2" :alt="alt_text" src="@/assets/images/equip_back.jpg"/>
  <img v-else-if="field1" :alt="alt_text" src="@/assets/images/half_baled_field.jpg"/>
  <img v-else-if="field2" :alt="alt_text" src="@/assets/images/half_baled_field2.jpg"/>
  <img v-else-if="mount1" :alt="alt_text" src="@/assets/images/mount1.jpg"/>
  <img v-else-if="mount2" :alt="alt_text" src="@/assets/images/mount2.jpg"/>
  <img v-else-if="name1" :alt="alt_text" src="@/assets/images/name.jpg"/>
  <img v-else-if="tractor" :alt="alt_text" src="@/assets/images/tractor_with_mountains.jpg"/>

  <img v-else-if="install1" :alt="alt_text" src="@/assets/images/install1.jpg"/>
  <img v-else-if="install2" :alt="alt_text" src="@/assets/images/install2.jpg"/>
  <img v-else-if="install3" :alt="alt_text" src="@/assets/images/install3.jpg"/>
  <img v-else-if="install4" :alt="alt_text" src="@/assets/images/install4.jpg"/>

  <img v-else :alt="alt_text" src="@/assets/images/logo.png"/>
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
  data() {
    return {
      alt_text: "No Image Loaded",
    }
  },
  computed: {
    splash() {
      return this.image === 'splash';
    },
    rows() {
      return this.image === 'rows';
    },
    bg1() {
      return this.image === 'bg1';
    },
    bg2() {
      return this.image === 'bg2';
    },
    bg3() {
      return this.image === 'bg3';
    },
    bg4() {
      return this.image === 'bg4';
    },
    comp1() {
      return this.image === 'comp1';
    },
    comp2() {
      return this.image === 'comp2';
    },
    attach1() {
      return this.image === 'attach1';
    },
    attach2() {
      return this.image === 'attach2';
    },
    field1() {
      return this.image === 'field1';
    },
    field2() {
      return this.image === 'field2';
    },
    mount1() {
      return this.image === 'mount1';
    },
    mount2() {
      return this.image === 'mount2';
    },
    name1() {
      return this.image === 'name1';
    },
    tractor() {
      return this.image === 'tractor';
    },
    install1() {
      return this.image === 'install1';
    },
    install2() {
      return this.image === 'install2';
    },
    install3() {
      return this.image === 'install3';
    },
    install4() {
      return this.image === 'install4';
    },
  }
}
</script>

<style lang="scss" scoped>
img {
}

</style>