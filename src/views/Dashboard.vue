<template>
  <v-container>
    <PageHeading value="Dashboard"/>
    <v-row>
      <v-col v-if="stockValue && currenciesBtcValues && currenciesBtcValues.length">
        <v-card class="mt-5">
          <v-card-title class="pt-7">
            Willkommen!
          </v-card-title>
          <v-card-title class="pt-7">
            Dein Bitcoin Bestand beträgt:
          </v-card-title>
          <v-card-title class="pt-0">
            <div class="secondary--text ">{{ stockValue }} Bitcoin</div>
          </v-card-title>
          <v-btn class="text-right ml-4 mb-1 mt-4" color="secondary" :to="'/my-bitcoin'">
            <v-icon dark>
              mdi-plus
            </v-icon>
            Hinzufügen
          </v-btn>
          <v-list class="transparent">
          </v-list>
        </v-card>
      </v-col>
      <v-col v-for="tickerEntry in currenciesBtcValues"
             v-bind:key="tickerEntry.symbol"
             cols="12"
             sm="3">
        <DashboardItem :ticker-entry="tickerEntry"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlockchainService from "@/services/BlockchainService";
import PageHeading from "@/components/PageHeading";
import DashboardItem from "@/components/DashboardItem";

const blockchainService = new BlockchainService();

export default {
  name: "Dashboard",
  components: {DashboardItem, PageHeading},
  data: () => ({
    currenciesBtcValues: [],
    select: null,
    stockValue: 0
  }),
  created() {
    blockchainService.getTicker().then((res) => {
      const ticker = res.data;
      this.currenciesBtcValues = Object.keys(ticker).map(key => ticker[key]);
    });

    this.stockValue = localStorage.stock;
  }
}
</script>

