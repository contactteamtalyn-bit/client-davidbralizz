'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'

interface SilkWaveProps {
  className?: string
  opacity?: number
  /** secondary fainter wave for depth */
  double?: boolean
}

/**
 * Vague organique de soie / tanin liquide.
 * Métaphore directe du lissage au tanin qui « coule » sur la fibre.
 * Le mouvement (sweep gauche→droite ou loop) est piloté par la classe passée.
 */
export function SilkWave({ className, opacity = 0.15, double = true }: SilkWaveProps) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      className={cn('block h-full w-full', className)}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={`silk-${id}`} x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#7D4E2D" />
          <stop offset="55%" stopColor="#9C6840" />
          <stop offset="100%" stopColor="#B8825A" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#silk-${id})`}
        d="M0,420 C260,300 420,560 720,440 C1010,330 1180,560 1440,430 L1440,900 L0,900 Z"
      />
      {double && (
        <path
          fill={`url(#silk-${id})`}
          opacity="0.5"
          d="M0,560 C300,470 480,690 760,560 C1040,440 1220,660 1440,540 L1440,900 L0,900 Z"
        />
      )}
    </svg>
  )
}
