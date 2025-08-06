import { Loader2 } from 'lucide-react'

export function Loading({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizeClasses = {
    small: 'h-4 w-4',
    default: 'h-6 w-6',
    large: 'h-8 w-8'
  }

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]}`} />
  )
}
