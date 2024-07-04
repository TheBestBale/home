<template>
  <div class="app-header">
    <div>Best Bale App</div>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  },
  created() {
  },
  methods: {

    classes(p) {
      return {
        'app-header-page': true,
        // 'app-header-page-selected': this.page === p || (!this.page && p === this.pageHome),
      };
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
#app {
  //color: $color-primary;
  //background-color: $color-secondary;
  display: flex;
  font-size: 24px;
  justify-content: flex-start;
  padding: 12px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  text-align: center;
  margin: auto;
  color: $font-color-primary;
  background-color: $color-off-white;
}

.app-header {
  justify-content: flex-start;
  padding: 12px;
  display: flex;

  &-page {
    //border-bottom: 1px solid $color-primary;
    margin: 4px;
    cursor: pointer;
    padding: 8px;
    font-size: smaller;
    transition: $transition-normal;
    border-radius: $radius-small;
    box-shadow: 3px 3px 9px 0px $color-shadow;
    background-color: $color-white;

    &:hover, &-selected {
      background-color: $color-primary;
      color: $color-secondary;
      border-radius: $radius-medium;
    }
  }
}


.subtitle {
  color: $color-grey;
  font-style: italic;
  font-size: 16px;
}
</style>
