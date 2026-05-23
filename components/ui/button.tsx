import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-sans font-medium tracking-wider transition-colors duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-tanin text-ivoire hover:bg-noir',
        cuivre: 'bg-cuivre text-ivoire hover:bg-tanin',
        outline: 'border border-tanin text-tanin hover:bg-tanin hover:text-ivoire',
        ghost: 'text-tanin hover:text-cuivre',
      },
      size: {
        default: 'px-9 py-4 text-[14px]',
        lg: 'px-12 py-5 text-[15px]',
        sm: 'px-6 py-3 text-[13px]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
