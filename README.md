# Vue.js Todo App (Interview Version)

A simple Todo application built with Vue.js 2, Express, and MongoDB. This application demonstrates basic full-stack development skills with a focus on clean code and best practices.

[![Vue.js](https://img.shields.io/badge/Vue.js-2.x-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## 🌟 Features

- ✨ Simple and clean UI
- 📱 Responsive design
- 🔄 Real-time task updates
- 💾 MongoDB data persistence
- 🎯 Basic task management (add and display)

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local installation)

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/achebv/todo-app.git
cd todo-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ..
npm install
```

4. Create a `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todo-app
```

## 🚀 Development

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
todo-app/
├── backend/
│   ├── server.js        # Express server
│   ├── package.json     # Backend dependencies
│   └── .env            # Backend environment variables
├── src/
│   ├── App.vue         # Main Vue component
│   └── main.js         # Vue entry point
├── index.html          # HTML entry point
└── package.json        # Frontend dependencies
```

## 🎯 API Endpoints

- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Add a new task
  - Body: `{ "text": "Task description" }`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- GitHub: [@achebv](https://github.com/achebv)

---

Made with ❤️ using Vue.js and Express 