<template>
    <div class="form-box">
        <h2>Login</h2>
        <form @submit.prevent="submitLogin">
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p v-if="auth.error" class="error">{{ auth.error }}</p>
        <p class="switch-link">
            Don't have an account? <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { userStore } from '@/stores/userStore'

const auth = userStore()
const email = ref('')
const password = ref('')

const submitLogin = () => {
    auth.login({ email: email.value, password: password.value })
}
</script>

<style scoped>
.form-box {
    max-width: 400px;
    margin: 60px auto;
    padding: 2.5rem 2rem;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid #e0e0e0;
    font-family: 'Segoe UI', Arial, sans-serif;
    transition: box-shadow 0.3s ease;
}

.form-box:hover {
    box-shadow: 0 8px 36px rgba(0, 0, 0, 0.12);
}

h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333333;
    font-size: 1.8rem;
    font-weight: 600;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    margin-bottom: 1.2rem;
    padding: 12px 14px;
    border: 1.5px solid #d1d1d1;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s;
}

input:focus {
    outline: none;
    border-color: #6c63ff;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.1);
}

button {
    padding: 12px;
    background-color: #6c63ff;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #584df2;
}

.error {
    color: #d9534f;
    text-align: center;
    margin-top: 1rem;
    font-size: 0.95rem;
}

.switch-link {
    text-align: center;
    margin-top: 1.2rem;
    font-size: 0.95rem;
}

.switch-link a {
    color: #6c63ff;
    font-weight: 600;
    text-decoration: none;
}

.switch-link a:hover {
    text-decoration: underline;
}
</style>