import axios from 'axios'

// Quran search function
export async function searchQuran(query: string) {
  try {
    // Mock Quran data - in real implementation, this would connect to Quran API
    const quranData = [
      {
        type: 'quran',
        surah: 'Al-Baqarah',
        ayah: 153,
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ',
        translation: 'O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.',
        reference: 'Quran 2:153',
        explanation: 'This verse emphasizes the importance of patience and prayer in times of difficulty.'
      },
      {
        type: 'quran',
        surah: 'Al-Asr',
        ayah: 3,
        arabic: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        translation: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
        reference: 'Quran 103:3',
        explanation: 'This verse highlights the importance of faith, good deeds, truth, and patience.'
      }
    ]

    // Filter based on query keywords
    const filtered = quranData.filter(item => 
      query.toLowerCase().includes('patience') || 
      query.toLowerCase().includes('sabr') ||
      query.toLowerCase().includes('prayer') ||
      query.toLowerCase().includes('salah')
    )

    return filtered.length > 0 ? filtered : quranData.slice(0, 1)
  } catch (error) {
    console.error('Quran search error:', error)
    return []
  }
}

// Hadith search function
export async function searchHadith(query: string) {
  try {
    // Mock Hadith data - in real implementation, this would connect to Hadith API
    const hadithData = [
      {
        type: 'hadith',
        source: 'Sahih Bukhari',
        book: 'Book of Faith',
        number: 1,
        arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',
        translation: 'Actions are judged by intentions.',
        reference: 'Sahih Bukhari 1',
        explanation: 'This hadith emphasizes that the value of actions depends on the intention behind them.'
      },
      {
        type: 'hadith',
        source: 'Sahih Muslim',
        book: 'Book of Purification',
        number: 223,
        arabic: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
        translation: 'Purity is half of faith.',
        reference: 'Sahih Muslim 223',
        explanation: 'This hadith highlights the importance of cleanliness in Islam.'
      }
    ]

    // Filter based on query keywords
    const filtered = hadithData.filter(item => 
      query.toLowerCase().includes('intention') || 
      query.toLowerCase().includes('faith') ||
      query.toLowerCase().includes('purity')
    )

    return filtered.length > 0 ? filtered : hadithData.slice(0, 1)
  } catch (error) {
    console.error('Hadith search error:', error)
    return []
  }
}
