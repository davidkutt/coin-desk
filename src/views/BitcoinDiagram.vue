<template>
  <v-container>
    <PageHeading value="Bitcoin Diagramm"/>
    <v-card class="mt-5">
      <LineChart v-if="chartData.datasets && chartData.datasets.length" :chartData="chartData" :options="chartOptions"/>
    </v-card>
  </v-container>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import BlockchainService from "@/services/BlockchainService";
import LineChart from "@/components/LineChart";
import {ChartKeys} from "@/enums/ChartKeys";

const blockchainService = new BlockchainService();

export default {
  name: "BitcoinDiagram",
  components: {LineChart, PageHeading},
  data: () => ({
    chartData: {
      labels: [],
      datasets: []
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Werte der letzten 30 Tage'
      }
    }
  }),
  async created() {
    await this.initDataSets();
  },
  methods: {
    async initDataSets() {
      const dollarPriceValues = await blockchainService.getChartData(ChartKeys.DOLLAR_PRICE);
      const marketCapValues = await blockchainService.getChartData(ChartKeys.MARKET_CAP);
      const totalBcValues = await blockchainService.getChartData(ChartKeys.TOTAL_BTC);
      const transactionCountValues = await blockchainService.getChartData(ChartKeys.TRANSACTION_COUNT);
      const hashRateValues = await blockchainService.getChartData(ChartKeys.HASH_RATE);
      const difficultyValues = await blockchainService.getChartData(ChartKeys.DIFFICULTY);

      this.chartData.datasets = [
        this.getDataSet("Marktpreis (USD)", dollarPriceValues, "rgba(1, 116, 188, 0.7)"),
        this.getDataSet("Marktkapitalisierung (USD)", marketCapValues, "rgba(127, 191, 63, 0.7)", true),
        this.getDataSet("Im Umlauf", totalBcValues, "rgba(63, 63, 191, 0.7)", true),
        this.getDataSet("Transaktionen pro Tag", transactionCountValues, "rgba(191, 127, 63, 0.7)", true),
        this.getDataSet("Hashrate (TH/s)", hashRateValues, "rgba(191, 63, 127, 0.7)", true),
        this.getDataSet("Schwierigkeit", difficultyValues, "rgba(191, 63, 63, 0.7)", true),
      ];

      this.chartData.labels = [...Array(30).keys()];
    },
    getDataSet(label, data, color, hidden = false) {
      return {
        label: label,
        data: data,
        hidden: hidden,
        backgroundColor: "transparent",
        borderColor: color,
        pointBackgroundColor: "rgba(60, 60, 60, 1)"
      }
    }
  },
}
</script>
