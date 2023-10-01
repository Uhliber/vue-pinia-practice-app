<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    error: {
      type: String,
      default: null,
    }
  }
})
</script>

<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>
