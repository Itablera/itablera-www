import { Layout } from "./components/Layout"
import { ThemeToggle } from "./components/ThemeToggle"
import { Logo } from "./components/Logo"
import { EmailLink } from "./components/EmailLink"
import { ThemeProvider } from "./context/ThemeContext"
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeToggle />
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 px-4">
          <Logo />
          <EmailLink />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App

