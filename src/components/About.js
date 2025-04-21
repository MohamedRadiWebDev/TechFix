'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import { CpuChipIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function About() {
  const { translations, direction, isLoading } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Use a simpler approach - make content visible after a short delay on mount
    const timer = setTimeout(() => {
      setIsVisible(true)
      console.log('About visibility set to true after timeout')
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])
  
  // For logging purposes only
  if (isLoading || !translations || !translations.about) {
    console.log('About component: Loading state detected', { isLoading, translations });
  } else {
    console.log('About component: Rendering with translations:', translations.about);
  }
  
  // Create stats with fallbacks in case translations aren't loaded yet
  const stats = [
    { id: 1, label: translations?.about?.years || "Years Experience", value: '10+', icon: CpuChipIcon },
    { id: 2, label: translations?.about?.clients || "Happy Clients", value: '5000+', icon: UserIcon },
    { id: 3, label: translations?.about?.repairs || "Successful Repairs", value: '15000+', icon: WrenchScrewdriverIcon }
  ];
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`${direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'} ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            } transition-all duration-700`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {translations?.about?.title || "About Us"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {translations?.about?.content || "We are a computer repair service with years of experience, helping thousands of customers with their tech problems."}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className={`bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className={`${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'} ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            } transition-all duration-700`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-700 aspect-square">
              {/* About SVG Illustration */}
              <svg 
                className="w-full h-full"
                viewBox="0 0 400 400" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="400" fill="transparent" />
                
                {/* Computer */}
                <rect x="100" y="100" width="200" height="150" rx="5" fill="#4B5563" />
                <rect x="110" y="110" width="180" height="120" rx="2" fill="#E5E7EB" className="dark:fill-gray-800" />
                <rect x="130" y="250" width="140" height="10" rx="2" fill="#4B5563" />
                <rect x="160" y="260" width="80" height="20" rx="2" fill="#4B5563" />
                
                {/* Elements on screen */}
                <rect x="130" y="130" width="140" height="10" rx="2" fill="#3B82F6" className="dark:fill-blue-500" />
                <rect x="130" y="150" width="80" height="8" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                <rect x="130" y="170" width="100" height="8" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                <rect x="130" y="190" width="60" height="8" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                
                {/* Decorative elements */}
                <circle cx="130" cy="80" r="20" fill="#3B82F6" className="dark:fill-blue-500" />
                <circle cx="280" cy="70" r="15" fill="#3B82F6" className="dark:fill-blue-500" opacity="0.7" />
                <circle cx="80" cy="200" r="25" fill="#3B82F6" className="dark:fill-blue-500" opacity="0.5" />
                <circle cx="320" cy="220" r="18" fill="#3B82F6" className="dark:fill-blue-500" opacity="0.6" />
                
                {/* Tools */}
                <rect x="50" y="300" width="40" height="8" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                <rect x="40" y="310" width="60" height="5" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                <rect x="300" y="310" width="50" height="10" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                <rect x="310" y="320" width="30" height="30" rx="2" fill="#6B7280" className="dark:fill-gray-500" />
                
                {/* Connecting lines */}
                <line x1="130" y1="80" x2="160" y2="100" stroke="#3B82F6" strokeWidth="2" className="dark:stroke-blue-500" />
                <line x1="280" y1="70" x2="240" y2="100" stroke="#3B82F6" strokeWidth="2" className="dark:stroke-blue-500" />
                <line x1="80" y1="200" x2="100" y2="180" stroke="#3B82F6" strokeWidth="2" className="dark:stroke-blue-500" />
                <line x1="320" y1="220" x2="300" y2="190" stroke="#3B82F6" strokeWidth="2" className="dark:stroke-blue-500" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
