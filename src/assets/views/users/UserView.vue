<script>
import DevicesView from "@/assets/views/DevicesView.vue";
import {watch} from "vue";
import store from "@/scripts/store";

export default {
  name: "UserView",
  components: {DevicesView},
  data() {
    return {
      selectedUserID: null,
    };
  },
  mounted() {
    let usr = store.User();
    // console.log('usr', usr);
    if (usr) {
      this.selectedUserID = usr.uid?usr.uid:usr.rawId;
    }
    // Watch token after component is mounted
    watch(
        () => store.state.token,
        (newToken) => {
          // console.log('new token', newToken)
          if (newToken !== null) {
            let usr = store.User();
            this.selectedUserID = usr.uid;
            // console.log('user', usr);
            // this.loadUsers();
          }
        }
    )
  }
}
</script>

<template>
  <DevicesView mine="true" v-if="selectedUserID" :userID="selectedUserID"/>
</template>

<style scoped lang="scss">

</style>