<template>
  <div class="header">
    <div class="header-title">
      <BestBaleLogo/>
    </div>
    <div :class="classes('home')" @click="navigate('home')">Home</div>
    <div :class="classes('gallery')" @click="navigate('gallery')">Gallery</div>
    <div :class="classes('admin')" v-if="isAdmin" @click="navigate('admin')">Users</div>
    <div/>
    <div class="header-subtitle">
      Be better. Bale better. Bale Best.
    </div>
    <FirebaseLogin/>
    <!--    <img src="@/assets/images/hay1.jpg">-->
  </div>
</template>

<script>
import BestBaleLogo from "@/assets/components/BestBaleLogo";
import FirebaseLogin from "@/assets/components/FirebaseLogin.vue";

export default {
  components: {FirebaseLogin, BestBaleLogo},
  name: "BBHeader",
  props: {
    isAdmin: {type: Boolean},
    page: {},
  },
  data() {
    return {
      selectedPage: 'home',
    }
  },
  created() {
    if (!this.page) {
      this.selectedPage = this.page;
    }
  },
  methods: {
    navigate(p) {
      this.$emit('navigate', p);
    },
    classes(p) {
      // console.log('selected page', this.page);
      return {
        "header-nav": true,
        "selected": this.page === p,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  text-decoration: underline;
}

.header {
  //background-image: url('../images/bale_rows.jpg');
  //background-size: 100%;
  background-color: $color-primary;
  color: $color-secondary;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  min-height: 100px;

  &-title {
    font-size: $font-size-xxlarge;
    display: flex;
    justify-content: center;
    margin: auto 4px;
    max-width: 20%;
    height: auto;
  }

  &-nav {
    font-size: $font-size-large;
    display: flex;
    justify-content: center;
    margin: auto 4px;
    max-width: 30%;
    height: auto;
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    transition: $transition-normal;


    &:hover {
      color: $color-primary;
      background-color: $color-secondary;
    }
  }

  &-subtitle {
    font-size: $font-size-large;
    font-style: italic;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    width: 120px;
  }
}
</style>