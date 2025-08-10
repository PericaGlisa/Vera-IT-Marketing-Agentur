'use client';

import { useEffect } from 'react';
import { useAnalyticsConsent, useMarketingConsent } from '@/hooks/useCookieConsent';
import { shouldLoadAnalytics, shouldLoadMarketing } from '@/lib/cookie-utils';

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

/**
 * Analytics component that respects cookie consent
 * Only loads tracking scripts when user has given appropriate consent
 */
export default function Analytics() {
  const analyticsConsent = useAnalyticsConsent();
  const marketingConsent = useMarketingConsent();

  // Load Google Analytics when analytics consent is given
  useEffect(() => {
    if (analyticsConsent && shouldLoadAnalytics()) {
      loadGoogleAnalytics();
    }
  }, [analyticsConsent]);

  // Load marketing scripts when marketing consent is given
  useEffect(() => {
    if (marketingConsent && shouldLoadMarketing()) {
      loadMarketingScripts();
    }
  }, [marketingConsent]);

  return null; // This component doesn't render anything
}

/**
 * Load Google Analytics with GDPR-compliant settings
 */
function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return;
  
  // Check if already loaded
  if (window.gtag) return;
  
  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    // GDPR compliance settings
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure',
    // Respect user's privacy preferences
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Custom cookie settings
    cookie_expires: 63072000, // 2 years in seconds
    cookie_update: true,
    cookie_prefix: '_ga_vera_',
    // Page view tracking
    send_page_view: true
  });
  
  // Track initial page view
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    custom_parameter: 'cookie_consent_given'
  });
  
  console.log('Google Analytics loaded with cookie consent');
}

/**
 * Load marketing scripts (placeholder for future implementation)
 */
function loadMarketingScripts() {
  if (typeof window === 'undefined') return;
  
  // Example: Load Facebook Pixel
  // loadFacebookPixel();
  
  // Example: Load Google Ads
  // loadGoogleAds();
  
  // Example: Load LinkedIn Insight Tag
  // loadLinkedInInsight();
  
  console.log('Marketing scripts loaded with cookie consent');
}

/**
 * Example: Facebook Pixel implementation
 * Uncomment and configure when needed
 */
/*
function loadFacebookPixel() {
  const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  if (!FACEBOOK_PIXEL_ID) return;
  
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  window.fbq('init', FACEBOOK_PIXEL_ID);
  window.fbq('track', 'PageView');
}
*/

/**
 * Example: Google Ads implementation
 * Uncomment and configure when needed
 */
/*
function loadGoogleAds() {
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  if (!GOOGLE_ADS_ID) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);
  
  window.gtag('config', GOOGLE_ADS_ID);
}
*/

/**
 * Track custom events (only if analytics consent is given)
 */
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  if (!shouldLoadAnalytics()) return;
  if (!window.gtag) return;
  
  window.gtag('event', eventName, {
    ...parameters,
    cookie_consent: 'given'
  });
}

/**
 * Track page views (only if analytics consent is given)
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined') return;
  if (!shouldLoadAnalytics()) return;
  if (!window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title
  });
}

/**
 * Track conversions (only if marketing consent is given)
 */
export function trackConversion(conversionId: string, parameters?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  if (!shouldLoadMarketing()) return;
  if (!window.gtag) return;
  
  window.gtag('event', 'conversion', {
    send_to: conversionId,
    ...parameters,
    cookie_consent: 'given'
  });
}

// Type declarations for global objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
  }
}