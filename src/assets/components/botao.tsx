import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: 'px-5 pt-3 pb-2 rounded-2xl text-lg md:text-xl uppercase transition-all',
  
  variants: {
    variant: {
      primary: 'bg-[#2e2f32] text-[#0fff94] hover:bg-[#0fff94] hover:text-[#2e2f32]',
      secondary: 'bg-[#0fff94] text-[#2e2f32] hover:bg-[#2e2f32] hover:border hover:border-gray-700 hover:text-[#0fff94]',
    },
    
    size: {
      default: 'w-fit',
      full: 'w-full'
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  }
})

interface ButtonProps extends ComponentProps<'a'>, VariantProps<typeof buttonVariants> {
  children: ReactNode,
  link?: 'whatsapp'
}


export function Button({ children, variant, size, link, ...rest }: ButtonProps) {
  return (
    <a 
      href={link === "whatsapp" ? 
        'https://api.whatsapp.com/send?phone=5534999306776&text=Ol%C3%A1,%20tenho%20dúvidas%20do%20sobre%20o%20Saúde%20Empreende%20Experience.' : 
        'https://www.sympla.com.br/evento/saude-empreende-experience/2568694'
      }
      target="_blank"
      {...rest} 
      className={buttonVariants({ variant,size })}
    >
      {children}
    </a>
  )
}
