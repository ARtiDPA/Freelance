/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.jsx",
    "./src/widgets/header/Header.jsx",
    "./src/pages/main/Main.jsx",
    "./src/pages/main/components/Welcome.jsx",
    "./src/pages/auth/SignUp.jsx",
    "./src/pages/auth/SignIn.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

