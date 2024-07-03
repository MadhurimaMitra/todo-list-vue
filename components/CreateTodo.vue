<template>
    <section>
        <h1 class="font-light mb-2">CREATE A TODO</h1>
        <p class="text-sm font-semibold text-grey mb-2">What's on your todo list?</p>
        <input class="w-full bg-white rounded-md placeholder:font-normal placeholder:text-grey py-2 px-6 mb-6" v-model="todo" placeholder="e.g. do an assignment">
        <p class="text-sm font-semibold text-grey mb-2">Pick a category</p>
        <div class="flex lg:flex-row sm:flex-col gap-3 w-full mb-6">
            <div class="basis-1/2 bg-white text-center rounded-md py-4 flex items-center justify-center gap-4 border-2 border-pink-400">
                <input v-model="selected" type="radio" id="business" value="business" name="category" class="appearance-none">
                <div class="border border-pink-400 w-6 h-6 rounded-full flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full" :class="{'bg-pink-400': selected=='business'}"></div>
                </div>
                <label class="text-lg cursor-pointer" for="business">Business</label>
            </div>
            <div class="basis-1/2 bg-white text-center rounded-md py-4 flex items-center justify-center gap-4 border-2 border-blue-400">
                <input v-model="selected" type="radio" id="personal" value="personal" name="category" class="appearance-none">
                <div class="border border-blue-400 w-6 h-6 rounded-full flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full" :class="{'bg-blue-400': selected=='personal'}"></div>
                </div>
                <label class="text-lg cursor-pointer" for="personal">Personal</label>
            </div>
        </div>
        <button class="w-full bg-pink-500 text-white rounded-md py-4 mb-8" @click="handleClick()">Add todo</button>
        <TodoList :listCheck="listCheck" :todos="todos"></TodoList>
    </section>
</template>

<script>
export default {
    data() {
        return {
            listCheck: false,
            todo: '',
            selected: '',
            todos: [],
            items: []
        }
    },
    
    methods: {
        handleClick() {
            if (this.todo.length != 0 && this.selected.length != 0) {
                this.listCheck = true
                let obj = {}
                obj.value = this.todo
                obj.category = this.selected
                obj.checked = false
                this.todos.push(obj)
                localStorage.setItem('todoList', JSON.stringify(this.todos))
                this.todo = ''
                this.selected = ''
            }
            
        },
    },
    mounted() {
        this.todos = JSON.parse(localStorage.getItem('todoList')) || []
        if (this.todos.length != 0) {
                this.listCheck = true
            }
    }
}
</script>