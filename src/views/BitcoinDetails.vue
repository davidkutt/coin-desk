<template>
  <v-container>
    <PageHeading value="Bitcoin Details"/>
    <v-row>
      <v-col v-for="detailItem in details"
             v-bind:key="detailItem.key"
             cols="12"
             sm="3">
        <BitcoinDetailItem :value="detailItem.value || 0"
                           :name="detailItem.name"
                           :unit="detailItem.unit"
                           :description="detailItem.description"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import BlockchainService from "@/services/BlockchainService";
import BitcoinDetailItem from "@/components/BitcoinDetailItem";
import PageHeading from "@/components/PageHeading";
import {DetailsQueryKeys} from "@/enums/DetailsQueryKeys";

const blockchainService = new BlockchainService();

export default {
  name: "Details",
  components: {PageHeading, BitcoinDetailItem},
  data: () => ({
    details: [
      {
        key: DetailsQueryKeys.MARKET_CAP,
        description: "Der gesamte USD-Wert der im Umlauf befindlichen Bitcoins.",
        name: "Marktkapitalisierung",
        unit: "USD"
      },
      {
        key: DetailsQueryKeys.TOTAL_BTC,
        description: "Die Gesamtzahl der abgebauten Bitcoins, die derzeit im Netzwerk zirkulieren.",
        name: "Im Umlauf",
        unit: "Bitcoins"
      },
      {
        key: DetailsQueryKeys.TRANSACTION_COUNT,
        description: "Die Gesamtzahl der bestätigten Transaktionen in den letzten 24 Stunden.",
        name: "Transaktionen pro Tag",
        unit: "Transaktionen"
      },
      {
        key: DetailsQueryKeys.BTC_SENT,
        description: "Die Gesamtzahl der gesendeten Bitcoins in den letzten 24 Stunden.",
        name: "Pro tag gesendet",
        unit: "Bitcoins"
      },
      {
        key: DetailsQueryKeys.HASH_RATE,
        description: "Die geschätzte Anzahl von Terahashes pro Sekunde, die das Bitcoin-Netzwerk in den letzten 24 Stunden ausführt.",
        name: "Hash Rate",
        unit: "TH/s"
      },
      {
        key: DetailsQueryKeys.DIFFICULTY,
        description: "Ein relatives Maß dafür, wie schwierig es ist, einen neuen Block für die Blockchain abzubauen.",
        name: "Schwierigkeit"
      }]
  }),
  async created() {

    for (const detailItem of this.details) {
      detailItem.value = await blockchainService.getQueryValue(detailItem.key);
    }

    this.details = [...this.details];
  }
}
</script>

