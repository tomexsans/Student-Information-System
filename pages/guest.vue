<script setup>
import { userSessionStore } from '~/stores/userSession'


const store = userSessionStore()


const processFormSubmission = () => {
    store.isAuthenticated = true
    navigateTo('dashboard/home')
}

</script>

<template>
    <NuxtLayout>
        <div>
            <form @submit.prevent="processFormSubmission">
                <div class="w-[800px] border mx-auto p-10 mt-[15%]
                rounded-tr-2xl rounded-bl-2xl bg-white
                shadow-2xl">
                    <div class="mb-5">
                        <label for="username">Username</label>
                        <form-input type="text" default-input/>
                    </div>
                    <div class="mb-5">
                        <label for="username">Password</label>
                        <form-input type="password" default-input/>
                    </div>
                    <div>
                        <form-button button button-green>LOGIN</form-button>
                    </div>
                </div>
            </form>
        </div>
    </NuxtLayout>
</template>

<style>
    html,body{
        @apply bg-teal-600;
    }
</style>