'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  CookieConsent,
  getCookieConsent,
  setCookieConsent,
  hasValidConsent,
  clearCookieConsent,
  DEFAULT_CONSENT,
  CONSENT_VERSION,
  type CookieCategory
} from '@/lib/cookie-utils';

export interface UseCookieConsentReturn {
  // State
  consent: CookieConsent | null;
  hasConsent: boolean;
  showBanner: boolean;
  isLoading: boolean;
  
  // Actions
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: Partial<CookieConsent>) => void;
  updateCategory: (category: CookieCategory, enabled: boolean) => void;
  clearConsent: () => void;
  hideBanner: () => void;
  
  // Utilities
  isCategoryEnabled: (category: CookieCategory) => boolean;
  refreshConsent: () => void;
}

/**
 * Custom hook for managing cookie consent state
 * Provides easy access to consent status and actions for components
 */
export function useCookieConsent(): UseCookieConsentReturn {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasConsent, setHasConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize consent state on mount
  useEffect(() => {
    const initializeConsent = async () => {
      try {
        const storedConsent = getCookieConsent();
        const validConsent = await hasValidConsent();
        
        setConsent(storedConsent);
        setHasConsent(validConsent);
        setShowBanner(!validConsent);
      } catch (error) {
        console.error('Error initializing cookie consent:', error);
        setShowBanner(true);
      } finally {
        setIsLoading(false);
      }
    };

    initializeConsent();
  }, []);

  // Listen for consent changes from other tabs/windows
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      const newConsent = event.detail as CookieConsent;
      setConsent(newConsent);
      setHasConsent(newConsent.consentGiven);
      setShowBanner(!newConsent.consentGiven);
    };

    const handleConsentCleared = () => {
      setConsent(null);
      setHasConsent(false);
      setShowBanner(true);
    };

    // Listen for storage changes (other tabs)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'vera_cookie_consent') {
        if (event.newValue) {
          try {
            const newConsent = JSON.parse(event.newValue) as CookieConsent;
            setConsent(newConsent);
            setHasConsent(newConsent.consentGiven);
            setShowBanner(!newConsent.consentGiven);
          } catch (error) {
            console.error('Error parsing consent from storage event:', error);
          }
        } else {
          // Consent was cleared
          setConsent(null);
          setHasConsent(false);
          setShowBanner(true);
        }
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    window.addEventListener('cookieConsentCleared', handleConsentCleared);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
      window.removeEventListener('cookieConsentCleared', handleConsentCleared);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    const newConsent: CookieConsent = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
      consentGiven: true,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    setCookieConsent(newConsent);
    setConsent(newConsent);
    setHasConsent(true);
    setShowBanner(false);
  }, []);

  // Reject all non-essential cookies
  const rejectAll = useCallback(() => {
    const newConsent: CookieConsent = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
      consentGiven: true,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    setCookieConsent(newConsent);
    setConsent(newConsent);
    setHasConsent(true);
    setShowBanner(false);
  }, []);

  // Save custom preferences
  const savePreferences = useCallback((preferences: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      ...DEFAULT_CONSENT,
      ...preferences,
      essential: true, // Essential cookies are always required
      consentGiven: true,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    setCookieConsent(newConsent);
    setConsent(newConsent);
    setHasConsent(true);
    setShowBanner(false);
  }, []);

  // Update a specific category
  const updateCategory = useCallback((category: CookieCategory, enabled: boolean) => {
    if (category === 'essential') {
      // Essential cookies cannot be disabled
      return;
    }

    const currentConsent = consent || DEFAULT_CONSENT;
    const newConsent: CookieConsent = {
      ...currentConsent,
      [category]: enabled,
      consentGiven: true,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    setCookieConsent(newConsent);
    setConsent(newConsent);
    setHasConsent(true);
  }, [consent]);

  // Clear all consent
  const clearConsent = useCallback(() => {
    clearCookieConsent();
    setConsent(null);
    setHasConsent(false);
    setShowBanner(true);
  }, []);

  // Hide banner without saving consent (for temporary dismissal)
  const hideBanner = useCallback(() => {
    setShowBanner(false);
  }, []);

  // Check if a specific category is enabled
  const isCategoryEnabled = useCallback((category: CookieCategory) => {
    if (!consent || !consent.consentGiven) {
      return category === 'essential';
    }
    return consent[category];
  }, [consent]);

  // Refresh consent state (useful for manual checks)
  const refreshConsent = useCallback(async () => {
    try {
      const storedConsent = getCookieConsent();
      const validConsent = await hasValidConsent();
      
      setConsent(storedConsent);
      setHasConsent(validConsent);
      setShowBanner(!validConsent);
    } catch (error) {
      console.error('Error refreshing cookie consent:', error);
    }
  }, []);

  return {
    // State
    consent,
    hasConsent,
    showBanner,
    isLoading,
    
    // Actions
    acceptAll,
    rejectAll,
    savePreferences,
    updateCategory,
    clearConsent,
    hideBanner,
    
    // Utilities
    isCategoryEnabled,
    refreshConsent,
  };
}

/**
 * Hook for checking if a specific cookie category is allowed
 * Useful for conditional rendering of components that use specific cookie types
 */
export function useCookieCategory(category: CookieCategory): boolean {
  const { isCategoryEnabled } = useCookieConsent();
  return isCategoryEnabled(category);
}

/**
 * Hook for analytics consent specifically
 */
export function useAnalyticsConsent(): boolean {
  return useCookieCategory('analytics');
}

/**
 * Hook for marketing consent specifically
 */
export function useMarketingConsent(): boolean {
  return useCookieCategory('marketing');
}

/**
 * Hook for functional consent specifically
 */
export function useFunctionalConsent(): boolean {
  return useCookieCategory('functional');
}