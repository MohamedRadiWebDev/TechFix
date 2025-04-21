'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useState, useEffect } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const { translations, direction, isLoading } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  useEffect(() => {
    // Use a timer instead of Intersection Observer for more reliable showing
    const timer = setTimeout(() => {
      setIsVisible(true)
      console.log('Contact visibility set to true after timeout')
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Since this is frontend only, we'll just log the data
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    // Show success message (in a real app, you'd handle API call here)
    alert('Form submitted successfully! (This is a demo)')
  }
  
  // For logging purposes only
  if (isLoading || !translations || !translations.contact) {
    console.log('Contact component: Loading state detected', { isLoading, translations });
  } else {
    console.log('Contact component: Rendering with translations:', translations.contact);
  }
  
  // Create contact items with fallbacks in case translations aren't loaded yet
  const contactItems = [
    {
      icon: MapPinIcon,
      label: translations?.contact?.address || "123 Tech Street, Digital City"
    },
    {
      icon: PhoneIcon,
      label: translations?.contact?.phone || "+1 (123) 456-7890"
    },
    {
      icon: EnvelopeIcon,
      label: translations?.contact?.email || "info@techfix.example"
    },
    {
      icon: ClockIcon,
      label: translations?.contact?.hours || "Mon-Fri: 9am - 6pm"
    }
  ]
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations?.contact?.title || "Contact Us"}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {translations?.contact?.subtitle || "Get in touch with our team for any inquiries or to schedule a service appointment."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={`${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-700`}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {translations?.contact?.subtitle || "Send us a message"}
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {translations?.contact?.form?.name || "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {translations?.contact?.form?.email || "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {translations?.contact?.form?.message || "Message"}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  {translations?.contact?.form?.submit || "Send Message"}
                </button>
              </form>
            </div>
          </div>
          
          <div 
            className={`${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } transition-all duration-700 delay-300`}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {translations?.contact?.title || "Contact Info"}
              </h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-4 rtl:mr-4 rtl:ml-0 text-gray-600 dark:text-gray-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                {/* Map illustration */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <svg 
                    className="w-full h-full"
                    viewBox="0 0 400 200" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="400" height="200" fill="#E5E7EB" className="dark:fill-gray-700" />
                    
                    {/* Map grid lines */}
                    <line x1="0" y1="40" x2="400" y2="40" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    <line x1="0" y1="80" x2="400" y2="80" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    <line x1="0" y1="160" x2="400" y2="160" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    
                    <line x1="80" y1="0" x2="80" y2="200" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    <line x1="160" y1="0" x2="160" y2="200" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    <line x1="240" y1="0" x2="240" y2="200" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    <line x1="320" y1="0" x2="320" y2="200" stroke="#D1D5DB" strokeWidth="1" className="dark:stroke-gray-600" />
                    
                    {/* Roads */}
                    <rect x="40" y="60" width="320" height="10" fill="#9CA3AF" className="dark:fill-gray-500" />
                    <rect x="120" y="20" width="10" height="160" fill="#9CA3AF" className="dark:fill-gray-500" />
                    <rect x="200" y="40" width="10" height="120" fill="#9CA3AF" className="dark:fill-gray-500" />
                    <rect x="280" y="70" width="10" height="90" fill="#9CA3AF" className="dark:fill-gray-500" />
                    
                    {/* Buildings */}
                    <rect x="140" y="80" width="30" height="20" fill="#6B7280" className="dark:fill-gray-400" />
                    <rect x="220" y="100" width="40" height="30" fill="#6B7280" className="dark:fill-gray-400" />
                    <rect x="60" y="120" width="25" height="25" fill="#6B7280" className="dark:fill-gray-400" />
                    <rect x="300" y="90" width="35" height="45" fill="#6B7280" className="dark:fill-gray-400" />
                    
                    {/* Location pin */}
                    <circle cx="200" cy="100" r="15" fill="#EF4444" />
                    <circle cx="200" cy="100" r="5" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
