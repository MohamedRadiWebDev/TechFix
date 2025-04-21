'use client'

import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const { translations, direction, isLoading } = useLanguage()

  // Handle loading state
  if (isLoading || !translations || !translations.footer) {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/images/logo.svg" 
                alt="TechFix Logo" 
                width={120} 
                height={40}
                className="mb-4"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              {translations.footer.copyright}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {translations.nav.services}
            </h3>
            <ul className="space-y-2">
              {translations.services.items.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {translations.nav.about}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  {translations.nav.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  {translations.footer.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                  {translations.footer.privacy}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {translations.nav.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 ltr:mr-2 rtl:ml-2" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations.contact.address}
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 ltr:mr-2 rtl:ml-2" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations.contact.phone}
                </span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 ltr:mr-2 rtl:ml-2" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations.contact.email}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
