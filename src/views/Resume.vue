<template>
  <div>
    Load GSheet Stuff here
    <div v-if="experience">
      <ViewCard v-for="(j,i) in experience.careers" :key="i">
        <div> {{ j }}</div>
        <div>{{ j.company_name }}</div>
        <div>{{ dates(j) }}</div>
      </ViewCard>
    </div>
  </div>
</template>

<script>

import data from "@/store/resume/data";
import ViewCard from "@/components/Card";

export default {
  name: "ResumeView",
  components: {ViewCard},
  data() {
    return {
      experience: null,
    }
  },
  created() {
    // console.log('created resume view')
    this.experience = data.experience();
    // console.log(this.experience);
  },
  methods: {
    dates(j) {
      let sd = j.start_date;
      let ed = j.current ? 'Present' : '';
      console.log(sd, ed);
      return sd + '-' + ed;
    }
  }
}
</script>

<style scoped>

</style>