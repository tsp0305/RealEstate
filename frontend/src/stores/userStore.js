import { defineStore } from 'pinia'
import router from '@/router'
import userService from '../services/userService'

export const userStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false,
        error: null,

    }),

    actions: {
        async login(data) {

            try {
                const res = await userService.login(data)

                const { token, user } = res.data

                localStorage.setItem('token', token)

                localStorage.setItem('id', user.id)

                this.isAuthenticated = true

                this.user = user

                this.error = null

                await this.fetchUser()

                if (user.role === 'tenant') {
                    router.push('/dashboard/tenant')
                } else if (user.role === 'owner') {
                    router.push('/dashboard/owner')
                } else {
                    router.push('/')
                }
            }
            catch (err) {
                this.error = err.response?.data?.message || 'Login failed'
                this.isAuthenticated = false
                this.user = null

            }

        },

        async signUp(data) {
            try {
                this.error = null
                await userService.signUp(data)
                router.push('/login')
            } catch (err) {
                this.error = err.response?.data?.message || 'Signup failed'
            }
        }
        ,
        async fetchUser() {
            try {
                const response = await userService.getCurrentUser()
                const { data } = response
                this.user = data.user
                this.isAuthenticated = true
            } catch (err) {
                console.error('Fetch user error:', err)
                this.logout()
            }
        },

        async logout() {
            try {
                await userService.logout()
            } catch (err) {
                console.error('Logout error:', err)
            }
            this.user = null
            this.isAuthenticated = false
            this.error = null
            localStorage.removeItem('token')
            router.push('/login')
        }
        ,
        async initializeAuth() {
            const token = localStorage.getItem('token')
            if (token) {
                await this.fetchUser()
            }
        }
    }



})