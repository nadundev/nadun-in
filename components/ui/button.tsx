import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-bold ring-offset-white transition-all duration-200 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform-gpu",
  {
    variants: {
      variant: {
        default:
          "text-gray-600 bg-gray-50 border-2 border-[#a6a6a6] shadow-[0_8px_0_0_#a6a6a6] hover:translate-y-1 hover:shadow-[0_4px_0_0_#a6a6a6] active:translate-y-2 active:shadow-[0_2px_0_0_#a6a6a6]",
        noShadow: 
          "text-gray-600 bg-gray-50 border-2 border-[#a6a6a6]",
        neutral:
          "text-gray-600 bg-stone-100 border-2 border-[#a6a6a6] shadow-[0_8px_0_0_#a6a6a6] hover:translate-y-1 hover:shadow-[0_4px_0_0_#a6a6a6] active:translate-y-2 active:shadow-[0_2px_0_0_#a6a6a6]",
        reverse:
          "text-gray-600 bg-amber-50 border-2 border-[#a6a6a6] shadow-[0_8px_0_0_#a6a6a6] hover:translate-y-1 hover:shadow-[0_4px_0_0_#a6a6a6] active:translate-y-2 active:shadow-[0_2px_0_0_#a6a6a6]",
        success:
          "text-gray-600 bg-green-50 border-2 border-[#a6a6a6] shadow-[0_8px_0_0_#a6a6a6] hover:translate-y-1 hover:shadow-[0_4px_0_0_#a6a6a6] active:translate-y-2 active:shadow-[0_2px_0_0_#a6a6a6]",
        danger:
          "text-gray-600 bg-red-50 border-2 border-[#a6a6a6] shadow-[0_8px_0_0_#a6a6a6] hover:translate-y-1 hover:shadow-[0_4px_0_0_#a6a6a6] active:translate-y-2 active:shadow-[0_2px_0_0_#a6a6a6]",
        warning:
          "text-gray-600 bg-orange-50 border-2 border-[#a6a6a6] shadow-[0_8px_0_0_#a6a6a6] hover:translate-y-1 hover:shadow-[0_4px_0_0_#a6a6a6] active:translate-y-2 active:shadow-[0_2px_0_0_#a6a6a6]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 py-1",
        lg: "h-13 px-7 py-3",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }