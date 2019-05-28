<template>
  <div id="app">
    <AppHeader/>

    <div class="container main">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator"
  import AppHeader from "@/components/AppHeader.vue"

  @Component({
    components: {
      AppHeader
    }
  })
  export default class App extends Vue {
  }
</script>

<style lang="sass">
  .main
    margin-top: 16px
    margin-bottom: 16px
</style>
