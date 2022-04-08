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

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'DefaultLayout',
  data() {
    return {};
  },
});
</script>
