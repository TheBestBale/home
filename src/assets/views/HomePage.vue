<template>
  <div class="home">
    <div class="home-text">
      <div>
        Welcome To BestBale
      </div>
      <div>
        With over 60 years combined farming and ranching experience, we hope to bring you the best service available.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  components: {},
}
</script>


<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  background: url("@/assets/images/backsplash.jpg");
  background-size: cover; /* Scales the image to cover the entire div */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents image repetition */
  width: 100%;
  height: 100%;

  &-text {
    width: 75%;
    border-radius: 12px;
    padding: 24px;
    color: $color-black;
    font-size: 3rem;
    background-color: $color-secondary-opacity;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto  ;
  }
}

</style>