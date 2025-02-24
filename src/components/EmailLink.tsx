import type React from "react"
export function EmailLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = "mailto:" + "hi" + "@" + "itablera.se"
  }

  return (
    <a
      href="#"
      onClick={handleClick}
      className="text-center text-lg font-medium text-foreground hover:underline sm:text-xl md:text-2xl"
    >
      {"hi" + "@" + "itablera.se"}
    </a>
  )
}

