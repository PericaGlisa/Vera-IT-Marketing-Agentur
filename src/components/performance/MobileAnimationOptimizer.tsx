'use client'

import { useEffect, useState } from 'react'

/**
 * Component that optimizes animations for mobile devices
 * Reduces motion and complexity on low-end devices
 */
export default function MobileAnimationOptimizer() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setShouldReduceMotion(prefersReducedMotion)

    // Detect low-end devices
    const detectLowEndDevice = () => {
      // Check device memory (if available)
      const deviceMemory = (navigator as any).deviceMemory
      const isLowMemory = deviceMemory && deviceMemory <= 2

      // Check connection speed
      const connection = (navigator as any).connection
      const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' ||
        connection.effectiveType === '2g' ||
        connection.effectiveType === '3g'
      )

      // Check hardware concurrency (CPU cores)
      const isLowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2

      // Check user agent for older devices
      const userAgent = navigator.userAgent
      const isOldDevice = /Android [1-4]|iPhone OS [1-9]_|iPad.*OS [1-9]_/.test(userAgent)

      return isLowMemory || isSlowConnection || isLowCPU || isOldDevice
    }

    setIsLowEndDevice(detectLowEndDevice())

    // Apply optimizations based on device capabilities
    const applyOptimizations = () => {
      const root = document.documentElement

      if (shouldReduceMotion || isLowEndDevice) {
        // Disable complex animations
        root.style.setProperty('--animation-duration', '0.1s')
        root.style.setProperty('--transition-duration', '0.1s')
        
        // Add CSS class for reduced motion
        document.body.classList.add('reduce-motion')
        
        // Disable parallax and complex effects
        const parallaxElements = document.querySelectorAll('[data-parallax]')
        parallaxElements.forEach(el => {
          (el as HTMLElement).style.transform = 'none'
        })
        
        // Simplify gradients and shadows
        const complexElements = document.querySelectorAll('.gradient-complex, .shadow-complex')
        complexElements.forEach(el => {
          el.classList.add('simplified')
        })
      } else {
        // Enable full animations for capable devices
        root.style.setProperty('--animation-duration', '0.3s')
        root.style.setProperty('--transition-duration', '0.2s')
        document.body.classList.remove('reduce-motion')
      }

      // Optimize scroll performance
      if (isLowEndDevice) {
        // Disable smooth scrolling on low-end devices
        root.style.scrollBehavior = 'auto'
        
        // Reduce scroll event frequency
        let scrollTimeout: NodeJS.Timeout
        const optimizedScrollHandler = () => {
          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            // Handle scroll events with throttling
          }, 100)
        }
        
        window.addEventListener('scroll', optimizedScrollHandler, { passive: true })
        
        return () => {
          window.removeEventListener('scroll', optimizedScrollHandler)
        }
      }
    }

    applyOptimizations()

    // Monitor performance and adjust
    const monitorPerformance = () => {
      if ('performance' in window && 'memory' in (performance as any)) {
        const memory = (performance as any).memory
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit
        
        // If memory usage is high, enable more aggressive optimizations
        if (memoryUsage > 0.8) {
          document.body.classList.add('high-memory-usage')
          
          // Disable non-essential animations
          const nonEssentialAnimations = document.querySelectorAll('.animate-pulse, .animate-bounce')
          nonEssentialAnimations.forEach(el => {
            el.classList.add('animation-disabled')
          })
        }
      }
    }

    // Monitor performance every 5 seconds
    const performanceInterval = setInterval(monitorPerformance, 5000)

    return () => {
      clearInterval(performanceInterval)
    }
  }, [shouldReduceMotion, isLowEndDevice])

  // Add CSS for optimizations
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      /* Reduced motion styles */
      .reduce-motion *,
      .reduce-motion *::before,
      .reduce-motion *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
      
      /* Simplified styles for low-end devices */
      .simplified {
        background: #1f2937 !important;
        box-shadow: none !important;
        border-radius: 0.375rem !important;
      }
      
      /* High memory usage optimizations */
      .high-memory-usage .animation-disabled {
        animation: none !important;
        transform: none !important;
      }
      
      /* Mobile-specific optimizations */
      @media screen and (max-width: 768px) {
        .mobile-optimize {
          will-change: auto !important;
          transform: none !important;
        }
        
        /* Reduce complexity on mobile */
        .complex-bg {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%) !important;
        }
        
        /* Optimize touch interactions */
        button, a, [role="button"] {
          -webkit-tap-highlight-color: rgba(139, 92, 246, 0.3);
          tap-highlight-color: rgba(139, 92, 246, 0.3);
        }
      }
      
      /* Performance-first animations */
      .perf-optimized {
        transform: translateZ(0);
        will-change: transform, opacity;
      }
      
      /* GPU-accelerated animations only */
      .gpu-animate {
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
    `
    
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

/**
 * Hook for performance-aware animations
 */
export function usePerformanceAwareAnimation() {
  const [canAnimate, setCanAnimate] = useState(true)

  useEffect(() => {
    const checkPerformance = () => {
      // Check if device can handle animations
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const deviceMemory = (navigator as any).deviceMemory
      const isLowMemory = deviceMemory && deviceMemory <= 2
      
      setCanAnimate(!prefersReducedMotion && !isLowMemory)
    }

    checkPerformance()
    
    // Listen for changes in motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkPerformance)
    
    return () => {
      mediaQuery.removeEventListener('change', checkPerformance)
    }
  }, [])

  return { canAnimate }
}

/**
 * Hook for optimized scroll handling
 */
export function useOptimizedScroll(callback: () => void, deps: any[] = []) {
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, deps)
}