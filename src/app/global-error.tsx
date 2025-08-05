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
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try again.</p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mr-4"
            >
              Try again
            </button>
            <a 
              href="/" 
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
