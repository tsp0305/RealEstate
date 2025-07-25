import api from '@/services/api'

export default {
    getAllUsers: () => api.get('/user/'),
    updateUser: (id, data) => api.put(`/user/${id}`, data),
    signUp: (data) => api.post('/user/signUp', data),
    login: (data) => api.post('/user/login', data),
    getCurrentUser: () => api.get('/user/auth/me'),
    logout: () => api.post('/user/auth/logout'),
    deleteUser: (id) => api.delete(`/user/${id}`)
}
