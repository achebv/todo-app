# Vue.js Todo App

A modern, responsive Todo application built with Vue.js 2, Vite, Pinia, and Firebase. This application demonstrates best practices in Vue.js development, state management, and real-time data synchronization.

[![Vue.js](https://img.shields.io/badge/Vue.js-2.x-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-2.x-yellow?style=flat&logo=vue.js&logoColor=white)](https://pinia.vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.x-FFCA28?style=flat&logo=firebase&logoColor=white)](https://firebase.google.com/)

## 🌟 Features

- ✨ Real-time data synchronization with Firebase Firestore
- 📱 Responsive design for all devices
- 🎨 Clean and modern UI
- 🔄 State management with Pinia
- ⚡ Fast development with Vite
- 🎯 Filter todos by status (All/Active/Completed)
- 💾 Persistent data storage
- 🚀 Deployed on Firebase Hosting

## 🚀 Live Demo

Check out the live application: [Todo App](https://todo-sample-app-2b17f.web.app/)

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli) (for deployment)

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/achebv/todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Get your Firebase configuration

4. Create a `.env` file in the root directory with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

To build the application for production:

```bash
npm run build
```

## 🚀 Deployment

1. Login to Firebase:
```bash
firebase login
```

2. Initialize Firebase (if not already done):
```bash
firebase init
```

3. Deploy to Firebase:
```bash
npm run deploy
```

## 🏗️ Project Structure

```
todo-app/
├── src/
│   ├── firebase/     # Firebase configuration
│   ├── stores/       # Pinia stores
│   ├── App.vue       # Main application component
│   └── main.js       # Application entry point
├── public/           # Static assets
├── index.html        # HTML entry point
└── vite.config.js    # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- GitHub: [@achebv](https://github.com/achebv)

---

Made with ❤️ using Vue.js 