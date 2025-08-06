'use client'

import { useState } from 'react'
import { Search, Mic, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchInterfaceProps {
  onSearch: (question: string) => void
  loading: boolean
  placeholder: string
}

export function SearchInterface({ onSearch, loading, placeholder }: SearchInterfaceProps) {
  const [question, setQuestion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(question)
  }

  const exampleQuestions = [
    'ইসলামে ধৈর্যের গুরুত্ব কি?',
    'নামাজের ফজিলত কি?',
    'হজ্জের গুরুত্ব সম্পর্কে জানতে চাই',
    'What does Quran say about patience?',
    'Explain the importance of prayer in Islam'
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <Input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white transition-colors"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <Button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 shadow-lg"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
              {loading ? 'অনুসন্ধান করা হচ্ছে...' : 'অনুসন্ধান করুন'}
            </Button>
          </div>
          
          {/* Voice Input Button */}
          <div className="flex justify-center">
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <Mic className="h-4 w-4" />
              ভয়েস ইনপুট (আসছে শীঘ্রই)
            </Button>
          </div>
        </form>
      </div>

      {/* Example Questions */}
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          উদাহরণস্বরূপ প্রশ্ন চেষ্টা করুন:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {exampleQuestions.map((example, index) => (
            <button
              key={index}
              onClick={() => {
                setQuestion(example)
                onSearch(example)
              }}
              className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-green-500 hover:text-green-600 transition-all duration-200 text-sm"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
