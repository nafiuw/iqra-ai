import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

const ISLAMIC_SITES = [
  'https://quran.com/',
  'https://sunnah.com/',
  'https://islamqa.info/',
  'https://aboutislam.net/'
]

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json()
    
    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    const zai = await ZAI.create()
    
    // Enhanced prompt for Islamic knowledge with priority system
    const systemPrompt = `You are Iqra AI, an Islamic knowledge assistant. Answer questions with this STRICT priority:

1. QURAN (Highest Priority): 
   - Start with relevant Quranic verses
   - Include Arabic text with proper formatting
   - Provide English translation
   - Give detailed explanation

2. HADITH (High Priority):
   - Include authentic Hadiths
   - Mention the source (Bukhari, Muslim, etc.)
   - Provide Arabic text with translation
   - Explain the context

3. VIDEO CONTENT (Medium Priority):
   - Reference relevant Islamic videos
   - Summarize key points

4. WEB CONTENT (Low Priority):
   - Use reliable Islamic websites only
   - Cite sources properly

Format your response beautifully with:
- 📖 for Quran verses
- 🕌 for Hadith
- 🎥 for video content  
- 🌐 for web content
- 💡 for explanations

Always prioritize Quran and Hadith as primary sources. Answer in English or Bangla based on the question language.`

    const completion = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question }
      ],
      temperature: 0.3,
      max_tokens: 2000
    })

    const answer = completion.choices[0]?.message?.content || 
      'I apologize, but I could not generate a response at this time. Please try again.'

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    )
  }
}
