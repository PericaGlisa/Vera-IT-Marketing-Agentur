"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Video } from "lucide-react"

export function Footer() {
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 sm:col-span-2">
                {/* Services */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">Leistungen</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/leistungen/ki-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        AI Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/web-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/saas-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        SaaS Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/mobile-apps"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Mobile Apps
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/ui-ux-design"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        UI/UX Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/digital-marketing"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Additional Services */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">Weitere Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/leistungen/brand-design"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Brand Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/video-produktion"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Video Production
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/e-commerce-entwicklung"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        E-Commerce Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/cloud-loesungen"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Cloud Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/cybersecurity"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/leistungen/datenanalyse"
                        className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                      >
                        Data Analytics
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 sm:col-span-2">
                {/* Company */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">Unternehmen</h3>
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
                  <h3 className="text-white font-semibold text-base sm:text-lg">Kontakt</h3>
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
            <Link href="/rechtliches/agb" className="text-gray-400 hover:text-white text-sm transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
