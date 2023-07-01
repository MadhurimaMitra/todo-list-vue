<template>
    <section>
        <h1 class="font-light mb-2">CREATE A TODO</h1>
        <p class="text-sm font-semibold text-grey mb-2">What's on your todo list?</p>
        <input class="w-full bg-white rounded-md placeholder:font-normal placeholder:text-grey py-2 px-6 mb-6" v-model="todo" placeholder="e.g. do an assignment">
        <p class="text-sm font-semibold text-grey mb-2">Pick a category</p>
        <div class="flex gap-3 w-full mb-6">
            <div class="basis-1/2 bg-white text-center rounded-md py-4">
                <input v-model="selected" type="radio" id="business" value="business">
                <label class="text-lg" for="business">Business</label>
            </div>
            <div class="basis-1/2 bg-white text-center rounded-md py-4">
                <input class="" v-model="selected" type="radio" id="personal" value="personal">
                <label class="text-lg" for="personal">Personal</label>
            </div>
        </div>
        <button class="w-full bg-pink text-white rounded-md py-3 mb-8" @click="handleClick()">Add todo</button>
        <TodoList :todos="todos" :todoList="todoList"></TodoList>
    </section>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
            todos: [],
            selected: '',
            todoList: false
        }
    },
    methods: {
        handleClick() {
            if (this.todo.length != 0 && this.selected.length != 0) {
                this.todoList = true
                this.todos.push(this.todo)
                this.todo = ''
                this.selected = ''
            }
        },
    }
}
</script>