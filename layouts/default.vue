<template>
  <v-app>
    <v-app-bar app>v-app bar here</v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DefaultLayout",
  data() {
    return {};
  },
});
</script>
<style lang="sass">
@import ../assets/sass/main
</style>
