<template>
  <v-card class="mt-5">
    <v-card-title>
      <v-container class="pa-0 ml-0 mr-5 flag-container">
        <flag class="flag" :iso="flagsByCurrency[tickerEntry.symbol]"></flag>
      </v-container>
      {{ tickerEntry.symbol }} / BTC
    </v-card-title>
    <v-list class="transparent">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Letzte 15 Minuten</v-list-item-title>
          <v-list-item-subtitle class="text-right">{{ tickerEntry['15m'] }}</v-list-item-subtitle>
          <v-list-item-title>Aktuell</v-list-item-title>
          <v-list-item-subtitle class="text-right">{{ tickerEntry['last'] }}</v-list-item-subtitle>
          <v-list-item-title>Kaufpreis</v-list-item-title>
          <v-list-item-subtitle class="text-right">{{ tickerEntry['buy'] }}</v-list-item-subtitle>
          <v-list-item-title>Verkaufpreis</v-list-item-title>
          <v-list-item-subtitle class="text-right">{{ tickerEntry['sell'] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import {CurrencyToFlagEnum} from "@/enums/CurrencyToFlagEnum";

export default {
  name: "DashboardItem",
  props: {
    tickerEntry: Object
  },
  data: () => ({
    flagsByCurrency: CurrencyToFlagEnum
  })
}
</script>

<style lang="sass">
.flag
  max-width: 45px
  font-size: 45px
  border-radius: 50%
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2)

.flag-container
  display: inline
  width: 45px
</style>
