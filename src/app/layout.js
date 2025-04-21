import { Inter } from 'next/font/google'
import './globals.css'
import './basic.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechFix - Computer Repair Services',
  description: 'Professional computer repair services including hardware and software maintenance for computers and laptops.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
