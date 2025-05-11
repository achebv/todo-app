import { defineStore } from 'pinia'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  query,
  where
} from 'firebase/firestore'
import { db } from '../firebase/config'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    filter: 'all', // 'all', 'active', 'completed'
    loading: false,
    error: null
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
    async initTodos() {
      this.loading = true
      try {
        const q = query(collection(db, 'todos'))
        onSnapshot(q, (snapshot) => {
          this.todos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
        })
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addTodo(text) {
      try {
        await addDoc(collection(db, 'todos'), {
          text,
          completed: false,
          createdAt: new Date()
        })
      } catch (error) {
        this.error = error.message
      }
    },
    
    async toggleTodo(id) {
      try {
        const todo = this.todos.find(todo => todo.id === id)
        if (todo) {
          await updateDoc(doc(db, 'todos', id), {
            completed: !todo.completed
          })
        }
      } catch (error) {
        this.error = error.message
      }
    },
    
    async removeTodo(id) {
      try {
        await deleteDoc(doc(db, 'todos', id))
      } catch (error) {
        this.error = error.message
      }
    },
    
    setFilter(filter) {
      this.filter = filter
    }
  }
}) 