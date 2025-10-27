<template>
  <BBHeader @navigate="changePage" :isAdmin="isAdmin" :page="page"/>
  <!--  <div class="app-nav">-->
  <!--    <ClickButton :variant="variant(pageHome)" @click="changePage(pageHome)">Home</ClickButton>-->
  <!--    <ClickButton :variant="variant(pageImages)" @click="changePage(pageImages)">Images</ClickButton>-->
  <!--    <ClickButton v-if="isAdmin" :variant="variant(pageAdmin)" @click="changePage(pageAdmin)">Admin</ClickButton>-->
  <!--    &lt;!&ndash;    <div :class="classes(pageContact)" @click="changePage(pageContact)">Contact Us</div>&ndash;&gt;-->
  <!--  </div>-->
  <HomePage class="filler" v-if="home"/>
  <PageGallery class="filler" v-if="images"/>
  <AdminView class="filler" v-if="admin"/>
  <BBFooter/>
</template>
<script>

import BBHeader from "@/assets/components/BBHeader";
import BBFooter from "@/assets/components/BBFooter";
import PageGallery from "@/assets/views/GalleryPage";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/scripts/firebase";
import store from "@/scripts/store";
import {getUser} from "@/scripts/api";
import HomePage from "@/assets/views/HomePage.vue";
import AdminView from "@/assets/views/admin/AdminView.vue";

export default {
  name: 'App',
  components: {AdminView, HomePage, PageGallery, BBFooter, BBHeader},
  data() {
    return {
      url: "thebestbale.github.io?page=",
      pageImages: 'gallery',
      pageHome: 'home',
      pageContact: 'contact-us',
      pageAdmin: 'admin',
      page: 'home',
      user: null,
      role: null
    }
  },
  created() {
    // console.log('app.vue:created:user', this.user);
  },
  methods: {
    changePage(s) {
      this.page = s;
    },
    classes(p) {
      return {
        'app-nav-page': true,
        'app-nav-page-selected': this.page === p || (!this.page && p === this.pageHome),
      };
    },
    loadUser() {
      getUser().then((u) => {
        // console.log('loaded user', u)
        store.SaveUser(u);
        this.user = u;
        // console.log(store.UserRole())
      });
    },
  },
  computed: {
    isAdmin() {
      let r = store.UserRole()
      return r === "Admin" || r === 'admin';
    },
    // page() {
    //   // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    //   const params = new Proxy(new URLSearchParams(window.location.search), {
    //     get: (searchParams, prop) => searchParams.get(prop),
    //   });
    //   return params.page;
    // },
    contactUs() {
      return this.page === this.pageContact;
    },
    images() {
      return this.page === this.pageImages;
    },
    home() {
      return this.page === this.pageHome || !this.page;
    },
    admin() {
      return this.page === this.pageAdmin;
    },
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        store.SaveUser(user);
        // console.log('DevicesView authstatechanged');
        user.getIdToken().then((token) => {
          store.SaveAuthToken(token)
          this.loadUser();
          // this.loadDevices()
        });
      } else {
        store.Logout();
        this.role = null;
        this.changePage(this.pageHome);
      }
    });
  },
}
</script>

<style lang="scss">
#app, body {
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: $font-color-primary;
}

.filler {
  height: 80vh;
  overflow: auto;
  padding-bottom: 50px;
  padding-top: 10px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.app-nav {
  display: flex;
  width: 80%;
  margin: 4px auto;
  justify-content: space-around;


  &-page {
    border: none;
    padding: 16px;
    border-radius: 8px;
    font-size: 16px;
    margin: 4px;
    box-shadow: $shadow-normal;
    transition: .2s all ease-in-out;

    background-color: $button-background;
    color: $button-font;

    &-selected {
      background-color: $button-background-active;
      color: $button-font-active;

      &:hover {
        background-color: $button-background-hover;
        //cursor: pointer;
        //color: $color-primary;
      }
    }

    &:hover {
      cursor: pointer;
      box-shadow: $shadow-hover;
    }

    &:active {
      box-shadow: $shadow-active;
    }
  }
}
</style>
