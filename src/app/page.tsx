'use client'

import { useState } from 'react'
import { SearchInterface } from '@/components/search-interface'
import { AnswerDisplay } from '@/components/answer-display'
import { FeaturesSection } from '@/components/features-section'
import { Header } from '@/components/header'

export default function Home() {
  const [answer, setAnswer] = useState('')
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [sources, setSources] = useState<any[]>([])

  const handleSearch = async (searchQuestion: string) => {
    if (!searchQuestion.trim()) return
    
    setQuestion(searchQuestion)
    setLoading(true)
    setAnswer('')
    setSources([])
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: searchQuestion })
      })
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      const data = await response.json()
      setAnswer(data.answer)
      setSources(data.sources || [])
    } catch (error) {
      console.error('Error:', error)
      setAnswer('আমি ক্ষমাপ্রার্থী, কিন্তু আমি একটি ত্রুটির সম্মুখীন হয়েছি। অনুগ্রহ করে আবার চেষ্টা করুন।')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            ইকরা এআই
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Iqra AI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            কুরআন ও হাদিস থেকে প্রামাণিক ইসলামিক জ্ঞান অনুসন্ধান করুন। 
            আমাদের এআই আপনার প্রশ্নের উত্তর দেবে আরবি আয়াত সহ বিস্তারিত ব্যাখ্যাসহ।
          </p>
        </div>

        {/* Search Interface */}
        <SearchInterface 
          onSearch={handleSearch} 
          loading={loading}
          placeholder="যেকোনো ইসলামিক প্রশ্ন জিজ্ঞাসা করুন..."
        />

        {/* Answer Display */}
        {(answer || loading) && (
          <div className="mt-8 max-w-4xl mx-auto">
            <AnswerDisplay 
              answer={answer}
              question={question}
              loading={loading}
              sources={sources}
            />
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16">
          <FeaturesSection />
        </div>
      </main>
    </div>
  )
}
