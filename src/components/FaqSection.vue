<template>
  <v-row justify="center text-center">
    <v-col cols="12">
      FAQ
    </v-col>

    <v-row justify="center">
      <v-col
        cols="10"
        md="7"
      >
        <v-card
          class="faq-card separation-card-container d-flex"
          v-for="(faq) of faqs"
          :key="faq.question"
        >
          <v-row class="ma-auto align-center text-center">
            <v-col cols="12">
              <v-card-subtitle>
                {{ faq.question }}
              </v-card-subtitle>
            </v-col>
            <v-row>
              <v-col cols="12">
                <v-card-subtitle>
                  {{ faq.answer }}
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "FaqSection",
  data() {
    return {
      faqs: [
        {question:'What is an NFT?',answer:'NFT stands for non-fungible token, essentially means unique or non interchangeable. An asset\n' +
              'that is non-fungible cannot be arbitrarily swapped with another — it is one of a kind.'},
        {question:'What do i need to buy them?',answer:'You need some ETH. You can buy it directly from the Metamask Wallet.'},
        {question:'How do I mint?',answer:'It’s EZPZ, connect your Metamask wallet on our website and choose the amount of The Stitches\n' +
              'characters you wish to mint. Your characters will then appear in your Opensea profile wallet.'},
        {question:'Where can i see my stitchy characters after the mint?',answer:'Great question! Once you bougth and you have your own(s) character(s), simply connect to your\n' +
              'OpenSea account to see your NFT´s'},
        {question:'How many characters exist?',answer:'Only 7,777 will ever exist, and each one of them is unique'}
      ]
    }
  },
}
</script>

<style scoped>

.faq-card{
  background-color: rgba(255,255,255,0.6)!important;
  border-radius: 60px!important;
}

.separation-card-container{
  margin-bottom: 25px!important;
}


</style>