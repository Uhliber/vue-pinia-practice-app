<script lang="ts" setup>
import { computed, defineComponent, onMounted } from 'vue'
import { useEventStore } from '../stores/EventStore'
import { useRouter } from 'vue-router'

const eventStore = useEventStore()
const router = useRouter()

const props = defineProps({
  id: {
    type: String,
    required: true,
  }
})

onMounted(() => {
  eventStore.fetchEvent(props.id).catch(error => {
    router.push({
      name: 'ErrorDisplay',
      params: { error: error }
    })
  })
})

const event = computed(() => {
  return eventStore.event
})
</script>

<template>
  <div v-if="event">
    <span>{{ event.category }}</span>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
