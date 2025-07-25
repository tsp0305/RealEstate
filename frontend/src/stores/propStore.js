import { defineStore } from 'pinia'
import propertyService from '@/services/propService'

export const usePropertyStore = defineStore('property', {
    state: () => ({
        properties: [],
        selectedProperty: null,
        loading: false,
        error: null,
    }),

    actions: {
        async fetchOwnerProperties(ownerId) {
            this.loading = true
            this.error = null
            try {
                const data = await propertyService.getAllPropertiesByOwner(ownerId)
                this.properties = data
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to fetch owner properties'
            } finally {
                this.loading = false
            }
        },

        async fetchAllProperties() {
            this.loading = true
            this.error = null
            try {
                const data = await propertyService.getAllProperties()
                this.properties = data.data
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to fetch properties'
            } finally {
                this.loading = false
            }
        },

        async fetchPropertyById(id) {
            this.loading = true
            this.error = null
            try {
                const property = await propertyService.showProperty(id)
                this.selectedProperty = property
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to fetch property'
            } finally {
                this.loading = false
            }
        },

        async addProperty(data) {
            this.loading = true
            this.error = null
            try {
                const newProperty = await propertyService.postProperty(data)
                this.properties.push(newProperty)
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to add property'
            } finally {
                this.loading = false
            }
        },

        async updateProperty(id, data) {
            this.loading = true
            this.error = null
            try {
                const updatedProperty = await propertyService.updateProperty(id, data)
                this.properties = this.properties.map(p =>
                    p.id === id ? updatedProperty : p
                )
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to update property'
            } finally {
                this.loading = false
            }
        },

        async deleteProperty(id) {
            this.loading = true
            this.error = null
            try {
                await propertyService.deleteProperty(id)
                this.properties = this.properties.filter(p => p.id !== id)
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to delete property'
            } finally {
                this.loading = false
            }
        }
    }
})
