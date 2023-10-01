<script lang="ts">
import { defineComponent } from 'vue'
import { useEventStore } from '../stores/EventStore'
import { EventItem } from '@/types'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  setup() {
    const eventStore = useEventStore()

    return {
      eventStore
    }
  },
  created() {
    this.eventStore.fetchEvent(this.id).catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    event(): EventItem {
      return this.eventStore.event
    }
  }
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
