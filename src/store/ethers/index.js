/* eslint-disable */
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {Wallet} from "ethers";

const state = () => ({
  initialized: false,
  connected: false,
  error: null,
  stitchesContract:'',
  wallet: Wallet,
  user: '',
  address: '',
  network: '',
  ens: null,
  privateMintActive: false,
  publicMintActive: false,
  mintedQty:0,
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
