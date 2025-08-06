import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'Iqra AI is running successfully',
    version: '2.0.0',
    features: [
      'Quran-first search',
      'Hadith integration',
      'Multi-language support',
      'AI-powered responses',
      'Professional UI'
    ],
    timestamp: new Date().toISOString()
  })
}
