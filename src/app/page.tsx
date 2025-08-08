"use client"

import { useEffect } from "react"
import { Hero } from "@/components/home/Hero"
import { Services } from "@/components/home/Services"
import { FormCTA } from "@/components/home/FormCTA"
import { Stats } from "@/components/home/Stats"
import { CTA } from "@/components/home/CTA"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <FormCTA />
      <Stats />
      <CTA />
    </>
  )
}
