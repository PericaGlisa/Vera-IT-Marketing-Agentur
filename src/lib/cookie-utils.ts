'use client';

// Cookie consent configuration
export const CONSENT_COOKIE_NAME = 'vera_cookie_consent';
export const CONSENT_DURATION = 12 * 30 * 24 * 60 * 60 * 1000; // 12 months in milliseconds
export const CONSENT_VERSION = '1.0';

// Cookie categories as defined by GDPR
export type CookieCategory = 'essential' | 'functional' | 'analytics' | 'marketing';

// Cookie consent interface
export interface CookieConsent {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  consentGiven: boolean;
  timestamp: number;
  version: string;
}

// Default consent state (only essential cookies enabled)
export const DEFAULT_CONSENT: CookieConsent = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
  consentGiven: false,
  timestamp: Date.now(),
  version: CONSENT_VERSION,
};

/**
 * Get cookie consent from localStorage (client-side only)
 * Returns null if no consent found or if consent is invalid
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!stored) return null;
    
    const consent: CookieConsent = JSON.parse(stored);
    
    // Validate consent structure
    if (
      typeof consent !== 'object' ||
      typeof consent.essential !== 'boolean' ||
      typeof consent.functional !== 'boolean' ||
      typeof consent.analytics !== 'boolean' ||
      typeof consent.marketing !== 'boolean' ||
      typeof consent.consentGiven !== 'boolean' ||
      typeof consent.timestamp !== 'number' ||
      typeof consent.version !== 'string'
    ) {
      return null;
    }
    
    return consent;
  } catch (error) {
    console.error('Error parsing cookie consent:', error);
    return null;
  }
}

/**
 * Set cookie consent in localStorage and document.cookie
 * Also triggers consent change events
 */
export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Store in localStorage for easy access
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consent));
    
    // Also set a simple cookie for server-side access if needed
    const expiryDate = new Date(Date.now() + CONSENT_DURATION);
    document.cookie = `${CONSENT_COOKIE_NAME}=${JSON.stringify(consent)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax; Secure`;
    
    // Trigger custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
      detail: consent
    }));
    
    // Handle analytics and marketing scripts based on consent
    handleScriptLoading(consent);
    
  } catch (error) {
    console.error('Error setting cookie consent:', error);
  }
}

/**
 * Check if user has valid consent
 * Returns false if no consent, expired consent, or wrong version
 */
export async function hasValidConsent(): Promise<boolean> {
  const consent = getCookieConsent();
  if (!consent || !consent.consentGiven) return false;
  
  // Check if consent has expired
  const isExpired = Date.now() - consent.timestamp > CONSENT_DURATION;
  if (isExpired) {
    // Clean up expired consent
    clearCookieConsent();
    return false;
  }
  
  // Check version compatibility
  return consent.version === CONSENT_VERSION;
}

/**
 * Check if specific cookie category is allowed
 */
export function isCategoryAllowed(category: CookieCategory): boolean {
  const consent = getCookieConsent();
  if (!consent || !consent.consentGiven) {
    return category === 'essential'; // Only essential cookies allowed without consent
  }
  
  return consent[category];
}

/**
 * Check if analytics cookies are allowed
 */
export function shouldLoadAnalytics(): boolean {
  return isCategoryAllowed('analytics');
}

/**
 * Check if marketing cookies are allowed
 */
export function shouldLoadMarketing(): boolean {
  return isCategoryAllowed('marketing');
}

/**
 * Check if functional cookies are allowed
 */
export function shouldLoadFunctional(): boolean {
  return isCategoryAllowed('functional');
}

/**
 * Clear all cookie consent data
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(CONSENT_COOKIE_NAME);
  
  // Clear the cookie
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  
  // Trigger event
  window.dispatchEvent(new CustomEvent('cookieConsentCleared'));
}

/**
 * Handle loading/unloading of third-party scripts based on consent
 */
function handleScriptLoading(consent: CookieConsent): void {
  // Google Analytics
  if (consent.analytics) {
    loadGoogleAnalytics();
  } else {
    unloadGoogleAnalytics();
  }
  
  // Marketing scripts (Google Ads, Facebook Pixel, etc.)
  if (consent.marketing) {
    loadMarketingScripts();
  } else {
    unloadMarketingScripts();
  }
  
  // Functional scripts (Chat widgets, etc.)
  if (consent.functional) {
    loadFunctionalScripts();
  } else {
    unloadFunctionalScripts();
  }
}

/**
 * Load Google Analytics if consent given
 */
function loadGoogleAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  // Check if already loaded
  if (window.gtag) return;
  
  // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
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
    anonymize_ip: true, // GDPR compliance
    cookie_flags: 'SameSite=Lax;Secure'
  });
}

/**
 * Unload Google Analytics
 */
function unloadGoogleAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  // Clear Google Analytics cookies
  const gaCookies = document.cookie.split(';').filter(cookie => 
    cookie.trim().startsWith('_ga') || 
    cookie.trim().startsWith('_gid') ||
    cookie.trim().startsWith('_gat')
  );
  
  gaCookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  
  // Remove gtag function
  if (window.gtag) {
    delete window.gtag;
  }
}

/**
 * Load marketing scripts (placeholder - implement based on your needs)
 */
function loadMarketingScripts(): void {
  // Implement loading of marketing scripts like:
  // - Google Ads
  // - Facebook Pixel
  // - LinkedIn Insight Tag
  // - etc.
}

/**
 * Unload marketing scripts and clear their cookies
 */
function unloadMarketingScripts(): void {
  // Clear marketing cookies
  const marketingCookies = document.cookie.split(';').filter(cookie => 
    cookie.trim().startsWith('_fbp') || 
    cookie.trim().startsWith('_fbc') ||
    cookie.trim().startsWith('fr') ||
    cookie.trim().startsWith('tr')
  );
  
  marketingCookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
}

/**
 * Load functional scripts (placeholder - implement based on your needs)
 */
function loadFunctionalScripts(): void {
  // Implement loading of functional scripts like:
  // - Chat widgets
  // - Video players
  // - Maps
  // - etc.
}

/**
 * Unload functional scripts
 */
function unloadFunctionalScripts(): void {
  // Implement unloading of functional scripts
}

/**
 * Get consent summary for display purposes
 */
export function getConsentSummary(): {
  hasConsent: boolean;
  categories: { [key in CookieCategory]: boolean };
  timestamp?: number;
  version?: string;
} {
  const consent = getCookieConsent();
  
  if (!consent || !consent.consentGiven) {
    return {
      hasConsent: false,
      categories: {
        essential: true,
        functional: false,
        analytics: false,
        marketing: false
      }
    };
  }
  
  return {
    hasConsent: true,
    categories: {
      essential: consent.essential,
      functional: consent.functional,
      analytics: consent.analytics,
      marketing: consent.marketing
    },
    timestamp: consent.timestamp,
    version: consent.version
  };
}

// Type declarations for global objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}