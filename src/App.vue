<template>
  <BBHeader/>
  <div class="app-nav">
    <div :class="classes(pageHome)" @click="changePage(pageHome)">Home</div>
    <div :class="classes(pageImages)" @click="changePage(pageImages)">Images</div>
    <div :class="classes(pageContact)" @click="changePage(pageContact)">Contact Us</div>
  </div>
  <PageProductInfo class="filler" v-if="home"/>
  <PageGallery class="filler" v-if="images"/>
  <BBFooter/>
</template>
<script>

import BBHeader from "@/assets/components/BBHeader";
import BBFooter from "@/assets/components/BBFooter";
import PageProductInfo from "@/assets/views/ProductPage";
import PageGallery from "@/assets/views/GalleryPage";

export default {
  name: 'App',
  components: {PageGallery, PageProductInfo, BBFooter, BBHeader},
  data() {
    return {
      url: "thebestbale.github.io?page=",
      pageImages: 'images',
      pageHome: 'home',
      pageContact: 'contact-us',
    }
  },
  created() {
  },
  methods: {
    changePage(s) {
      if (this.page === s) {
        return;
      }
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set('page', s);
      window.location.search = urlParams;
    },
    classes(p) {
      return {
        'app-nav-page': true,
        'app-nav-page-selected': this.page === p || (!this.page && p === this.pageHome),
      };
    }
  },
  computed: {
    page() {
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      return params.page;
    },
    contactUs() {
      return this.page === this.pageContact;
    },
    images() {
      return this.page === this.pageImages;
    },
    home() {
      return this.page === this.pageHome || !this.page;
    },
  }
}
</script>

<style lang="scss">
#app, body {
  margin: 0;
  height: 100vh;
}

.filler{
  height: 70%;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}

.app-nav {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-around;

  &-page {
    color: $color-primary;
    padding: 8px 12px;
    background: $color-white;
    margin: 4px;
    border-radius: 4px;
    border: $border-small;
    box-shadow: $shadow-small;
    transition: $transition-normal;

    &:hover {
      background-color: $color-off-white;
      color: $color-white;
    }

    &-selected {
      background-color: $color-primary;
      color: $color-black;

      &:hover {
        background-color: $color-off-white;
        color: $color-white;
      }
    }
  }
}
</style>
