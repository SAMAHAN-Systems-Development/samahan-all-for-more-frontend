import React, { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        outline: 'bg-transparent',
      },
      colorScheme: {
        blue: 'text-blue border-2 border-blue hover:bg-blue hover:text-white',
        white: 'text-white border-2 border-white hover:bg-white hover:text-blue',
      },
    },
    defaultVariants: {
      variant: 'outline',
      colorScheme: 'blue',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  text?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { text, children, variant, colorScheme, onClick, asChild, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        onClick={onClick}
        className={buttonStyles({ variant, colorScheme })}
        {...props}
      >
        {text ? text : children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
