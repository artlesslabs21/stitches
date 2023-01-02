<template>
  <div>
    <v-app-bar
      app
      color="transparent"
      elevation="0"
      width="100%"
      height="100px"
      class="d-block"
      v-if="!$vuetify.breakpoint.mobile"
    >
      <v-row
        justify="center"
        class="align-content-center ma-auto"
      >
        <v-col
          cols="5"
          lg="7"
        >
          <v-card
            class="navbar d-flex justify-center"
          >
            <v-card-actions class="justify-space-between">
              <div
                v-for="(link) of links"
                :key="link.name"
                class="d-flex"
              >
                <v-btn
                  :href="link.url"
                  class="navbar-link"
                  plain
                >
                  {{ link.name }}
                </v-btn>
              </div>
            </v-card-actions>
            <v-spacer />
            <v-card-actions class="justify-space-between">
              <v-btn
                v-for="button of buttons"
                :key="button.icon"
                :href="button.url"
                target="_blank"
                icon
              >
                <v-icon>{{ button.icon }}</v-icon>
              </v-btn>
              <v-btn
                target="_blank"
                href="https://opensea.io/collection/stitchesnft"
                icon
              >
                <v-img
                  height="40px"
                  width="40px"
                  contain
                  src="../assets/logo-opensea.png"
                />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="2">
          <v-card
            class="btn-connect d-flex justify-center"
          >
            <v-card-actions>
              <div
                v-for="(butn) of buttonC"
                :key="butn.button"
                class="d-flex"
              >
                <v-btn
                  large
                  color="text-white!important"
                  :href="butn.url"
                  class="navbar-link"
                  plain
                >
                  {{ butn.button }}
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-app-bar
      app
      fixed
      color="transparent"
      elevation="0"
      height="120px"
      class="d-block"
      v-if="$vuetify.breakpoint.mobile"
    >
      <v-card
        v-if="!drawer"
        width="60px"
        height="60px"
        color="rgba(255, 255, 255, 0.3)"
        class="navbar-mobile d-flex justify-center"
      >
        <v-icon
          @click.stop="drawer = !drawer"
        >
          mdi-menu
        </v-icon>
      </v-card>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="rgba(255, 255, 255, 0.3)"
    >
      <v-list
        height="100%"
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-blue--text text--accent-4"
        >
          <v-list-item
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            @click.stop="drawer = !drawer"
          >
            <v-list-item-title class="white--text text-uppercase">
              {{ link.name }}
            </v-list-item-title>
          </v-list-item>
          <v-row justify="center">
            <v-btn
              v-for="button in buttons"
              :key="button.icon"
              :href="button.url"
              target="_blank"
              plain
              icon
            >
              <v-icon
                color="white"
              >
                {{ button.icon }}
              </v-icon>
            </v-btn>
            <v-btn
              href="https://opensea.io/collection/kotbnft"
              plain
              icon
              target="_blank"
            >
              <v-img
                height="40px"
                width="40px"
                contain
                src="../assets/logo-opensea.png"
              />
            </v-btn>
          </v-row>
          <v-row
            justify="center"
            align="center"
          >
            <span
              v-if="user"
              class="white--text pr-1"
              style="font-size: small"
            >
              {{ `${user.slice(0,4)}...${user.slice(38,42)}` }}
            </span>
            <v-badge
              v-if="user"
              class="text-center mr-3"
              dot
              color="green"
            />
            <v-btn
              color="white"
              plain
              class="pr-3"
              v-if="!connected"
              @click="connectClick"
            >
              Connect
            </v-btn>
            <v-btn
              icon
              v-if="connected"
              color="white"
              @click="disconnect"
            >
              <v-icon>
                mdi-logout
              </v-icon>
            </v-btn>
          </v-row>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  name: "NavigationBar",
  data(){
    return{
      drawer:false,
      links:[
        {name:'BUYANSTITCHE',url:'#mint'},
        {name:'ABOUT',url:'#about'},
        {name:'GALLERY',url:'#gallery'},
        {name:'ROADMAP',url:'#roadmap'},
        {name:'FAQ',url:'#faq'},
      ],
      buttons:[
        {icon:'mdi-twitter',url:'https://twitter.com/stitchesnft/'},
        {icon:'mdi-instagram',url:'https://instagram.com/'},
        /*{icon:'mdi-file-sign', url:'https://etherscan.io',disabled:true}*/
      ],
      buttonC:[
        {button:'CONECT WALLET', url:'#'}
      ],
    }
  },
  methods: {
    ...mapActions('ethers' ,['init',"disconnect"]),
    async connectClick() {
      this.init()
    }
  },
  computed: {
    ...mapState('ethers',['connected','user'])
  },
}
</script>

<style scoped>

.navbar{
  background-color: rgba(255,255,255,0.6)!important;
  border-radius: 60px!important;
  height: 60px;
  width: 100%;
  margin-bottom: 20px!important;
}

.btn-connect{
  background-color: rgba(0,0,0,0.6)!important;
  border-radius: 60px!important;
}

</style>
