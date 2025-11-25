<script>
import {getDevices} from "@/scripts/api";
import DeviceView from "@/assets/components/DeviceView.vue";
import {getUserDevices} from "@/scripts/admin";

export default {
  name: "DevicesView",
  components: {DeviceView},
  props: {
    userID: null,
    mine: null,
  },
  data() {
    return {
      // user: null,
      devices: null,
    };
  },
  created() {
    console.log('loading devices');
    this.loadDevices();
  },
  methods: {
    loadDevices() {
      // console.log('UserID/mine', this.userID, this.mine);
      if (this.userID !== null && this.userID !== undefined && !this.mine) {
        getUserDevices(this.userID).then((r) => {
          // console.log('getDevices Response: ', r)

          this.devices = r.map(device => {
            // console.log("device", device);
            // Filter and sort device functions for this device
            const filteredFunctions = device.device_functions
                .filter(f => f.name === 'GetWaterTroughData' || f.name === 'CheckWater')
                .sort((a, b) => a.name.localeCompare(b.name));

            // Return a new device object with updated functions
            return {
              ...device,
              device_functions: filteredFunctions
            };
          });
          console.log('modified Response', this.devices);

        }).catch((e) => {
          console.error(e);
        });
      } else {
        getDevices().then((r) => {
          // console.log('getDevices Response: ', r)
          this.devices = r;
        }).catch((e) => {
          console.error(e);
        });
      }
    }
  },
  computed: {
    sortedDevices() {
      let data = this.devices;
      data.sort((a, b) => a.name.localeCompare(b.name));
      return data
    }
  }
  // mounted() {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // console.log('DevicesView authstatechanged');
  //       user.getIdToken().then((token) => {
  //         store.SaveAuthToken(token)
  //         this.loadDevices()
  //       });
  //     }
  //   });
  // },
};

</script>

<template>
  <div class="device-list" v-if="devices">
    <DeviceView v-for="d in sortedDevices" :device="d" :key="d" :userID="userID"/>
  </div>
</template>

<style scoped lang="scss">
.device-list {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>