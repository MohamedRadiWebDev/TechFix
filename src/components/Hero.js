'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@/context/ThemeContext'

export default function Hero() {
  const { translations, direction, isLoading } = useLanguage()
  const { theme } = useTheme()
  
  // Handle the case when translations haven't loaded yet
  if (isLoading || !translations || !translations.hero) {
    return (
      <section id="home" className="relative min-h-screen flex items-center py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
      </section>
    );
  }
  
  const ArrowIcon = direction === 'ltr' ? ArrowRightIcon : ArrowLeftIcon

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400 dark:bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-700 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-10 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`fade-in ${direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {translations.hero.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              {translations.hero.subtitle}
            </p>
            <div className="flex items-center">
              <a
                href="#services"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
              >
                <span className="mr-2 rtl:mr-0 rtl:ml-2">{translations.hero.cta}</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className={`fade-in ${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              {/* Hero SVG Illustration */}
              <svg 
                className="w-full h-full"
                viewBox="0 0 500 300" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="500" height="300" fill="transparent" />
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-700' : 'fill-gray-200'}`}>
                  <rect x="100" y="70" width="300" height="180" rx="10" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-800' : 'fill-white'}`}>
                  <rect x="110" y="80" width="280" height="160" rx="5" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-blue-400' : 'fill-blue-500'}`}>
                  <circle cx="250" cy="160" r="40" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-700' : 'fill-gray-200'}`}>
                  <rect x="200" y="230" width="100" height="10" rx="5" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-600' : 'fill-gray-300'}`}>
                  <rect x="220" y="250" width="60" height="5" rx="2.5" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-600' : 'fill-gray-300'}`}>
                  <rect x="150" y="50" width="200" height="10" rx="5" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-700' : 'fill-gray-200'}`}>
                  <circle cx="120" cy="50" r="15" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-700' : 'fill-gray-200'}`}>
                  <circle cx="380" cy="50" r="15" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-700' : 'fill-gray-200'}`}>
                  <rect x="70" y="120" width="20" height="70" rx="5" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'fill-gray-700' : 'fill-gray-200'}`}>
                  <rect x="410" y="120" width="20" height="70" rx="5" />
                </g>
                <g className={`transition-colors duration-300 ${theme === 'dark' ? 'stroke-blue-400' : 'stroke-blue-500'}`} fill="none" strokeWidth="3">
                  <path d="M250,120 L250,160 L280,180" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
