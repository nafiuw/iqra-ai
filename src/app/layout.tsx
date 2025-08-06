import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { ToastProvider } from '@/hooks/use-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iqra AI - Islamic Knowledge Assistant',
  description: 'Get authentic Islamic answers from Quran, Hadith, and reliable sources with AI-powered research',
  keywords: 'Islamic AI, Quran, Hadith, Islamic knowledge, Islamic assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  )
}
