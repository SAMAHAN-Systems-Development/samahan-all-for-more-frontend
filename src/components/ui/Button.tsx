import React, { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'py-3 px-8 rounded-full font-bold transition-all duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        outline: 'bg-transparent',
      },
      colorScheme: {
        blue: 'text-blue border-2 border-blue hover:bg-blue hover:text-white',
        white:
          'text-white border-2 border-white hover:bg-white hover:text-blue',
      },
      fontSize: {
        lg: 'text-lg',
        sm: 'text-[1rem]',
      },
      size: {
        default: '',
        wide: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'outline',
      colorScheme: 'blue',
<<<<<<< HEAD
      size: 'default',
=======
      fontSize: 'lg',
>>>>>>> main
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
<<<<<<< HEAD
    { text, children, variant, colorScheme, size, onClick, asChild, ...props },
=======
    {
      text,
      children,
      variant,
      colorScheme,
      onClick,
      asChild,
      fontSize,
      ...props
    },
>>>>>>> main
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        onClick={onClick}
<<<<<<< HEAD
        className={buttonStyles({ variant, colorScheme, size })}
=======
        className={buttonStyles({ variant, colorScheme, fontSize })}
>>>>>>> main
        {...props}
      >
        {text ? text : children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
