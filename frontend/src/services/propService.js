import api from '@/services/api'

export default {
    async getAllProperties() {
        const response = await api.get('/prop/')
        return response.data
    },

    async getAllPropertiesByOwner(ownerId) {
        const response = await api.get('/prop/', {
            params: { ownerId }
        })
        return response.data
    },

    async postProperty(data) {
        const response = await api.post('/prop/', data)
        return response.data
    },

    async updateProperty(id, data) {
        const response = await api.put(`/prop/${id}`, data)
        return response.data
    },

    async deleteProperty(id) {
        const response = await api.delete(`/prop/${id}`)
        return response.data
    },

    async showProperty(id) {
        const response = await api.get(`/prop/${id}`)
        return response.data
    }
}
