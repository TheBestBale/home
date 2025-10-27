<script>
import {adminGetUsers} from "@/scripts/admin";
import {watch} from 'vue'
import store from '@/scripts/store'
import ShadowBox from "@/assets/components/ShadowBox.vue";
import DevicesView from "@/assets/views/DevicesView.vue";
import ClickButton from "@/assets/components/ClickButton.vue";

export default {
  name: "AdminUsersView",
  components: {ClickButton, DevicesView: DevicesView, ShadowBox},
  data() {
    return {
      users: null,
      selectedUserID: null,
    };
  },
  methods: {
    loadUsers() {
      console.log('loading users');
      adminGetUsers().then((u) => {
        this.users = u;
        // this.users = u.concat(u);
      });
    },
    viewUserDevices(userID) {
      this.selectedUserID = userID;
    },
    unselectUser() {
      this.selectedUserID = null;
    }
  },
  computed: {
    selectedUser() {
      return this.selectedUserID !== null;
    }
  },
  mounted() {
    this.loadUsers();
    // Watch token after component is mounted
    watch(
        () => store.state.token,
        (newToken) => {
          console.log('new token', newToken)
          if (newToken !== null) {
            this.loadUsers();
          }
        }
    )
  }
}
</script>

<template>
  <div v-if="selectedUser" class="devices">
    <div class="spacer">
      <ClickButton @click="unselectUser">Back</ClickButton>
    </div>
    <DevicesView :userID="selectedUserID"/>
  </div>
  <div v-else class="users">
    <ShadowBox class="user" v-for="u in users" :key="u.rawId" @click="viewUserDevices(u.rawId)">
      <div>{{ u.displayName }}</div>
      <img class="profile-image" :src="u.photoUrl"/>
    </ShadowBox>
  </div>
</template>

<style scoped lang="scss">

.devices {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 24px;
}

.spacer {
  padding: 5px;
  width: 800px;
  margin: 5px auto;
}

.users {
  width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.user {
  width: 140px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: $color-white;
  transition: $transition-normal;

  &:hover {
    //background-color: $color-white-hover;
    cursor: pointer;
    box-shadow: $shadow-hover;
  }
}

.profile-image {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: auto;
}
</style>