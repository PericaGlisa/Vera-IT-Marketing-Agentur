"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
      primary: "primary-gradient text-white hover:shadow-lg hover:scale-105",
      secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-gray-700",
      outline: "border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
      ghost: "text-gray-300 hover:text-white hover:bg-zinc-800",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm sm:text-base",
      lg: "px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg min-h-[44px] sm:min-h-[48px]",
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: variant === "primary" ? 1.05 : 1.02 }}
        whileTap={{ scale: 0.95 }}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </motion.button>
    )
  },
)

Button.displayName = "Button"
