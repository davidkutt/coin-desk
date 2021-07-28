<template>
  <v-card class="ma-5">
    <v-card-title class="justify-center pb-0">
      <div>{{ name }}</div>
    </v-card-title>
    <v-card-title class="justify-center pb-0">
      <div class="secondary--text">{{ value }}</div>
    </v-card-title>
    <v-card-title class="justify-center pt-0">
      <div class="secondary--text">{{ unit }}</div>
    </v-card-title>
    <v-card-text class="justify-center">
      <div class="text-center">{{ description }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BitcoinDetailItem",
  props: {
    description: String,
    value: Number,
    name: String,
    unit: String
  }
}
</script>
