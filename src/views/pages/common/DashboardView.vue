<template>
  <div className="card">
    <h5>Empty Page</h5>
    <p>Use this page to start from scratch and place your custom content.</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "primevue/button";

export default defineComponent({
  name: "Dashboard",
  components: {
    Button,
  },
});
</script>
