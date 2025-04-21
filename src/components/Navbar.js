'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useLanguage } from '@/context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const { theme } = useTheme()
  const { translations, direction, isLoading } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Handle the case when translations haven't loaded yet
  if (isLoading || !translations || !translations.nav) {
    return <div className="h-16 bg-white dark:bg-gray-900"></div>;
  }

  const navItems = [
    { name: translations.nav.home, href: '#home' },
    { name: translations.nav.services, href: '#services' },
    { name: translations.nav.about, href: '#about' },
    { name: translations.nav.contact, href: '#contact' }
  ]

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <div className="relative h-10 w-36">
                <Image 
                  src="/images/logo.svg" 
                  alt="TechFix Logo" 
                  width={144} 
                  height={40}
                  className={`transition-opacity duration-300 ${theme === 'dark' ? 'dark-logo' : 'light-logo'}`}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center justify-between px-3 py-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
