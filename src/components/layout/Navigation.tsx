"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  Brain,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Video,
  Cloud,
  ShoppingCart,
  Shield,
  BarChart3,
} from "lucide-react"

const services = [
  {
    name: "KI-Entwicklung",
    href: "/leistungen/ki-entwicklung",
    icon: Brain,
    description: "Intelligente KI-Lösungen und Machine Learning",
  },
  {
    name: "Web-Entwicklung",
    href: "/leistungen/web-entwicklung",
    icon: Code,
    description: "Moderne Websites und Web-Anwendungen",
  },
  {
    name: "SaaS-Entwicklung",
    href: "/leistungen/saas-entwicklung",
    icon: Cloud,
    description: "Skalierbare Software-as-a-Service Lösungen",
  },
  {
    name: "Mobile Anwendungen",
    href: "/leistungen/mobile-apps",
    icon: Smartphone,
    description: "Native und Cross-Platform Mobile Apps",
  },
  {
    name: "Interface Design",
    href: "/leistungen/ui-ux-design",
    icon: Palette,
    description: "Benutzerorientiertes Design und UX",
  },
  {
    name: "Digitales Marketing",
    href: "/leistungen/digital-marketing",
    icon: TrendingUp,
    description: "Datengetriebene Marketing-Strategien",
  },
  {
    name: "Markendesign",
    href: "/leistungen/brand-design",
    icon: Palette,
    description: "Starke Markenidentitäten und Corporate Design",
  },
  {
    name: "Video-Produktion",
    href: "/leistungen/video-produktion",
    icon: Video,
    description: "Professionelle Video-Produktion",
  },
  {
    name: "E-Commerce Entwicklung",
    href: "/leistungen/e-commerce-entwicklung",
    icon: ShoppingCart,
    description: "Leistungsstarke Online-Shops",
  },
  {
    name: "Cloud-Lösungen",
    href: "/leistungen/cloud-loesungen",
    icon: Cloud,
    description: "Skalierbare Cloud-Infrastrukturen",
  },
  {
    name: "Cybersicherheit",
    href: "/leistungen/cybersecurity",
    icon: Shield,
    description: "Umfassender Schutz vor Cyberbedrohungen",
  },
  {
    name: "Datenanalyse",
    href: "/leistungen/datenanalyse",
    icon: BarChart3,
    description: "Datengetriebene Geschäftsentscheidungen",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && 
          mobileNavRef.current && 
          mobileButtonRef.current &&
          !mobileNavRef.current.contains(event.target as Node) && 
          !mobileButtonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Disable scroll when services mega menu is open
  useEffect(() => {
    if (servicesOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [servicesOpen])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/95 border-b border-gray-700" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 z-50 group" onClick={() => { setMobileServicesOpen(false); setIsOpen(false); }}>
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
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
                      className="h-6 sm:h-7 lg:h-8 w-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-lg" 
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
              Startseite
            </Link>

            {/* Mega Menu for Services */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Leistungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {servicesOpen && (
                  <motion.div
                    key="services-mega-menu"
                    className="fixed left-0 right-0 top-14 sm:top-16 lg:top-20 h-screen bg-zinc-950/98 backdrop-blur-md z-45"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        setServicesOpen(false)
                      }
                    }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setServicesOpen(false)}
                      className="absolute top-4 right-4 z-50 p-2 bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full transition-all duration-200 group"
                      aria-label="Menü schließen"
                    >
                      <X className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </button>

                    <div className="h-full flex items-center justify-center p-4">
                      <div className="w-full max-w-7xl mx-auto">
                        <div className="text-center mb-6 lg:mb-8">
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-4">
                            Unsere Leistungen
                          </h2>
                          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                            Entdecken Sie unser umfassendes Portfolio an digitalen Lösungen
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
                          {services.map((service, index) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.03 }}
                            >
                              <Link
                                href={service.href}
                                className="group block p-3 sm:p-4 lg:p-5 bg-zinc-900/50 border border-zinc-800 rounded-lg lg:rounded-xl hover:bg-zinc-800/50 hover:border-purple-500/30 transition-all duration-300 h-full"
                                onClick={() => setServicesOpen(false)}
                              >
                                <div className="flex flex-col items-center text-center space-y-2 lg:space-y-3">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-white font-semibold text-xs sm:text-sm lg:text-base group-hover:text-purple-400 transition-colors mb-1">
                                      {service.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="text-center mt-6 lg:mt-8">
                          <Link
                            href="/neue-kunden-form"
                            className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg lg:rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-xs sm:text-sm lg:text-base"
                            onClick={() => setServicesOpen(false)}
                          >
                            Kostenlose Beratung anfragen
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/ueber-uns" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
              Über Uns
            </Link>
            <Link href="/projekte" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
              Projekte
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
              Blog
            </Link>
            <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
              Kontakt
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/neue-kunden-form"
              className="primary-gradient text-white px-4 xl:px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm xl:text-base"
            >
              Projekt starten
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileButtonRef}
            className="lg:hidden z-[100] relative pointer-events-auto group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu öffnen"
          >
            <div className="relative">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Glass container */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-2 shadow-2xl group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-purple-500/20 transition-all duration-500">
                {/* Inner glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg opacity-60"></div>
                
                {/* Menu Icon */}
                <div className="relative">
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />}
                  </motion.div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            ref={mobileNavRef}
            className="lg:hidden fixed left-0 right-0 top-14 sm:top-16 lg:top-20 h-screen bg-zinc-950/98 backdrop-blur-md z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full overflow-y-auto"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium border-b border-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Startseite
                  </Link>

                  {/* Mobile Services Dropdown */}
                  <div className="border-b border-gray-800">
                    <button
                      className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <span>Leistungen</span>
                      <motion.div animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence mode="wait">
                      {mobileServicesOpen && (
                        <motion.div
                          key="mobile-services-dropdown"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 space-y-3">
                            {services.map((service, index) => (
                              <motion.div
                                key={service.name}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                              >
                                <Link
                                  href={service.href}
                                  className="flex items-center space-x-3 pl-4 py-2 text-gray-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200"
                                  onClick={() => {
                                    setMobileServicesOpen(false)
                                    setIsOpen(false)
                                  }}
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <service.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium">{service.name}</div>
                                    <div className="text-xs text-gray-500 truncate">{service.description}</div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/ueber-uns"
                    className="block text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium border-b border-gray-800"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Über Uns
                  </Link>
                  <Link
                    href="/projekte"
                    className="block text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium border-b border-gray-800"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Projekte
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium border-b border-gray-800"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/kontakt"
                    className="block text-gray-300 hover:text-white transition-colors py-3 text-lg font-medium border-b border-gray-800"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Kontakt
                  </Link>
                </div>

                {/* Mobile CTA Button */}
                <div className="pt-6">
                  <Link
                    href="/neue-kunden-form"
                    className="block primary-gradient text-white px-6 py-4 rounded-lg font-medium text-center text-lg hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      setMobileServicesOpen(false)
                      setIsOpen(false)
                    }}
                  >
                    Projekt starten
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="pt-6 border-t border-gray-800">
                  <div className="text-center space-y-2">
                    <p className="text-gray-400 text-sm">Kontaktieren Sie uns direkt:</p>
                    <a href="tel:+4915563740470" className="block text-white font-medium hover:text-purple-400 transition-colors" onClick={() => { setMobileServicesOpen(false); setIsOpen(false); }}>+49 15563 740470</a>
                    <a href="mailto:info@verait.de" className="block text-purple-400 hover:text-purple-300 transition-colors" onClick={() => { setMobileServicesOpen(false); setIsOpen(false); }}>info@verait.de</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
