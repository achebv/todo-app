<template>
  <div id="app">
    <h1>Todo App</h1>
    
    <div v-if="error" class="error">
      {{ error }}
    </div>
    
    <div class="todo-input">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo"
        placeholder="What needs to be done?"
        :disabled="loading"
      >
      <button @click="addTodo" :disabled="loading">Add</button>
    </div>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <ul v-else class="todo-list">
      <li v-for="todo in todos" :key="todo._id" :class="{ completed: todo.completed }">
        <input 
          type="checkbox" 
          :checked="todo.completed"
          disabled
        >
        <span>{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export default {
  name: 'App',
  
  data() {
    return {
      todos: [],
      newTodo: '',
      loading: false,
      error: null
    }
  },

  methods: {
    async fetchTodos() {
      this.loading = true
      try {
        const response = await axios.get(`${API_URL}/tasks`)
        this.todos = response.data
      } catch (error) {
        this.error = 'Error fetching todos: ' + error.message
      } finally {
        this.loading = false
      }
    },

    async addTodo() {
      if (!this.newTodo.trim()) return

      this.loading = true
      try {
        const response = await axios.post(`${API_URL}/tasks`, {
          text: this.newTodo.trim()
        })
        this.todos.unshift(response.data)
        this.newTodo = ''
      } catch (error) {
        this.error = 'Error adding todo: ' + error.message
      } finally {
        this.loading = false
      }
    }
  },

  created() {
    this.fetchTodos()
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