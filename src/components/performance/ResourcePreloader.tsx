'use client'

import { useEffect } from 'react'

/**
 * Component for preloading critical resources to improve mobile performance
 */
export default function ResourcePreloader() {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (href: string, type = 'font/woff2') => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = 'font'
      link.type = type
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    // Preload Inter font weights used on the page
    preloadFont('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2')
    
    // Preload critical images
    const preloadImage = (src: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = src
      link.as = 'image'
      document.head.appendChild(link)
    }

    // Preload hero background or critical images
    // preloadImage('/hero-bg.webp') // Uncomment if you have hero background

    // Prefetch next likely pages
    const prefetchPage = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    }

    // Prefetch likely next pages after a delay
    setTimeout(() => {
      prefetchPage('/leistungen')
      prefetchPage('/kontakt')
      prefetchPage('/ueber-uns')
    }, 2000)

    // DNS prefetch for external resources
    const dnsPrefetch = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = href
      document.head.appendChild(link)
    }

    dnsPrefetch('https://fonts.googleapis.com')
    dnsPrefetch('https://fonts.gstatic.com')
    dnsPrefetch('https://www.googletagmanager.com')

    // Preconnect to critical third-party origins
    const preconnect = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    }

    preconnect('https://fonts.googleapis.com')
    preconnect('https://fonts.gstatic.com')

  }, [])

  return null
}

/**
 * Hook for lazy loading images with intersection observer
 */
export function useLazyImage() {
  const createLazyImage = (src: string, alt: string, className?: string) => {
    const img = document.createElement('img')
    img.dataset.src = src
    img.alt = alt
    if (className) img.className = className
    img.loading = 'lazy'
    
    // Add intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    })
    
    observer.observe(img)
    return img
  }

  return { createLazyImage }
}