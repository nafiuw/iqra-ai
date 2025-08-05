import { NextRequest, NextResponse } from 'next/server'

// Islamic knowledge base for common questions
const islamicKnowledge = {
  "patience": {
    quran: "📖 Quran 2:153\n\"O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.\"\n\nTranslation: Seek help through patience and prayer. Allah is with those who are patient.",
    hadith: "🕌 Sahih Bukhari\nThe Prophet Muhammad (peace be upon him) said: \"Patience is a pillar of faith.\"\n\nExplanation: Patience is one of the most important virtues in Islam.",
    explanation: "💡 Patience (Sabr) is a fundamental concept in Islam. It means to endure difficulties with faith and trust in Allah's plan."
  },
  "prayer": {
    quran: "📖 Quran 4:103\n\"Indeed, prayer has been decreed upon the believers a decree of specified times.\"\n\nTranslation: Prayer is obligatory for believers at appointed times.",
    hadith: "🕌 Sahih Muslim\nThe Prophet said: \"The prayer is the pillar of religion. Whoever establishes it, establishes religion, and whoever destroys it, destroys religion.\"\n\nExplanation: Prayer is the foundation of Islamic practice.",
    explanation: "💡 Prayer (Salah) is the second pillar of Islam and serves as a direct connection between the believer and Allah."
  },
  "zakat": {
    quran: "📖 Quran 9:103\n\"Take, [O Muhammad], from their wealth a charity by which you purify them and cause them increase.\"\n\nTranslation: Take from their wealth charity to purify and bless them.",
    hadith: "🕌 Sahih Bukhari\nThe Prophet said: \"Islam is built upon five pillars: testifying that there is no god but Allah, establishing prayer, paying Zakat, fasting Ramadan, and pilgrimage to the House.\"\n\nExplanation: Zakat is the third pillar of Islam.",
    explanation: "💡 Zakat is the obligatory charity that purifies wealth and helps those in need."
  }
}

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    // Simple keyword matching for demo purposes
    const lowerQuestion = question.toLowerCase()
    
    // Check for common Islamic topics
    if (lowerQuestion.includes('patience') || lowerQuestion.includes('sabr')) {
      const knowledge = islamicKnowledge.patience
      const response = `${knowledge.quran}\n\n${knowledge.hadith}\n\n${knowledge.explanation}`
      return NextResponse.json({ answer: response })
    }
    
    if (lowerQuestion.includes('prayer') || lowerQuestion.includes('salah')) {
      const knowledge = islamicKnowledge.prayer
      const response = `${knowledge.quran}\n\n${knowledge.hadith}\n\n${knowledge.explanation}`
      return NextResponse.json({ answer: response })
    }
    
    if (lowerQuestion.includes('zakat') || lowerQuestion.includes('charity')) {
      const knowledge = islamicKnowledge.zakat
      const response = `${knowledge.quran}\n\n${knowledge.hadith}\n\n${knowledge.explanation}`
      return NextResponse.json({ answer: response })
    }

    // Generic response for other questions
    const genericResponse = `📖 Islamic Knowledge Response\n\nThank you for your question about: "${question}"\n\nAs Iqra AI, I prioritize answers from the Quran and Hadith. For your specific question, I recommend:\n\n1. 📖 Consulting the Quran for direct guidance\n2. 🕌 Referencing authentic Hadith collections\n3. 💡 Seeking knowledge from qualified Islamic scholars\n\n🌐 For more detailed information, please visit reliable Islamic sources like:\n- Quran.com\n- Sunnah.com\n- IslamQA.info\n\nMay Allah guide us all to beneficial knowledge. 🤲`

    return NextResponse.json({ answer: genericResponse })
    
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { answer: 'I apologize, but I encountered an error. Please try asking your question again.' },
      { status: 200 }
    )
  }
}
