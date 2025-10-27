<script>

import ShadowBox from "@/assets/components/ShadowBox.vue";
import {callDeviceFunction} from "@/scripts/admin";
import WaterLevel from "@/assets/components/WaterLevel.vue";

export default {
  name: "DeviceView",
  components: {WaterLevel, ShadowBox},
  props: {
    device: null,
    userID: null,
  },
  data() {
    return {
      percentage: null,
      troughType: null,
      troughStatus: null,
    };
  },
  created() {
  },
  methods: {
    callFunction(f) {
      callDeviceFunction(this.userID, this.device.ExternalID, f).then((r) => {
        console.log('call function response', r);

        this.troughType = r.parsed_data?.TroughType;
        this.troughStatus = r.parsed_data?.Status;

        // if (r.parsed_data?.PumpPos !== null){
        this.percentage = r.parsed_data?.PumpPos;
        console.log('new percentage', this.percentage);
        // }
      });
    }
  },
  computed: {
    onlineClasses(){
      return {
        'green': this.device.online,
        'red':!this.device.online,
      };
    },
    isLevelTrough() {
      return this.troughType === 2;
    },
    isStatusTrough() {
      return this.troughType === 1;
    },
    troughStatusText() {
      switch (this.troughStatus) {
        case 2:
          return 'Full'
        case 1:
          return 'Empty'
      }
      return 'N/A'
    },
    allowedFunctions() {
      let a = [];
      let data = this.device.functions;
      data.sort((a, b) => a.localeCompare(b));

      for (const fs in data) {
        let n = data[fs];
        // todo figure out a better way for this?
        if (n === 'GetWaterTroughData') {
          a.push(n);
        }
      }
      return a;
    }
  }

};

</script>

<template>
  <ShadowBox class="device">
    <!--{{ device}}-->
    <div class="header">
      <div class="header-left">
        <div>{{ device.Name }}</div>
        <div
            class="device-online tooltip"
            :class="onlineClasses"
            :title="`Online: ${device.online}`"
        >
        <span class="tooltiptext" :class="onlineClasses">{{ device.online ? 'Device Online' : 'Device Offline'}}</span>
        </div>
      </div>
      <div class="header-right">

        <div>ID: {{ device.ID }}</div>
        <div>External ID: {{ device.ExternalID }}</div>
      </div>
    </div>
    <div class="body">
      <div class="left">
        <!--        <div>Status: {{ device.status }}</div>-->
        <div v-if="isStatusTrough">
          Status: {{ troughStatusText }}
        </div>
      </div>
      <div class="left">
        <div>Created: {{ device.DateCreated }}</div>
        <div>Last Updated: {{ device.last_heard }}</div>
      </div>
    </div>
    <div class="functions">
      <button class="button" @click="callFunction(f)" v-for="f in allowedFunctions" :key="f">{{ f }}</button>
    </div>
    <WaterLevel v-if="isLevelTrough" :percentage="percentage"/>

    <div class="footer">
      <div>Version: {{ device.system_firmware_version }}</div>
      <div>Serial: {{ device.serial_number }}</div>
    </div>
    <!--    <div>DateModified: {{ device.DateModified }}</div>-->
    <!--    <div>product_id: {{ device.product_id }}</div>-->
    <!--    <div>platform_id: {{ device.platform_id }}</div>-->
    <!--    <div>iccid: {{ device.iccid }}</div>-->
    <!--    <div>imei: {{ device.imei }}</div>-->
  </ShadowBox>
</template>

<style scoped lang="scss">

.green{
  background-color: $c-green-3;
}
.red{
  background-color: $c-red-1;
}

.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  //background-color: $c-green-5;
  color: $color-white;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  min-width: 120px;
  font-size: 16px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: -12px;
  left: 20px;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.button {
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  margin: 4px;
  box-shadow: $shadow-normal;
  transition: .2s all ease-in-out;
  color: $button-font;
  background-color: $button-background;

  &:hover {
    box-shadow: $shadow-hover;
    //background-color: $button-background-hover;
    //color: $button-font-hover;
  }

  &:active {
    box-shadow: $shadow-active;
  }
}


.functions {
  margin: 8px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.device {
  //background-color: aqua;
  padding: 5px;
  width: 800px;
  margin: 5px auto;

  &-online {
    margin: auto 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}

.header {
  color: $c-blue;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  border-bottom: 1px solid $c-grey;

  &-left {
    font-size: 32px;
    display: flex;
  }

  &-right {
    display: flex;
    flex-direction: column;
  }


}

.body {
  display: flex;
  margin: 5px;
  justify-content: space-between;
}

.footer {
  display: flex;
  margin: 5px;
  justify-content: space-between;
  color: $c-grad-2;
}
</style>