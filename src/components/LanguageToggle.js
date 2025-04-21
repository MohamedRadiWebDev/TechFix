'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useState, useEffect } from 'react'
import { LanguageIcon } from '@heroicons/react/24/outline'

export default function LanguageToggle() {
  const { language, setLanguage, isLoading } = useLanguage()
  const [isAnimating, setIsAnimating] = useState(false)
  
  // If translations are still loading, show a skeleton loader
  if (isLoading) {
    return (
      <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse w-16 h-9"></div>
    );
  }
  
  const handleToggle = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setLanguage(language === 'en' ? 'ar' : 'en')
      setIsAnimating(false)
    }, 300)
  }
  
  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 language-transition ${
        isAnimating ? 'opacity-0 transform scale-90' : 'opacity-100 transform scale-100'
      }`}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      disabled={isAnimating}
    >
      <span className="flex items-center justify-center">
        <LanguageIcon className="h-5 w-5 mr-1 rtl:mr-0 rtl:ml-1" />
        <span className="text-xs font-medium">
          {language === 'en' ? 'AR' : 'EN'}
        </span>
      </span>
    </button>
  )
}
