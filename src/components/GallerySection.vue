<template>
  <div
    class="container-section"
  >
    <v-row
      justify="center"
      class="mt-16"
    >
      <v-col
        cols="12"
      >
        <p class="text-center">
          GALLERY
        </p>
      </v-col>
      <v-row
        justify="center"
      >
        <v-col
          cols="2"
          v-for="(n,idx) in 32"
          :key="idx"
          class="pa-0 ma-0"
        >
          <v-img
            class="img-gallery"
            :src="require(`@/assets/gallery/${n}.jpg`)"
          />
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GallerySection"
}
</script>

<style scoped>

.img-gallery{
  position: relative;
  max-width: 380px;
  max-height: 380px;
}

.container-section{
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
