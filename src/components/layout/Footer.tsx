"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Video, Settings } from "lucide-react"
import { useState, useRef } from "react"
import CookieSettingsModal from "@/components/cookie-consent/CookieSettingsModal"

export function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  return (
    <footer className="bg-zinc-900 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/25 to-indigo-600/25 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {/* Glass container */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-purple-500/20 transition-all duration-500">
                  {/* Inner glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl opacity-60"></div>
                  
                  {/* Logo */}
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Image 
                        src="/vera-it-logo.png" 
                        alt="Vera IT Logo" 
                        width={120} 
                        height={38} 
                        className="h-7 sm:h-8 w-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-lg" 
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Führende digitale Agentur in Hamburg. Wir transformieren Unternehmen durch innovative
              Technologien und datengetriebene Strategien.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/verait.global" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/verait.global/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/verait" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="http://www.tiktok.com/@verait_global" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Video className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Menu Categories - 2x2 Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Top Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:gap-8 sm:col-span-2">
                {/* Services */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">Leistungen</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/leistungen/ki-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        KI-Entwicklung
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/web-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Web-Entwicklung
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/saas-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        SaaS-Entwicklung
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/mobile-apps"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Mobile Anwendungen
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/ui-ux-design"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Interface Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/digital-marketing"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Digitales Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Additional Services */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">Weitere Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/leistungen/brand-design"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Markendesign
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/video-produktion"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Video-Produktion
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/e-commerce-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        E-Commerce Entwicklung
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/cloud-loesungen"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Cloud-Lösungen
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/cybersecurity"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Cybersicherheit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/datenanalyse"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Datenanalyse
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:gap-8 sm:col-span-2">
                {/* Company */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">Unternehmen</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/ueber-uns"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Über Uns
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Unser Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/karriere"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Karriere
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projekte"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Projekte
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kontakt"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Kontakt
                      </Link>
                    </li>

                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">Kontakt</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-400 text-sm sm:text-base">Rehrstieg 16d<br />21147 Hamburg, Deutschland</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <a href="mailto:info@verait.de" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">info@verait.de</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <a href="tel:+4915563740470" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">+49 15563 740470</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row justify-between items-center space-y-reverse space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 Vera IT. Mit ❤ in Hamburg gemacht
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
            <Link href="/rechtliches/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </Link>
            <Link href="/rechtliches/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/rechtliches/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie-Richtlinie
            </Link>
            <button 
              onClick={() => setShowCookieSettings(true)}
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <Settings className="w-3 h-3" />
              Cookie-Einstellungen
            </button>
            <Link href="/rechtliches/agb" className="text-gray-400 hover:text-white text-sm transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
      
      {/* Large VERA Branding */}
      <div className="relative overflow-hidden py-2 sm:py-3 lg:py-4 bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-700">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/60 to-purple-700/40"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <motion.div
             className="text-center w-full"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             viewport={{ once: true }}
           >
            <div className="w-full flex justify-center items-center">
               <div className="relative">
                 {/* Angelic light hover effect */}
                 {isHovered && (
                   <>
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-xl"
                       initial={{ scale: 0, opacity: 0 }}
                       animate={{ scale: 1.5, opacity: [0, 1, 0] }}
                       transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                     />
                     <motion.div
                       className="absolute inset-0 bg-gradient-to-r from-yellow-200/40 via-white/50 to-yellow-200/40 rounded-full blur-2xl"
                       initial={{ scale: 0, opacity: 0 }}
                       animate={{ scale: 2, opacity: [0, 0.8, 0] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                     />
                     {/* Sparkling particles */}
                     {[...Array(8)].map((_, i) => (
                       <motion.div
                         key={i}
                         className="absolute w-1 h-1 bg-white rounded-full"
                         style={{
                           top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 40}%`,
                           left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 40}%`,
                         }}
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ 
                           scale: [0, 1, 0], 
                           opacity: [0, 1, 0],
                           rotate: [0, 360]
                         }}
                         transition={{ 
                           duration: 1.5, 
                           repeat: Infinity, 
                           delay: i * 0.2,
                           ease: "easeInOut"
                         }}
                       />
                     ))}
                   </>
                 )}
                 
                 {/* Floating Logo */}
                 <motion.img
                   ref={logoRef}
                   src="/vera-logo-high-res.png"
                   alt="VERA IT Logo"
                   className="h-24 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 w-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                   style={{
                     filter: 'brightness(0) invert(1) contrast(1.2) saturate(1.1) drop-shadow(0 0 12px rgba(255,255,255,0.4))'
                   }}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                   animate={{ y: [0, -5, 0] }}
                   transition={{ 
                     duration: 4, 
                     repeat: Infinity, 
                     ease: "easeInOut" 
                   }}
                 />
               </div>
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Cookie Settings Modal */}
      <CookieSettingsModal 
        isOpen={showCookieSettings} 
        onClose={() => setShowCookieSettings(false)} 
      />
    </footer>
  )
}
