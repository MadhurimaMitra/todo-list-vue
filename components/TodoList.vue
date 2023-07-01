<template>
    <section v-if="todoList">
        <h1 class="mb-4">TODO LIST</h1>

        <div class="flex justify-between items-center bg-white rounded-md py-4 px-4 mb-4" v-for="(todo, index) in todos" :key="index">
            <div class="">
                <input v-model="checked" type="checkbox" id="item">
                <label for="item" :class="{'line-through': checked}">{{ todo }}</label>
            </div>
            <button class="bg-red text-white text-sm p-2 rounded" @click="handleDeleteClick(todos, index)">Delete</button>
        </div>
        
    </section>
</template>

<script>
export default {
    props: {
        'todos': Array,
        'todoList': Boolean,
        'selected': String
    },
    data() {
        return {
            checked: false
        }
    },
    methods: {
        handleDeleteClick(todos, index) {
            todos.splice(index, 1)
        }
    }
}
</script>
