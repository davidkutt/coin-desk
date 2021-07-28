<template>
  <div class="text-center pt-5">
    <h1 class="heading my-10">{{ value }}</h1>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: {
    value: String,
  }
}
</script>

<style lang="sass">
.heading
  display: inline-block
  height: 50px
  box-shadow: 0 25px 0 -23px var(--v-primary-base)
</style>
