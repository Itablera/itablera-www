import { useTheme } from "../hooks/useTheme"

export function Logo() {
  const { theme } = useTheme()

  return (
    <div
      className="mb-8 h-[200px] w-full max-w-[600px] bg-[url('/logo2.svg')] bg-contain bg-center bg-no-repeat transition-all duration-300"
      style={{
        filter: theme === "light" ? "invert(1)" : "none",
      }}
    />
  )
}

