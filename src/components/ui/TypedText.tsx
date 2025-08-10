"use client"

import { useEffect, useState } from "react"

interface TypedTextProps {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
  className?: string
}

export function TypedText({ strings, typeSpeed = 100, backSpeed = 50, loop = true, className = "" }: TypedTextProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentStringIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentString.length) {
            setCurrentText(currentString.slice(0, currentText.length + 1))
          } else {
            // Finished typing, start deleting after pause
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentString.slice(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next string
            setIsDeleting(false)
            setCurrentStringIndex((prev) =>
              loop ? (prev + 1) % strings.length : Math.min(prev + 1, strings.length - 1),
            )
          }
        }
      },
      isDeleting ? backSpeed : typeSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentStringIndex, isDeleting, strings, typeSpeed, backSpeed, loop])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
