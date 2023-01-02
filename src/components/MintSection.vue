<template>
  <v-row
    justify="center"
    class="d-block text-center"
  >
    <v-row justify="center">
      <v-col
        cols="6"
      >
        <v-img
          src="../assets/mint-stitches.png"
        />
      </v-col>
    </v-row>
    <br>
    <v-btn
      rounded
      color="rgba(0,0,0,0.6)"
      class="white--text text-button"
      height="45px"
      width="215px"
    >
      M i n t
    </v-btn>
  </v-row>
</template>

<script>

/*import {mapActions, mapState} from "vuex";
import {ethers} from "ethers";
import whitelist from "@/assets/whitelist";
import {MerkleTree} from 'merkletreejs';
const keccak256 = require("keccak256");*/
import {Buffer} from 'buffer';
window.Buffer = Buffer;

export default {
  name: "MintSection",
  data(){
    return{
      counter:1,
      overlay:false,
      overlayMessage:0,
      mintQty: 1,
      merkleTree:{},
      leaves:{}
    }
  },

  /*
  methods: {
    ...mapActions('ethers' ,['init']),
    async connectClick() {
      try {
        await this.init();
      } catch (e){
        alert(e.message);
      }
      this.mintQty = this.maxMint;
    },
    publicMint(){
      let txValue = 0.06 * this.mintQty;
      this.stitchesContract.functions.mint(this.mintQty,{value:ethers.utils.parseUnits(txValue.toString(),"ether")});
    },
    async privateMint(){
      let txValue = 0.04 * this.mintQty;
      let isOg = whitelist.find(el => el.address === this.address.toLowerCase()).isOg;
      let proof = this.merkleTree.getHexProof(this.hashAddress(this.address.toLowerCase(), isOg));
      try {
        await this.stitchesContract.functions.stitcheslistMint(this.mintQty,proof,isOg,{value:ethers.utils.parseUnits(txValue.toString(),"ether")});
      } catch (e) {
        let message = e.message.match('"([^"]*)"');
        this.overlay = true;
        this.overlayMessage = message[1]
      }
    },
    hashAddress(address,isOg){
      return Buffer(ethers.utils.solidityKeccak256(['address','uint'],[address,isOg],).slice(2), "hex");
    },
  },
  computed: {
    ...mapState('ethers',["address","connected","StitchesContract","wallet","privateMintActive","publicMintActive","mintedQty"]),
    isStitchesList(){
      return !this.address ? false : whitelist.find(el => el.address === this.address.toLowerCase())? whitelist.find(el => el.address === this.address.toLowerCase()).isOg === 0 : false;
    },
    isOgStitchesList(){
      return !this.address ? false : whitelist.find(el => el.address === this.address.toLowerCase())? whitelist.find(el => el.address === this.address.toLowerCase()).isOg === 1 : false;
    },
    maxMint(){
      return this.publicMintActive ? 3 : this.isStitchesList ? 2 : this.isOgStitchesList ? 3 : 0;
    }
  },
  watch:{
    '$store.state.ethers.mintedQty':{
      handler() {
        this.mintQty = this.maxMint;
      }
    }
  },
  async mounted() {
    this.leaves = whitelist.map(address => this.hashAddress(address.address,address.isOg));
    this.merkleTree = new MerkleTree(this.leaves,keccak256,{sortPairs:true});
  }*/
}
</script>

<style scoped>

.text-button{
  font-size: 20px!important;
}

</style>