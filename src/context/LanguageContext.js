'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

// Default translations to prevent undefined errors during initial load
const defaultTranslations = {
  nav: { home: "Home", services: "Services", about: "About", contact: "Contact" },
  hero: { title: "Computer Repair Services", subtitle: "Expert solutions for your tech problems", cta: "Learn More" },
  services: { 
    title: "Our Services", 
    subtitle: "Professional computer repair services",
    items: []
  },
  about: { 
    title: "About Us", 
    content: "Computer repair service with years of experience", 
    years: "Years Experience", 
    clients: "Clients", 
    repairs: "Repairs" 
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    address: "123 Street",
    phone: "123-456-7890",
    email: "info@example.com",
    hours: "Mon-Fri: 9am - 6pm",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send"
    }
  },
  footer: {
    copyright: "© 2023 All rights reserved.",
    terms: "Terms",
    privacy: "Privacy"
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [translations, setTranslations] = useState(defaultTranslations)
  const [direction, setDirection] = useState('ltr')
  const [isLoading, setIsLoading] = useState(true)

  // Initialize language from localStorage or browser preference first
  useEffect(() => {
    const initLanguage = () => {
      try {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
          setLanguage(savedLanguage)
        } else {
          // Check browser language
          const browserLang = navigator.language.split('-')[0]
          if (browserLang === 'ar') {
            setLanguage('ar')
          }
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error)
      }
    }
    
    // In browser environment
    if (typeof window !== 'undefined') {
      initLanguage()
    }
  }, [])

  // Load translations based on language
  useEffect(() => {
    const loadTranslations = async () => {
      if (typeof window === 'undefined') {
        console.log('Server-side rendering, using default translations')
        setIsLoading(false)
        return
      }
      
      setIsLoading(true)
      try {
        console.log(`Attempting to load translations for language: ${language}`)
        const response = await fetch(`/locales/${language}.json`)
        if (!response.ok) {
          throw new Error(`Failed to fetch translations: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        console.log('Translations loaded successfully:', data)
        setTranslations(data)
        setDirection(language === 'ar' ? 'rtl' : 'ltr')
        // Save to localStorage for persistence
        try {
          localStorage.setItem('language', language)
        } catch (error) {
          console.error('Error saving to localStorage:', error)
        }
      } catch (error) {
        console.error('Error loading translations:', error)
        // Keep using default translations if there's an error
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, direction, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
