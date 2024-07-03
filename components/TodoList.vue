<template>
    <section v-if="listCheck"> 
        <h1>TODO LIST</h1>
        <div 
            class="flex justify-between items-center bg-white rounded-md py-4 px-4 my-4" 
            :class="{'border-2 border-pink-400': todo.category == 'business', 'border-2 border-blue-400': todo.category == 'personal'}"
            v-for="(todo, index) in todos" :key="index">
            <div class="flex items-center gap-4" @click="todo.checked = !todo.checked">
                <input v-model="todo.checked" type="checkbox" class="appearance-none">
                <div 
                    class="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" 
                    :class="{
                        'border border-pink-400': todo.category=='business', 
                        'border border-blue-400': todo.category=='personal', 
                    }">
                    <div 
                        class="w-4 h-4 rounded-full" 
                        :class="{'bg-pink-400': todo.checked && todo.category=='business', 'bg-blue-400': todo.checked && todo.category=='personal'}">
                    </div>
                </div>
                <span class="cursor-pointer" :class="{'line-through text-neutral-500': todo.checked}">{{ todo.value }}</span>
            </div>
            <button class="bg-red-500 text-white text-sm p-2 rounded" @click="handleDeleteClick(todos, index)">Delete</button>
        </div>
        
    </section>
</template>

<script>

export default {
    props: {
        'listCheck': Boolean,
        'todos': Array,
    },
    data() {
        return {
            
        }
    },
    
    methods: {
        handleDeleteClick(todos, index) {
            todos.splice(index, 1)
        },
    },
    mounted() {
        
    }
}
</script>