<template>
    <section class="lg:flex justify-between mb-6">
        <div class="flex gap-2 text-2xl font-semibold sm:mb-2">
            <h1>Hi, </h1>
            <input 
                v-model="username" @change="handleUsernameChange()" 
                class="bg-light placeholder:font-normal placeholder:text-xl placeholder:text-grey w-52" 
                type="text" name="" id="enteredUsername" placeholder="ENTER YOUR NAME">
        </div>
        <button @click="handleClear()" class="bg-red-500 text-white text-sm p-2 rounded">Clear All</button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        handleUsernameChange() {
            localStorage.setItem('username', this.username)
        },
        handleClear() {
            localStorage.clear()
            location.reload()
        }
    },
    mounted() {
        this.username = localStorage.getItem('username')
    }
}
</script>