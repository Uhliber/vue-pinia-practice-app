<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import EventCard from '../components/EventCard.vue'
import { useEventStore } from '../stores/EventStore'
import { useRouter } from 'vue-router'

const eventStore = useEventStore()
const router = useRouter()

onMounted(() => {
  eventStore.fetchEvents().catch(error => {
    router.push({
      name: 'ErrorDisplay',
      params: { error: error }
    })
  })
})

const events = computed(() => {
  return eventStore.events
})
</script>

<template>
  <router-link :to="{ name: 'EventCreate' }">Create Event</router-link>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard
      v-for="event in eventStore.events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
