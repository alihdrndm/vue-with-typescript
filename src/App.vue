<template>
  <div>
    <app-dogs></app-dogs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dogs from "@/components/Dogs.vue";

export default defineComponent({
  name: "App",
  components: {
    "app-dogs": Dogs
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
