<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
      >
        <v-img
          class="img-logo"
          width="100%"
          src="../assets/logo-stitches.png"
        />
      </v-col>
    </v-row>
    <AboutSection id="about" />
    <MintSection id="mint" />
    <GallerySection id="gallery" />
    <RoadmapSection id="roadmap" />
    <FaqSection id="faq" />
  </v-container>
</template>

<script>
import AboutSection from "@/components/AboutSection";
import MintSection from "@/components/MintSection";
import GallerySection from "@/components/GallerySection";
import RoadmapSection from "@/components/RoadmapSection";
import FaqSection from "@/components/FaqSection";
export default {
  name: "PageContent",
  components: {FaqSection, RoadmapSection, GallerySection, MintSection, AboutSection}
}
</script>

<style scoped>

.img-logo{
  position: relative;
  margin-top: 100px;
}

</style>
