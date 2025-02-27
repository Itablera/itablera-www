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
      className="text-center text-xl tracking-widest font-light font-sans text-gray-900 dark:text-white hover:underline"
    >
      {"hi" + "@" + "itablera.se"}
    </a>
  )
}

