export function formatResponse(answer: string, metadata: any) {
  // Add Islamic greeting and formatting
  const greeting = metadata.language === 'bangla' ? 
    'بسم الله الرحمن الرحيم\n\nআসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু\n\n' :
    'بسم الله الرحمن الرحيم\n\nAssalamu Alaikum Wa Rahmatullahi Wa Barakatuh\n\n'

  const footer = metadata.language === 'bangla' ?
    '\n\n---\nআল্লাহ আপনাকে সহায়তা করুন। আমীন।' :
    '\n\n---\nMay Allah help you. Amin.'

  return `${greeting}${answer}${footer}`
}
