"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { NewsletterForm } from "@/components/newsletter/NewsletterForm"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Die Zukunft der Künstlichen Intelligenz im E-Commerce",
    excerpt:
      "Wie KI-gestützte Personalisierung die Online-Shopping-Erfahrung revolutioniert und Conversion-Raten um bis zu 40% steigert.",
    content: "Künstliche Intelligenz transformiert den E-Commerce grundlegend...",
    author: "Vera IT",
    date: "2024-01-15",
    readTime: "8 min",
    category: "AI & Machine Learning",
    image: "/ai-ecommerce-future.svg",
    tags: ["KI", "E-Commerce", "Personalisierung", "Machine Learning"],
    featured: true,
    archived: true,
  },
  {
    id: 2,
    title: "Responsive Design: Best Practices für 2024",
    excerpt:
      "Moderne Ansätze für responsive Webdesign, die auf allen Geräten eine optimale User Experience gewährleisten.",
    content: "Responsive Design ist heute wichtiger denn je...",
    author: "Vera IT",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Web-Entwicklung",
    image: "/responsive-design-2024.svg",
    tags: ["Responsive Design", "UX/UI", "Mobile First", "CSS"],
    archived: true,
  },
  {
    id: 3,
    title: "Cloud-Native Entwicklung mit Kubernetes",
    excerpt:
      "Ein umfassender Leitfaden für die Entwicklung skalierbarer Anwendungen in der Cloud mit Container-Orchestrierung.",
    content: "Cloud-native Entwicklung ermöglicht es Unternehmen...",
    author: "Vera IT",
    date: "2024-01-05",
    readTime: "12 min",
    category: "DevOps & Cloud",
    image: "/kubernetes-cloud-native.svg",
    tags: ["Kubernetes", "Cloud", "DevOps", "Container"],
    archived: true,
  },
  {
    id: 4,
    title: "Digital Marketing Trends 2024",
    excerpt: "Die wichtigsten Trends im digitalen Marketing: Von Voice Search bis zu KI-gestützter Content-Erstellung.",
    content: "Das digitale Marketing entwickelt sich rasant weiter...",
    author: "Vera IT",
    date: "2023-12-28",
    readTime: "7 min",
    category: "Digital Marketing",
    image: "/digital-marketing-trends.svg",
    tags: ["Marketing", "Trends", "Social Media", "SEO"],
    archived: true,
  },
  {
    id: 5,
    title: "Cybersecurity für kleine Unternehmen",
    excerpt: "Praktische Tipps und Strategien zum Schutz Ihres Unternehmens vor Cyberbedrohungen ohne großes Budget.",
    content: "Cybersecurity ist nicht nur ein Thema für Großunternehmen...",
    author: "Vera IT",
    date: "2023-12-20",
    readTime: "9 min",
    category: "Security",
    image: "/cybersecurity-small-business.svg",
    tags: ["Cybersecurity", "KMU", "Datenschutz", "IT-Sicherheit"],
    archived: true,
  },
  {
    id: 6,
    title: "Progressive Web Apps: Die Zukunft mobiler Anwendungen",
    excerpt:
      "Warum PWAs die perfekte Lösung zwischen nativen Apps und Websites darstellen und wie Sie davon profitieren können.",
    content: "Progressive Web Apps kombinieren das Beste aus beiden Welten...",
    author: "Vera IT",
    date: "2023-12-15",
    readTime: "10 min",
    category: "Mobile Development",
    image: "/progressive-web-apps.svg",
    tags: ["PWA", "Mobile", "Web-Entwicklung", "Performance"],
    archived: true,
  },
]

const categories = [
  "Alle",
  "AI & Machine Learning",
  "Web-Entwicklung",
  "Mobile Development",
  "Digital Marketing",
  "DevOps & Cloud",
  "Security",
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Vera IT <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bleiben Sie auf dem Laufenden mit den neuesten Trends, Technologien und Best Practices in der digitalen
            Welt. Unsere Experten teilen ihr Wissen und ihre Erfahrungen mit Ihnen.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("de-DE")}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-400 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">{featuredPost.author}</span>
                    </div>

                    {featuredPost.archived ? (
                      <Button className="group opacity-50 cursor-not-allowed" disabled>
                        Archiviert
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    ) : (
                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="group">
                          Weiterlesen
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-zinc-800 border border-gray-700 rounded-lg text-gray-300 hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-zinc-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/90 text-white rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("de-DE")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zinc-700 text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{post.author}</span>
                  </div>

                  {post.archived ? (
                    <Button variant="ghost" size="sm" className="group opacity-50 cursor-not-allowed" disabled>
                      Archiviert
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  ) : (
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group">
                        Lesen
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bleiben Sie auf dem Laufenden
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Artikel und Insights direkt in Ihr Postfach.
          </p>
          <NewsletterForm />
        </motion.div>
      </div>
    </div>
  )
}
