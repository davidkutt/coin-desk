<template>
  <v-container>
    <PageHeading value="Bitcoin Umrechner"/>
    <v-card class="mt-5">
      <v-card-title>Währungen zu Bitcoin</v-card-title>
      <v-row class="pl-5">
        <v-col sm="4">
          <v-text-field class="counter pl-5"
                        v-on:change="calculateBtcValue"
                        v-model="currencyValue"
                        type="number"
                        color="secondary"
                        label="Anzahl"
                        :rules="currencyValueRules">
          </v-text-field>
        </v-col>
        <v-col sm="1">
          <v-select
              v-on:change="calculateBtcValue"
              v-model="currency"
              color="secondary"
              item-color="secondary"
              :items="currencies"
              label="Währung">
          </v-select>
        </v-col>
        <v-col sm="4" v-if="bitcoinValue">
          <v-card-title>
            <div class="secondary--text"> = {{ bitcoinValue }} BTC</div>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row v-if="warningMessage">
        <v-col sm="4">
          <v-alert
              class="ml-5"
              outlined
              type="warning"
              prominent
              border="left">
            {{ warningMessage }}
          </v-alert>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import BlockchainService from "@/services/BlockchainService";

const blockchainService = new BlockchainService();

export default {
  name: "BitcoinConversion",
  components: {PageHeading},
  data: () => ({
    currencies: [],
    ticker: [],
    currencyValue: 0,
    bitcoinValue: 0,
    currency: "",
    warningMessage: "",
    infoMessage: "",
    currencyValueRules: [(value) => value > 0 || "Anzahl muss größer 0 sein"]
  }),
  created() {
    blockchainService.getTicker().then((res) => {
      this.ticker = res.data;
      this.currencies = Object.keys(this.ticker);
    });
  },
  methods: {
    calculateBtcValue() {

      if (!this.currency || this.currencyValue <= 0) {
        this.bitcoinValue = 0;
        return;
      }

      const currencyBtcValue = this.ticker[this.currency];

      if (!currencyBtcValue || !currencyBtcValue.last) {
        this.warningMessage = "Umrechnung fehlgeschlagen, bitte versuche es erneut";
        return;
      }

      this.warningMessage = "";
      this.bitcoinValue = this.currencyValue / currencyBtcValue.last;
    }
  }
}
</script>

