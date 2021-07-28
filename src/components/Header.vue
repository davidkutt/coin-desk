<template>
  <v-app-bar
      app
      dark
      shrink-on-scroll
      prominent
      :src="backgroundPath"
      fade-img-on-scroll>
    <template v-slot:img="{ props }">
      <v-img v-bind="props"
             :src="backgroundPath"
             gradient="to top right, rgba(29,31,37,.5), rgba(29,31,37, 1)">
      </v-img>
    </template>
    <v-row class="pa-10">
      <v-img class="mr-3"
             :src="logoPath"
             max-height="50"
             max-width="50">
      </v-img>
      <v-toolbar-title>coinDesk</v-toolbar-title>
    </v-row>
    <template v-slot:extension>
      <v-tabs right slider-size="5" slider-color="primary">
        <v-tab link
               :to="item.to"
               v-for="item in menuItems"
               v-bind:key="item.title">
          {{ item.title }}
        </v-tab>
        <div class="pr-12"></div>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      backgroundPath: require('@/assets/header.jpg'),
      logoPath: require('@/assets/logo.png'),
      menuItems: [
        {title: "Dashboard", to: "/"},
        {title: "Bitcoin Details", to: "/details"},
        {title: "Bitcoin Umrechner", to: "/converter"},
        {title: "Bitcoin Diagramm", to: "/diagram"},
        {title: "Meine Bitcoin", to: "/my-bitcoinn"}
      ]
    }
  }
}
</script>

<style scoped lang="sass">
</style>
