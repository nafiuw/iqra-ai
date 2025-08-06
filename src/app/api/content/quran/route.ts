import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    // Mock Quran search results
    const quranResults = [
      {
        surah: 'Al-Baqarah',
        ayah: 153,
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
        translation: 'O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.',
        explanation: 'This verse emphasizes the importance of patience and prayer in Islam.'
      }
    ]

    return NextResponse.json({ results: quranResults })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to search Quran' }, { status: 500 })
  }
}
