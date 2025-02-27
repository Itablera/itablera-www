import type { ReactNode } from "react"
import { useTheme } from "../hooks/useTheme"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen w-full ${theme}`}>
      <div className="relative min-h-screen w-full bg-gradient-to-b from-background to-background/80 text-foreground transition-colors duration-300">
        {children}
      </div>
    </div>
  )
}

