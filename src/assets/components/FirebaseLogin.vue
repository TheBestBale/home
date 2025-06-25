<template>
  <div>
    <button @click="login">Sign in with Google</button>
    <div v-if="user">
      <p>Welcome, {{ user.displayName }}</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import {auth, provider} from "@/firebase";
import {onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import { initializeApp } from 'firebase/app';

export default {
  name: "FirebaseLogin",
  data() {
    return {
      user: null,
    };
  },
  created() {
    const firebaseConfig = {
      //...
    };

    const app = initializeApp(firebaseConfig);
  },
  methods: {
    async login() {
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
        const token = await result.user.getIdToken();
        console.log("Firebase ID token:", token); // send this to your Go backend
      } catch (err) {
        console.error(err);
      }
    },
    async logout() {
      await signOut(auth);
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
