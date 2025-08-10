'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, Shield, BarChart3, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieCategory } from '@/lib/cookie-utils';
import CookieSettingsModal from './CookieSettingsModal';

interface CookieConsentBannerProps {
  className?: string;
}

export default function CookieConsentBanner({ className = '' }: CookieConsentBannerProps) {
  const { showBanner, acceptAll, rejectAll, isLoading, isCategoryEnabled, consent } = useCookieConsent();
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Helper function to determine if category should be highlighted
  const shouldHighlightCategory = (category: CookieCategory) => {
    // If no consent given yet, only essential should be highlighted
    if (!consent || !consent.consentGiven) {
      return category === 'essential';
    }
    // If consent given, use the actual consent state
    return isCategoryEnabled(category);
  };

  // Don't render anything while loading or if banner shouldn't be shown
  if (isLoading || !showBanner) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleRejectAll = () => {
    rejectAll();
  };

  const handleOpenSettings = () => {
    setShowSettingsModal(true);
  };

  const handleCloseSettings = () => {
    setShowSettingsModal(false);
  };



  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-t border-gray-700 shadow-2xl z-[90] ${className}`}
          >
            <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 sm:gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg flex-shrink-0">
                    <Cookie className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">
                      Cookie-Einstellungen
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                      Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.{' '}
                      <Link 
                        href="/rechtliches/cookies" 
                        className="text-purple-400 hover:text-purple-300 underline"
                        target="_blank"
                      >
                        Mehr erfahren
                      </Link>
                    </p>
                    
                    {/* Quick category overview */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                      <div className={`flex items-center gap-1 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full transition-all duration-300 ${
                        shouldHighlightCategory('essential')
                          ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-sm shadow-purple-500/10'
                          : 'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        <Shield className="w-3 h-3" />
                        Notwendig
                      </div>
                      <div className={`flex items-center gap-1 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full transition-all duration-300 ${
                        shouldHighlightCategory('functional')
                          ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-sm shadow-purple-500/10'
                          : 'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        <Zap className="w-3 h-3" />
                        Funktional
                      </div>
                      <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                        shouldHighlightCategory('analytics')
                          ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-sm shadow-purple-500/10'
                          : 'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        <BarChart3 className="w-3 h-3" />
                        Analyse
                      </div>
                      <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                        shouldHighlightCategory('marketing')
                          ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-sm shadow-purple-500/10'
                          : 'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        <Target className="w-3 h-3" />
                        Marketing
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <button
                    onClick={handleOpenSettings}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-colors font-medium backdrop-blur-sm"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="hidden xs:inline">Einstellungen</span>
                    <span className="xs:hidden">Settings</span>
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-colors font-medium backdrop-blur-sm"
                  >
                    <span className="hidden sm:inline">Nur notwendige</span>
                    <span className="sm:hidden">Ablehnen</span>
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-3 sm:px-4 py-2 text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="hidden sm:inline">Alle akzeptieren</span>
                    <span className="sm:hidden">Akzeptieren</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Settings Modal */}
      <CookieSettingsModal 
        isOpen={showSettingsModal} 
        onClose={handleCloseSettings} 
      />
    </>
  );
}