<script lang="ts">
import { defineComponent } from 'vue'
import EventCard from '../components/EventCard.vue'
import { useEventStore } from '../stores/EventStore'

export default defineComponent({
  components: {
    EventCard
  },
  setup() {
    const eventStore = useEventStore()

    return {
      eventStore,
    }
  },
  created() {
    this.eventStore.fetchEvents().catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    events() {
      return this.eventStore.events
    }
  }
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
