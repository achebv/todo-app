import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    filter: 'all' // 'all', 'active', 'completed'
  }),
  
  getters: {
    filteredTodos: (state) => {
      switch (state.filter) {
        case 'active':
          return state.todos.filter(todo => !todo.completed)
        case 'completed':
          return state.todos.filter(todo => todo.completed)
        default:
          return state.todos
      }
    }
  },
  
  actions: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
    },
    
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    
    setFilter(filter) {
      this.filter = filter
    }
  }
}) 