<template>
  <div v-if="user" class="profile">
    <img class="profile-image" :src="user.photoURL"/>
    <div class="profile-name">
      <p>Welcome, {{ user.displayName }}</p>
      <ClickButton variant="secondary" @click="logout">Logout</ClickButton>
    </div>
  </div>
  <ClickButton v-else variant="secondary" @click="login">Sign in with Google</ClickButton>
</template>

<script>
import {auth, provider} from "@/scripts/firebase";
import {onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import store from "@/scripts/store";
import ClickButton from "@/assets/components/ClickButton.vue";

export default {
  name: "FirebaseLogin",
  components: {ClickButton},
  data() {
    return {
      user: null,
    };
  },
  created() {
  },
  methods: {
    async login() {
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
        const token = await result.user.getIdToken();
        // console.log("Firebase ID token:", token); // send this to your Go backend
        store.SaveAuthToken(token);
        store.SaveUser(result.user);
      } catch (err) {
        console.error(err);
      }
    },
    async logout() {
      await signOut(auth);
      store.Logout();
      this.user = null;
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;

    });
  },
};
</script>
<style lang="scss">
.profile {
  display: flex;
  justify-content: center;
  margin: auto 0px;
  max-width: 200px;

  &-image {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: auto 8px;
  }

  &-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.button {
  border: none;
  padding: 2px;
  border-radius: 8px;
  font-size: 16px;
  margin: 0px;
  box-shadow: $shadow-normal;
  transition: $transition-normal;

  &:hover {
    box-shadow: $shadow-hover;
  }

  &:active {
    box-shadow: $shadow-active;
  }
}


</style>