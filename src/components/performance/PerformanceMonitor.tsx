'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

interface Metric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
}

/**
 * Performance monitoring component that tracks Core Web Vitals
 * and sends data to analytics when consent is given
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only track performance metrics in production
    if (process.env.NODE_ENV !== 'production') return

    const sendToAnalytics = (metric: Metric) => {
      // Check if analytics consent is given
      const analyticsConsent = localStorage.getItem('cookie-consent-analytics')
      if (analyticsConsent !== 'true') return

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          custom_parameter_rating: metric.rating,
          non_interaction: true
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric)
      }
    }

    // Track Core Web Vitals
    onCLS(sendToAnalytics)
    onINP(sendToAnalytics) // INP replaces FID in web-vitals v5
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)

    // Track custom performance metrics
    const trackCustomMetrics = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Track page load time
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        if (loadTime > 0) {
          sendToAnalytics({
            name: 'page_load_time',
            value: loadTime,
            rating: loadTime < 2000 ? 'good' : loadTime < 4000 ? 'needs-improvement' : 'poor',
            delta: 0,
            id: 'page-load-' + Date.now()
          })
        }

        // Track DOM content loaded time
        const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
        if (domContentLoaded > 0) {
          sendToAnalytics({
            name: 'dom_content_loaded',
            value: domContentLoaded,
            rating: domContentLoaded < 1500 ? 'good' : domContentLoaded < 3000 ? 'needs-improvement' : 'poor',
            delta: 0,
            id: 'dom-loaded-' + Date.now()
          })
        }
      }
    }

    // Track metrics after page load
    if (document.readyState === 'complete') {
      trackCustomMetrics()
    } else {
      window.addEventListener('load', trackCustomMetrics)
    }

    return () => {
      window.removeEventListener('load', trackCustomMetrics)
    }
  }, [])

  return null // This component doesn't render anything
}

/**
 * Hook to track custom performance events
 */
export function usePerformanceTracking() {
  const trackEvent = (eventName: string, duration: number, additionalData?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const analyticsConsent = localStorage.getItem('cookie-consent-analytics')
      if (analyticsConsent === 'true') {
        window.gtag('event', 'timing_complete', {
          name: eventName,
          value: Math.round(duration),
          event_category: 'Performance',
          ...additionalData
        })
      }
    }
  }

  const measureAsync = async <T,>(name: string, asyncFunction: () => Promise<T>): Promise<T> => {
    const startTime = performance.now()
    try {
      const result = await asyncFunction()
      const duration = performance.now() - startTime
      trackEvent(name, duration, { status: 'success' })
      return result
    } catch (error) {
      const duration = performance.now() - startTime
      trackEvent(name, duration, { status: 'error' })
      throw error
    }
  }

  return { trackEvent, measureAsync }
}

// Type declarations for global objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}