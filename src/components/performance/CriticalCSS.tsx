'use client'

import { useEffect } from 'react'

/**
 * Component for optimizing CSS loading and reducing layout shifts
 */
export default function CriticalCSS() {
  useEffect(() => {
    // Preload critical CSS for better mobile performance
    const preloadCSS = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = 'style'
      link.onload = () => {
        link.rel = 'stylesheet'
      }
      document.head.appendChild(link)
    }

    // Add critical CSS for mobile optimization
    const criticalStyles = `
      /* Critical mobile styles to prevent layout shift */
      .mobile-optimized {
        contain: layout style paint;
        will-change: auto;
      }
      
      /* Optimize animations for mobile */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
      
      /* Mobile-first responsive images */
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
      
      /* Prevent layout shift for loading content */
      .loading-skeleton {
        background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      /* Optimize touch targets for mobile */
      button, a, [role="button"] {
        min-height: 44px;
        min-width: 44px;
        touch-action: manipulation;
      }
      
      /* Improve scrolling performance */
      * {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
      
      /* Optimize font rendering */
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
      }
      
      /* Reduce paint complexity */
      .complex-bg {
        will-change: transform;
        transform: translateZ(0);
      }
      
      /* Mobile viewport optimization */
      @media screen and (max-width: 768px) {
        .desktop-only {
          display: none !important;
        }
        
        /* Reduce motion on mobile for better performance */
        .motion-reduce {
          animation: none !important;
          transition: none !important;
        }
        
        /* Optimize mobile navigation */
        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      }
      
      /* Intersection observer optimization */
      .lazy-load {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      
      .lazy-load.loaded {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Core Web Vitals optimizations */
      .cls-prevent {
        min-height: 1px; /* Prevent layout shift */
      }
      
      .lcp-optimize {
        content-visibility: auto;
        contain-intrinsic-size: 300px;
      }
      
      /* Mobile-specific optimizations */
      @media screen and (max-width: 640px) {
        /* Reduce complexity on small screens */
        .shadow-lg {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        }
        
        /* Optimize gradients for mobile */
        .gradient-complex {
          background: #1f2937 !important;
        }
        
        /* Simplify borders on mobile */
        .border-complex {
          border: 1px solid #374151 !important;
        }
      }
    `

    // Inject critical styles
    const styleElement = document.createElement('style')
    styleElement.textContent = criticalStyles
    document.head.appendChild(styleElement)

    // Optimize font loading
    const optimizeFonts = () => {
      // Add font-display: swap to existing font faces
      const fontFaces = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
      fontFaces.forEach(link => {
        const href = link.getAttribute('href')
        if (href && !href.includes('display=swap')) {
          link.setAttribute('href', href + '&display=swap')
        }
      })
    }

    optimizeFonts()

    // Add viewport meta tag optimization
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover')
    }

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]')
      scripts.forEach(script => {
        const src = script.getAttribute('src')
        if (src && (src.includes('gtag') || src.includes('analytics'))) {
          script.setAttribute('defer', '')
        }
      })
    }

    setTimeout(optimizeThirdPartyScripts, 1000)

  }, [])

  return null
}

/**
 * Hook for implementing intersection observer for lazy loading
 */
export function useLazyLoading() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    )

    // Observe all lazy-load elements
    const lazyElements = document.querySelectorAll('.lazy-load')
    lazyElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}