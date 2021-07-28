<template>
  <v-container>
    <PageHeading value="Meine Bitcoin"/>
    <v-card class="mt-5">
      <v-row class="pl-10">
        <v-col>
          <v-card-title>
            Dein Bestand:
          </v-card-title>
        </v-col>
        <v-col>
          <v-card-title>
            <div class="secondary--text">{{ stockValue }} Bitcoin</div>
          </v-card-title>
        </v-col>
      </v-row>
      <v-row class="pl-10">
        <v-col sm="6">
          <v-card-title>
            Bitcoins zu Bestand hinzufügen:
          </v-card-title>
        </v-col>
        <v-col sm="4">
          <v-text-field class="counter pl-5"
                        type="number"
                        color="secondary"
                        label="Anzahl"
                        v-model="addToStockValue"
                        :rules="addToStockRules">
          </v-text-field>
        </v-col>
        <v-col class="pt-5">
          <v-btn right depressed color="secondary" @click="addStock">
            <v-icon dark>
              mdi-plus
            </v-icon>
            Hinzufügen
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import PageHeading from "@/components/PageHeading";

export default {
  name: "MyBitcoin",
  components: {PageHeading},
  data: () => ({
    stockValue: 0,
    addToStockValue: 0,
    addToStockRules: [(value) => value > 0 || "Anzahl muss größer 0 sein"]
  }),
  methods: {
    addStock() {
      console.log(this.stockValue);
      console.log(this.addToStockValue);

      if (this.addToStockValue > 0) {
        const oldValue = Number(this.stockValue) || 0;
        localStorage.stock = oldValue + Number(this.addToStockValue);
        this.stockValue = localStorage.stock;
      }
    }
  },
  created() {
    this.stockValue = localStorage.stock;
  }
}
</script>

