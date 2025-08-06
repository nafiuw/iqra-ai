export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-6">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          পৃষ্ঠা পাওয়া যায়নি
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি বিদ্যমান নেই।
        </p>
        <a 
          href="/" 
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-block"
        >
          হোমপেজে ফিরে যান
        </a>
      </div>
    </div>
  )
}
