<template>
  <div>
    <ul v-for="(dog, index) in dogs" :key="index">
      <li>{{ dog.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Dog, getDogs } from "@/store";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dogs",
  data() {
    return {
      dogs: [] as Dog[]
    };
  },
  mounted() {
    this.dogs = getDogs();
  }
});
</script>
