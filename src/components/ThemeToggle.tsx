import { Sun, Moon } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-4 top-4 rounded-full p-2 text-foreground dark:text-white hover:bg-muted"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  )
}

