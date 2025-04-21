'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect } from 'react'

export default function Home() {
  const { language, direction } = useLanguage();

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  return (
    <div className={`min-h-screen ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  )
}
