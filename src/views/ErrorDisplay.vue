<script lang="ts" setup>
defineProps({
  error: {
    type: String,
    default: null,
  }
})
</script>

<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>
