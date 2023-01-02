<template>
  <v-row class="justify-center mt-16">
    <v-col>
      <p class="text-center">
        THE ROADMAP
      </p>
    </v-col>
    <v-row justify="center">
      <v-col
        v-for="road in roadmapData"
        :key="road.title"
        cols="12"
        sm="3"
        class="roadmap-container"
      >
        <v-img
          rounded
          class="roadmap-avatar"
          width="200px"
          :src="require(`@/assets/${road.image}`)"
        />
        <br>
        <p class="font-weight-bold text-center title-text">
          {{ road.title }}
        </p>
        <p class="text-center subtitle-text">
          {{ road.subtitle }}
        </p>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "RoadmapSection",
  data() {
    return {
      roadmapData: [
        {title:'PHASE', subtitle:'SKMWKDMWELK DMELWMDEWL MDEELMDEWLD MEW´PL´PL´WLE´ WEPODPEWWSS.',image:'phase-1.jpg'},
        {title:'PHASE', subtitle:'SKMWKDMWELK DMELWMDEWL MDEELMDEWLD MEW´PL´PL´WLE´ WEPODPEWWSS.',image:'phase-2.jpg'},
        {title:'PHASE', subtitle:'SKMWKDMWELK DMELWMDEWL MDEELMDEWLD MEW´PL´PL´WLE´ WEPODPEWWSS.',image:'phase-3.jpg'},
        {title:'PHASE', subtitle:'SKMWKDMWELK DMELWMDEWL MDEELMDEWLD MEW´PL´PL´WLE´ WEPODPEWWSS.',image:'phase-4.jpg'},
      ]
    }
  },
}
</script>

<style scoped>
.roadmap-avatar{
  position: relative;
  margin: 0 auto;
}
.roadmap-container{
  position: relative;
}

.title-text{
  font-size: 35px;
}

.subtitle-text{
  font-size: 20px;
}
</style>