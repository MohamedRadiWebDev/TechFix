'use client'

import {
  ComputerDesktopIcon as DesktopComputerIcon,
  ShieldCheckIcon,
  CpuChipIcon as ChipIcon,
  BeakerIcon,
  ArrowDownTrayIcon as DownloadIcon,
  CircleStackIcon as DatabaseIcon
} from '@heroicons/react/24/outline'
import { useTheme } from '@/context/ThemeContext'

// Map icons to their strings from the JSON files
const DynamicHeroIcons = {
  DesktopComputer: DesktopComputerIcon,
  ShieldCheck: ShieldCheckIcon,
  Chip: ChipIcon,
  Beaker: BeakerIcon,
  Download: DownloadIcon,
  Database: DatabaseIcon
}

export default function ServiceCard({ service, index, isVisible }) {
  const { theme } = useTheme()
  
  // Use default icon if service.icon is undefined or not found in the map
  const defaultIcon = DynamicHeroIcons.DesktopComputer
  const Icon = service?.icon ? DynamicHeroIcons[service.icon] || defaultIcon : defaultIcon
  
  const getAnimationDelay = () => {
    return `${(index % 3) * 100 + Math.floor(index / 3) * 100}ms`
  }
  
  // Check if service is properly formed
  if (!service) {
    console.error('Service data missing in ServiceCard component')
    return null
  }
  
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg p-6 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: getAnimationDelay() }}
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-5">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {service?.title || "Service Title"}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {service?.description || "Service description here."}
      </p>
    </div>
  )
}
