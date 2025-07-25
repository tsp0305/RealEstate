<template>
    <div class="p-6">
        <h1 class="text-2xl font-semibold mb-4">Available Properties</h1>

        <div v-if="propertyStore.loading" class="mb-2">Loading properties...</div>
        <div v-if="propertyStore.error" class="mb-2 text-red-600">{{ propertyStore.error }}</div>

        <div v-if="!propertyStore.loading && propertyStore.properties.length === 0">
            <p>No properties available.</p>
        </div>

        <ShowList v-else :table="propertyTable" @edit-item="editProperty" @delete-item="deleteProperty" />
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usePropertyStore } from '@/stores/propStore'
import ShowList from '@/components/TableView.vue'

const propertyStore = usePropertyStore()

onMounted(async () => {
    await propertyStore.fetchAllProperties()
    console.log('Fetched properties:', propertyStore.properties)
})

const headerDisplay = ['ID', 'Title', 'Location', 'Price', 'Type']
const headerKeys = ['id', 'title', 'location', 'price', 'type']

const propertyTable = computed(() => ({
    headerDisplay,
    headerKeys,
    list: Array.isArray(propertyStore.properties) ? propertyStore.properties : []
}))

function editProperty(item) {
    console.log('Edit:', item)
    // Implement your edit logic here
}

function deleteProperty(id) {
    propertyStore.deleteProperty(id)
}
</script>
