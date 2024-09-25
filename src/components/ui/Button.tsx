import React, { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

// Define the CVA for button styles
const buttonStyles = cva(
  'py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'bg-transparent',
      },
      colorScheme: {
        blue: 'text-white bg-blue border-none hover:bg-transparent hover:text-blue',
        white: 'text-blue-600 bg-white border-none hover:bg-gray-200',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        colorScheme: 'blue',
        className:
          'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      },
      {
        variant: 'outline',
        colorScheme: 'white',
        className:
          'border-2 border-white text-white hover:bg-white hover:text-blue-600',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      colorScheme: 'blue',
    },
  }
);

// Define props for Button
interface ButtonProps extends VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  text?: string;
}

// Button component using forwardRef and Radix UI Slot
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { text, children, variant, colorScheme, onClick, asChild, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'; // Use Radix Slot component when asChild is true

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
