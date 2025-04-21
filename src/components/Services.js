'use client'

import { useLanguage } from '@/context/LanguageContext'
import ServiceCard from './ServiceCard'
import { useEffect, useState } from 'react'

export default function Services() {
  const { translations, language, isLoading } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Use a simpler approach - make content visible after a short delay on mount
    const timer = setTimeout(() => {
      setIsVisible(true)
      console.log('Services visibility set to true after timeout')
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Check if services data is available
  const servicesData = translations?.services?.items || [];
  const hasServices = Array.isArray(servicesData) && servicesData.length > 0;
  
  // For logging purposes only
  if (isLoading || !translations || !translations.services) {
    console.log('Services component: Loading state detected', { isLoading, translations });
  } else {
    console.log('Services component: Rendering with translations:', translations.services);
  }
  
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations?.services?.title || "Our Services"}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {translations?.services?.subtitle || "We offer a wide range of computer repair and maintenance services"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hasServices ? (
            servicesData.map((service, index) => (
              <ServiceCard
                key={service.id || index}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))
          ) : (
            // Empty services placeholder
            <div className="col-span-3 text-center py-10">
              <p className="text-gray-500 dark:text-gray-400">Services will appear here once loaded.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
