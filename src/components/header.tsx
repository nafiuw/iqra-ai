'use client'

import { BookOpen, Github, Twitter, Heart } from 'lucide-react'

export function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOTEzOSAxLjc5MDg2MS00IDQtNCBoMTZjMi4yMDkxMzkgMCA0IDEuNzkwODYxIDQgNHYxNmMwIDIuMjA5MTM5LTEuNzkwODYxIDQtNCA0aC0xNmMtMi4yMDkxMzkgMC00LTEuNzkwODYxLTQtNHYtMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BookOpen className="h-10 w-10 text-green-600" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ইকরা এআই
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Islamic Knowledge Assistant
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Made with love</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
