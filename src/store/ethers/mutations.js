/* eslint-disable */
export default {
  initialized: function (state, value) {
    state.initialized = value
  },
  connected: function (state, value) {
    state.connected = value
  },
  error: function (state, value) {
    state.error = value
  },
  user: function (state, value) {
    state.user = value
  },
  address: function (state, value) {
    state.address = value
  },
  network: function (state, value) {
    state.network = value
  },
  ens: function (state, value) {
    state.ens = value
  },
  stitchesContract: function (state,value){
    state.stitchesContract = value
  },
  wallet: function (state,value){
    state.wallet = value
  },
  publicMintActive: function (state,value){
    state.publicMintActive = value
  },
  privateMintActive: function (state,value){
    state.privateMintActive = value
  },
  mintedQty: function (state,value){
    state.mintedQty = value
  }
}
