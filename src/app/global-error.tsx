'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              কিছু ভুল হয়েছে!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              আমরা অসুবিধার জন্য ক্ষমাপ্রার্থী। অনুগ্রহ করে আবার চেষ্টা করুন।
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mr-4"
            >
              আবার চেষ্টা করুন
            </button>
            <a 
              href="/" 
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors inline-block"
            >
              হোমপেজে যান
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
