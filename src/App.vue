<template>
  <div id="app">
    <h1>Todo App</h1>
    
    <div v-if="todoStore.error" class="error">
      {{ todoStore.error }}
    </div>
    
    <div class="todo-input">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="What needs to be done?"
        :disabled="todoStore.loading"
      >
      <button @click="addTodo" :disabled="todoStore.loading">Add</button>
    </div>

    <div class="filters">
      <button 
        v-for="filter in filters" 
        :key="filter.value"
        :class="{ active: currentFilter === filter.value }"
        @click="setFilter(filter.value)"
        :disabled="todoStore.loading"
      >
        {{ filter.label }}
      </button>
    </div>

    <div v-if="todoStore.loading" class="loading">
      Loading...
    </div>

    <ul v-else class="todo-list">
      <li v-for="todo in filteredTodos" :key="todo.id" :class="{ completed: todo.completed }">
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
          :disabled="todoStore.loading"
        >
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)" :disabled="todoStore.loading">×</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from './stores/todo'

export default {
  name: 'App',
  
  data() {
    return {
      newTodo: '',
      filters: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Completed', value: 'completed' }
      ]
    }
  },

  computed: {
    todoStore() {
      return useTodoStore()
    },
    
    filteredTodos() {
      return this.todoStore.filteredTodos
    },
    
    currentFilter() {
      return this.todoStore.filter
    }
  },

  methods: {
    async addTodo() {
      if (this.newTodo.trim()) {
        await this.todoStore.addTodo(this.newTodo.trim())
        this.newTodo = ''
      }
    },
    
    async toggleTodo(id) {
      await this.todoStore.toggleTodo(id)
    },
    
    async removeTodo(id) {
      await this.todoStore.removeTodo(id)
    },
    
    setFilter(filter) {
      this.todoStore.setFilter(filter)
    }
  },

  async created() {
    await this.todoStore.initTodos()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.todo-input {
  margin: 20px 0;
  display: flex;
  gap: 10px;
}

.todo-input input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

.filters {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.filters button {
  background-color: #f8f9fa;
  color: #2c3e50;
}

.filters button.active {
  background-color: #4CAF50;
  color: white;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.todo-list li.completed span {
  text-decoration: line-through;
  color: #888;
}

.todo-list li input[type="checkbox"] {
  margin-right: 10px;
}

.todo-list li span {
  flex: 1;
  text-align: left;
}

.todo-list li button {
  background-color: #dc3545;
  padding: 4px 8px;
}

.todo-list li button:hover:not(:disabled) {
  background-color: #c82333;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #666;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}
</style> 