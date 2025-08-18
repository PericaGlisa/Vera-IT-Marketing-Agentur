'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Settings, BarChart3, Target, Cookie } from 'lucide-react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieCategory } from '@/lib/cookie-utils';
import Link from 'next/link';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CategoryInfo {
  id: CookieCategory;
  title: string;
  description: string;
  icon: React.ReactNode;
  required: boolean;
  examples: string[];
}

const categoryInfo: CategoryInfo[] = [
  {
    id: 'essential',
    title: 'Notwendige Cookies',
    description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht deaktiviert werden.',
    icon: <Shield className="w-5 h-5" />,
    required: true,
    examples: [
      'Sitzungs-IDs',
      'Sicherheits-Token',
      'Cookie-Einstellungen',
      'Grundlegende Website-Funktionen'
    ]
  },
  {
    id: 'functional',
    title: 'Funktionale Cookies',
    description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung der Website.',
    icon: <Settings className="w-5 h-5" />,
    required: false,
    examples: [
      'Spracheinstellungen',
      'Regionale Präferenzen',
      'Chat-Widgets',
      'Video-Player'
    ]
  },
  {
    id: 'analytics',
    title: 'Analyse-Cookies',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
    icon: <BarChart3 className="w-5 h-5" />,
    required: false,
    examples: [
      'Google Analytics',
      'Besucherzählung',
      'Seitenaufrufe',
      'Verweildauer'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing-Cookies',
    description: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung und Inhalte zu zeigen.',
    icon: <Target className="w-5 h-5" />,
    required: false,
    examples: [
      'Google Ads',
      'Facebook Pixel',
      'Retargeting',
      'Conversion-Tracking'
    ]
  }
];

export default function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const { consent, savePreferences, isCategoryEnabled } = useCookieConsent();
  const [localSettings, setLocalSettings] = useState<Record<CookieCategory, boolean>>({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  // Update local settings when consent changes
  useEffect(() => {
    if (consent) {
      setLocalSettings({
        essential: consent.essential,
        functional: consent.functional,
        analytics: consent.analytics,
        marketing: consent.marketing
      });
    }
  }, [consent]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCategoryToggle = (category: CookieCategory, enabled: boolean) => {
    if (category === 'essential') return; // Cannot disable essential cookies
    
    setLocalSettings(prev => ({
      ...prev,
      [category]: enabled
    }));
  };

  const handleSaveSettings = () => {
    savePreferences(localSettings);
    onClose();
  };

  const handleAcceptAll = () => {
    const allEnabled = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setLocalSettings(allEnabled);
    savePreferences(allEnabled);
    onClose();
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setLocalSettings(onlyEssential);
    savePreferences(onlyEssential);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[95]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-2 xs:inset-4 md:inset-8 lg:inset-16 bg-zinc-950/95 backdrop-blur-xl border border-gray-700 rounded-xl sm:rounded-2xl shadow-2xl z-[95] overflow-hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg">
                    <Cookie className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white">
                      Cookie-Einstellungen
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Verwalten Sie Ihre Cookie-Präferenzen
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-6">
                  {/* Introduction */}
                  <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-500/30 rounded-lg p-3 sm:p-4 backdrop-blur-sm">
                    <p className="text-xs sm:text-sm text-gray-300">
                      Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                      Sie können Ihre Einstellungen jederzeit anpassen. Weitere Informationen finden Sie in unserer{' '}
                      <Link 
                        href="/rechtliches/cookies" 
                        className="text-purple-400 hover:text-purple-300 underline hover:no-underline font-medium"
                        target="_blank"
                      >
                        Cookie-Richtlinie
                      </Link>.
                    </p>
                  </div>

                  {/* Cookie Categories */}
                  <div className="space-y-4">
                    {categoryInfo.map((category) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * categoryInfo.indexOf(category) }}
                        className="border border-gray-700 bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 hover:border-gray-600 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`p-2 rounded-lg transition-all duration-300 ${
                                localSettings[category.id]
                                  ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/10' 
                                  : 'bg-gray-600/20 text-gray-400 border border-gray-500/30'
                              }`}>
                                {category.icon}
                              </div>
                              <div>
                                <h3 className="text-sm sm:text-base font-semibold text-white">
                                  {category.title}
                                  {category.required && (
                                    <span className="ml-1 sm:ml-2 text-xs bg-purple-600/20 text-purple-400 border border-purple-500/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                                      <span className="hidden sm:inline">Erforderlich</span>
                                      <span className="sm:hidden">Req.</span>
                                    </span>
                                  )}
                                </h3>
                              </div>
                            </div>
                            
                            <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">
                              {category.description}
                            </p>
                            
                            <div className="text-xs text-gray-400">
                              <span className="font-medium">Beispiele:</span>
                              <ul className="mt-1 space-y-1">
                                {category.examples.map((example, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="ml-4">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={localSettings[category.id]}
                                onChange={(e) => handleCategoryToggle(category.id, e.target.checked)}
                                disabled={category.required}
                                className="sr-only peer"
                              />
                              <div className={`relative w-11 h-6 rounded-full transition-colors ${
                                category.required
                                  ? 'bg-purple-600 cursor-not-allowed'
                                  : localSettings[category.id]
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 peer-focus:ring-4 peer-focus:ring-purple-300/50'
                                    : 'bg-gray-600 peer-focus:ring-4 peer-focus:ring-gray-300/50'
                              }`}>
                                <div className={`absolute top-[2px] left-[2px] bg-white border border-gray-400 rounded-full h-5 w-5 transition-transform shadow-sm ${
                                  localSettings[category.id] ? 'translate-x-full' : ''
                                }`} />
                              </div>
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 sm:px-6 py-2 text-sm sm:text-base text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg transition-colors font-medium backdrop-blur-sm"
                  >
                    <span className="hidden sm:inline">Alle ablehnen</span>
                    <span className="sm:hidden">Ablehnen</span>
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 sm:px-6 py-2 text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="hidden sm:inline">Alle akzeptieren</span>
                    <span className="sm:hidden">Akzeptieren</span>
                  </button>
                  <button
                    onClick={handleSaveSettings}
                    className="px-4 sm:px-6 py-2 text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/25"
                  >
                    <span className="hidden sm:inline">Einstellungen speichern</span>
                    <span className="sm:hidden">Speichern</span>
                  </button>
                </div>
                
                <p className="text-xs text-gray-400 mt-3 sm:mt-4 text-center">
                  <span className="hidden sm:inline">Sie können Ihre Einstellungen jederzeit in der Fußzeile unserer Website ändern.</span>
                  <span className="sm:hidden">Einstellungen jederzeit in der Fußzeile änderbar.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}