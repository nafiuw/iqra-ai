'use client'

import { useState } from 'react'
import { Copy, Share2, ThumbsUp, ThumbsDown, BookOpen, Clock, Source } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AnswerDisplayProps {
  answer: string
  question: string
  loading: boolean
  sources: any[]
}

export function AnswerDisplay({ answer, question, loading, sources }: AnswerDisplayProps) {
  const [copied, setCopied] = useState(false)
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(answer)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareAnswer = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Iqra AI - Islamic Knowledge',
          text: `${question}\n\n${answer.substring(0, 200)}...`,
          url: window.location.href
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    }
  }

  if (loading) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <div className="text-gray-600 dark:text-gray-400">
              আপনার প্রশ্নের উত্তর খুঁজে পেতে কুরআন ও হাদিস অনুসন্ধান করা হচ্ছে...
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Question Card */}
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5 text-green-600" />
            আপনার প্রশ্ন
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            {question}
          </p>
        </CardContent>
      </Card>

      {/* Answer Card */}
      <Card className="w-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Source className="h-5 w-5 text-green-600" />
              উত্তর
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="text-gray-600 hover:text-green-600"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={shareAnswer}
                className="text-gray-600 hover:text-green-600"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 leading-relaxed">
              {answer}
            </div>
          </div>
          
          {/* Feedback Buttons */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                এই উত্তরটি কি সহায়ক ছিল?
              </p>
              <div className="flex gap-2">
                <Button
                  variant={feedback === 'up' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFeedback('up')}
                  className="flex items-center gap-1"
                >
                  <ThumbsUp className="h-4 w-4" />
                  হ্যাঁ
                </Button>
                <Button
                  variant={feedback === 'down' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFeedback('down')}
                  className="flex items-center gap-1"
                >
                  <ThumbsDown className="h-4 w-4" />
                  না
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sources Card */}
      {sources.length > 0 && (
        <Card className="w-full">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-green-600" />
              উৎস সমূহ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sources.map((source, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {source.type === 'quran' ? `কুরআন - ${source.surah}:${source.ayah}` :
                       source.type === 'hadith' ? `হাদিস - ${source.source}` :
                       source.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {source.translation || source.snippet}
                    </p>
                    {source.reference && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {source.reference}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Check component for copy success
function Check({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  )
}
