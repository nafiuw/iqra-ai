import { BookOpen, Users, Globe, Brain, Shield, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'কুরআন প্রথম',
      description: 'সকল উত্তর কুরআন থেকে শুরু হয়, আরবি আয়াত সহ বিস্তারিত ব্যাখ্যা'
    },
    {
      icon: Users,
      title: 'প্রামাণিক হাদিস',
      description: 'সহীহ হাদিস সংগ্রহ থেকে সঠিক তথ্য উপস্থাপন'
    },
    {
      icon: Globe,
      title: 'বহুভাষী সমর্থন',
      description: 'বাংলা, ইংরেজি এবং আরবিতে প্রশ্ন করুন এবং উত্তর পান'
    },
    {
      icon: Brain,
      title: 'এআই গবেষণা',
      description: 'উন্নত এআই প্রযুক্তি দিয়ে ইসলামিক বিষয়ে গভীর গবেষণা'
    },
    {
      icon: Shield,
      title: 'নিরাপদ উৎস',
      description: 'শুধুমাত্র প্রামাণিক ইসলামিক উৎস থেকে তথ্য'
    },
    {
      icon: Zap,
      title: 'দ্রুত উত্তর',
      description: 'কয়েক সেকেন্ডের মধ্যে সঠিক উত্তর পান'
    }
  ]

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        বৈশিষ্ট্য সমূহ
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        ইকরা এআই-এর উন্নত বৈশিষ্ট্যগুলি আপনাকে ইসলামিক জ্ঞান অর্জনে সাহায্য করবে
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                    <Icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
