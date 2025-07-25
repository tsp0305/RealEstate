<template>
    <div class="owner-dashboard">
        <h1>Your Properties</h1>

        <div v-if="loading">Loading properties...</div>
        <div v-if="error" class="error">{{ error }}</div>

        <TableView v-if="!loading && properties.length" :table="{ header: headers, list: properties }" mode="property"
            @edit-item="editProperty" @delete-item="deleteProperty" />

        <div v-else-if="!loading && !properties.length">
            No properties found.
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { userStore } from '@/stores/userStore'
import { usePropertyStore } from '@/stores/propStore'
import TableView from '@/components/TableView.vue'

const authStore = userStore()
const propertyStore = usePropertyStore()

const { properties, loading, error } = propertyStore

const headers = ['id', 'name', 'type', 'location', 'price']  // Your column keys

onMounted(() => {
    const userId = authStore.user?.id
    if (userId) {
        propertyStore.fetchOwnerProperties(userId)
    }
})

function editProperty(item) {
    // handle edit logic
    console.log('Editing:', item)
}

function deleteProperty(id) {
    propertyStore.deleteProperty(id)
}
</script>

<style scoped>
.owner-dashboard {
    padding: 1rem;
}

.error {
    color: red;
}
</style>
