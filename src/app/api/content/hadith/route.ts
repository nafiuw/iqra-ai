import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    // Mock Hadith search results
    const hadithResults = [
      {
        source: 'Sahih Bukhari',
        number: 1,
        arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
        translation: 'Actions are judged by intentions.',
        explanation: 'This hadith teaches that the value of actions depends on intentions.'
      }
    ]

    return NextResponse.json({ results: hadithResults })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to search Hadith' }, { status: 500 })
  }
}
