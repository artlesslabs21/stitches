<template>
  <v-app>
    <v-container
      class="content-container "
      fluid
    >
      <NavigationBar />
      <PageContent />
    </v-container>
  </v-app>
</template>

<script>

import NavigationBar from "@/components/NavigationBar";
import PageContent from "@/components/PageContent";
export default {
  name: 'App',

  components: {
    PageContent,
    NavigationBar

  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss" >


.content-container{
  background: rgb(240,118,113);
  background: linear-gradient(180deg, rgba(240,118,113,1) 16%, rgba(241,239,116,1) 39%, rgba(109,188,125,1) 66%, rgba(124,167,198,1) 91%);
  height: 100%;
}

</style>
