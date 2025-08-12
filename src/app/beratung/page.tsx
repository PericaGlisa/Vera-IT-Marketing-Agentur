'use client';

import { Calendar, Clock, Users, CheckCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Button } from '@/components/ui/Button';

export default function BeratungPage() {
  useEffect(() => {
    (async function () {
      try {
        console.log('Loading Cal.com API...');
        const cal = await getCalApi({ namespace: '15min' });
        console.log('Cal.com API loaded successfully:', cal);
        cal('ui', {
          theme: 'dark',
          cssVarsPerTheme: {
            light: { 'cal-brand': '#8b5cf6' },
            dark: { 'cal-brand': '#8b5cf6' }
          },
          hideEventTypeDetails: false,
          layout: 'month_view'
        });
        console.log('Cal.com UI configured');
      } catch (error) {
        console.error('Error loading Cal.com:', error);
      }
    })();
  }, []);

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative">

          {/* Hero Section */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
              Beratungstermin <span className="gradient-text">buchen</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Vereinbaren Sie einen kostenlosen 15-minütigen Beratungstermin mit unseren Experten. 
              Wir besprechen Ihre Anforderungen und zeigen Ihnen, wie wir Ihr Unternehmen digitalisieren können.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">15 Minuten</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Kurz und prägnant - wir respektieren Ihre Zeit</p>
              </motion.div>
              
              <motion.div
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Persönlich</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Direkter Kontakt mit unseren Experten</p>
              </motion.div>
              
              <motion.div
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Kostenlos</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Unverbindliche Erstberatung ohne Kosten</p>
              </motion.div>
            </div>
          </motion.div>
          {/* Calendar Section */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
              Wählen Sie Ihren Wunschtermin
            </h2>
            <div className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <p className="text-gray-400">
                  Klicken Sie auf einen verfügbaren Termin, um Ihre Beratung zu buchen.
                </p>
              </div>
              
              {/* Cal.com Embed */}
              <div className="bg-zinc-900/50 rounded-xl p-4 min-h-[600px]">
                {/* Temporary test with a known working Cal.com link */}

                
                <Cal 
                  namespace="15min"
                  calLink="verait/15min"
                  className="cal-embed"
                  style={{ width: '100%', height: '600px', overflow: 'visible' }}
                  config={{ 
                    layout: 'month_view', 
                    theme: 'dark',
                    hideEventTypeDetails: false,
                    styles: {
                      branding: {
                        brandColor: '#8b5cf6'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">
              Haben Sie Fragen? Kontaktieren Sie uns direkt:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:info@verait.de">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto min-w-[160px]"
                >
                  <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  E-Mail senden
                </Button>
              </Link>
              <Link href="tel:+4915563740470">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto min-w-[160px]"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Anrufen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}