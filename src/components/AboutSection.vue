<template>
  <div class="mt-16">
    <v-row class="mt-0">
      <v-col col="12">
        <v-img
          class="img-logo"
          width="100%"
          src="../assets/about-img.png"
        />
      </v-col>
      <v-col col="12">
        <p class="text-center text-about">
          The Stitches are a collection of 7777 programmatically generated
          characters spending the time having a lot of fun and living their best
          life on the Eth Blockchain. These NFTs with fluffy aesthetics and crazy
          personalities are on their way to know you and to become good friends.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutSection"
}
</script>

<style scoped>

.img-logo{
  position: relative;
}

.text-about{
  font-size: 30px;
}

</style>
