import { Layout } from "./components/Layout"
import { ThemeToggle } from "./components/ThemeToggle"
import { Logo } from "./components/Logo"
import { EmailLink } from "./components/EmailLink"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeToggle />
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <Logo />
          <EmailLink />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App

