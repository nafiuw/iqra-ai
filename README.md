🌟 Iqra AI - Islamic Knowledge Assistant

![Iqra AI LogoIqra-AI-green_style=for-the-badge logo=book logoColor=white](https://github.com/user-attachments/assets/65ca4083-dca4-4ab6-a92b-9c23cae711dd)
<svg xmlns="http://www.w3.org/2000/svg" width="93.5" height="28" role="img" aria-label="IQRA: AI"><g shape-rendering="crispEdges"><rect width="54" height="28" fill="#555"/><rect x="54" width="39.5" height="28" fill="#97ca00"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><text transform="scale(.1)" x="270" y="175" textLength="300" fill="#fff"></text><text transform="scale(.1)" x="737.5" y="175" textLength="155" fill="#fff" font-weight="bold"></text></g></svg>

An intelligent Islamic knowledge assistant that provides authentic answers from Quran, Hadith, and reliable Islamic sources.

✨ Features
📖 Quran First: Prioritizes answers from the Holy Quran
🕌 Hadith Integration: Includes authentic Hadith collections
🌐 Multi-language Support: English and Bangla
📱 Mobile Friendly: Works perfectly on all devices
🔍 Smart Search: Finds relevant Islamic content
🛡️ Safe Content: Filters for authentic Islamic sources only
🎨 Beautiful UI: Clean, professional interface
🚀 Quick Deploy (One Click)
Deploy to Vercel

📋 Prerequisites
Node.js 18.x or higher
GitHub account
Vercel account (free)
🛠️ Local Development
Installation

# Clone the repository
git clone https://github.com/your-username/iqra-ai.git
cd iqra-ai

# Install dependencies
npm install

# Setup database
npm run db:push

# Start development server
npm run dev

Environment Variables
Create a .env file:

DATABASE_URL="sqlite:///dev.db"
NEXTAUTH_SECRET="your-super-secret-string"

🎯 How It Works
Priority System
Quran (Highest Priority) - Searches Quranic verses
Hadith (High Priority) - Searches authentic Hadith collections
Video Content (Medium Priority) - Searches Islamic videos
Web Content (Low Priority) - Searches reliable Islamic websites
Response Format

📖 Arabic Verse (with proper formatting)
📝 English Translation
💡 Detailed Explanation
🔍 Additional Context
🌐 Related Resources

📱 Usage
For Users
Open the application in any web browser
Type your Islamic question in English or Bangla
Get authentic answers from Quran and Hadith
Explore additional resources and explanations
Example Questions
"What does Quran say about patience?"
"Explain the importance of prayer in Islam"
"What are the pillars of Iman?"
"Tell me about Prophet Muhammad's character"
🔧 Configuration
Adding Islamic Sources
Edit src/app/api/search/route.ts:
const ISLAMIC_SITES = [
  'https://quran.com/',
  'https://sunnah.com/',
  'https://islamqa.info/',
  // Add more reliable Islamic sites
]
Customizing UI
Edit src/app/page.tsx to modify:

Colors and branding
Welcome message
Layout and styling
📊 Deployment
Vercel (Recommended)
Click the "Deploy to Vercel" button above
Connect your GitHub account
Set environment variables:
DATABASE_URL: sqlite:///dev.db
NEXTAUTH_SECRET: Generate a random string
Deploy and share your URL!
Other Platforms
Netlify: Works with similar setup
Railway: Good for scaling
Digital Ocean: Full control
🛡️ Security Features
✅ Content Filtering: Only authentic Islamic sources
✅ Rate Limiting: Prevents abuse
✅ Input Validation: Safe user interactions
✅ Secure API: Protected endpoints
✅ CORS Protection: Secure cross-origin requests
📈 Monitoring
Health Check
curl https://your-domain.com/api/health
Analytics
Vercel built-in analytics
User engagement tracking
Popular questions monitoring
🎨 Technology Stack
Frontend: Next.js 15 with TypeScript
Styling: Tailwind CSS + shadcn/ui
Database: SQLite with Prisma ORM
AI: Z.ai Web Development SDK
Real-time: Socket.IO
Deployment: Vercel/Netlify
🤝 Contributing
Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request
📞 Support
Getting Help
Check the Issues page
Review the documentation
Contact the development team
Common Issues
Deployment fails: Check environment variables
AI not working: Verify API keys and database
Mobile issues: Test responsive design
🌟 Impact
This project helps:

New Muslims learn authentic Islamic knowledge
Students research Islamic topics
Teachers prepare educational materials
Parents answer children's questions
Community leaders provide accurate information
💝 Sadaqah Jariyah
May Allah (SWT) accept this effort and make it a source of continuous reward.

"رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ"

"Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing." (Quran 2:127)

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Thanks to Allah (SWT) for the opportunity to serve the Ummah
All Islamic scholars and content creators
The open-source community for excellent tools
Users who provide feedback and suggestions
🌟 JazakAllah Khair for using Iqra AI! May it benefit many! 🌟
