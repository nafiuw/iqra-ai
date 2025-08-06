import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { searchQuran } from '@/lib/islamic-sources'
import { searchHadith } from '@/lib/islamic-sources'
import { searchWeb } from '@/lib/search-engine'
import { formatResponse } from '@/lib/response-formatter'

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    // Detect language
    const isBangla = /[\u0980-\u09FF]/.test(question)
    const responseLanguage = isBangla ? 'bangla' : 'english'

    // Initialize ZAI
    const zai = await ZAI.create()
    
    // Search from multiple sources in parallel
    const [quranResults, hadithResults, webResults] = await Promise.allSettled([
      searchQuran(question),
      searchHadith(question),
      searchWeb(question)
    ])

    // Process results
    const quranData = quranResults.status === 'fulfilled' ? quranResults.value : []
    const hadithData = hadithResults.status === 'fulfilled' ? hadithResults.value : []
    const webData = webResults.status === 'fulfilled' ? webResults.value : []

    // Create enhanced prompt for AI
    const systemPrompt = `You are Iqra AI, a professional Islamic knowledge assistant. Your mission is to provide authentic, well-researched answers from Islamic sources.

STRICT PRIORITY SYSTEM:
1. QURAN (Highest Priority - Weight: 0.4): Always start with relevant Quranic verses
2. HADITH (High Priority - Weight: 0.3): Include authentic Hadiths with proper references
3. SCHOLARLY OPINIONS (Medium Priority - Weight: 0.2): Include scholarly interpretations
4. GENERAL ISLAMIC KNOWLEDGE (Low Priority - Weight: 0.1): Use reliable Islamic sources

REQUIREMENTS:
- Start with Bismillah (بسم الله الرحمن الرحيم) for every response
- Use Islamic greetings and manners
- Include Arabic verses with proper formatting
- Provide English/Bangla translations
- Give detailed, scholarly explanations
- Cite all sources properly
- Respond in ${responseLanguage}
- Be respectful and humble
- Always prioritize Quran and Hadith

RESPONSE FORMAT:
📖 Quranic Verse(s) with Arabic text
📝 Translation in ${responseLanguage}
💡 Detailed explanation
🕌 Relevant Hadith(s) with Arabic text
📝 Hadith translation
💡 Hadith explanation and context
🎓 Scholarly insights
🌐 Additional resources if needed

AVAILABLE SOURCES:
Quran Results: ${JSON.stringify(quranData.slice(0, 3))}
Hadith Results: ${JSON.stringify(hadithData.slice(0, 3))}
Web Results: ${JSON.stringify(webData.slice(0, 2))}

User Question: ${question}

Provide a comprehensive, well-structured answer that helps the user understand the topic deeply from an Islamic perspective.`

    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question }
      ],
      temperature: 0.3,
      max_tokens: 3000,
      top_p: 0.9,
      frequency_penalty: 0.1,
      presence_penalty: 0.1
    })

    const aiAnswer = completion.choices[0]?.message?.content || 
      (isBangla ? 'আমি ক্ষমাপ্রার্থী, কিন্তু আমি এই মুহূর্তে উত্তর দিতে পারছি না। অনুগ্রহ করে আবার চেষ্টা করুন।' : 
      'I apologize, but I cannot generate a response at this time. Please try again.')

    // Format the response
    const formattedResponse = formatResponse(aiAnswer, {
      question,
      sources: [...quranData, ...hadithData, ...webData],
      language: responseLanguage
    })

    return NextResponse.json({ 
      answer: formattedResponse,
      sources: [...quranData, ...hadithData, ...webData],
      language: responseLanguage
    })
    
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { 
        answer: 'আমি ক্ষমাপ্রার্থী, আপনার প্রশ্ন প্রক্রিয়া করার সময় একটি ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        error: 'An error occurred while processing your request'
      },
      { status: 200 }
    )
  }
}
