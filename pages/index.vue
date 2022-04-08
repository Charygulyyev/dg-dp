<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <DraggBoxes />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import DraggBoxes from '../components/DraggBoxes.vue';
export default Vue.extend({
  name: 'IndexPage',
  components: {
    DraggBoxes,
  },
});
</script>
