import { cva, type VariantProps } from 'class-variance-authority';

// cva for button styles
const buttonStyles = cva(
  'py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer', 
  {
    variants: {
      variant: {
        filled: '',
        outline: 'bg-transparent',
      },
      colorScheme: {
        blue: 'text-white bg-blue-600 border-none hover:bg-blue-700 hover:text-white',
        white: 'text-blue-600 bg-white border-none hover:bg-gray-200',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        colorScheme: 'blue',
        className: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      },
      {
        variant: 'outline',
        colorScheme: 'white',
        className: 'border-2 border-white text-white hover:bg-white hover:text-blue-600',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      colorScheme: 'blue',
    },
  }
);

// button props
interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  onClick?: () => void;
}

// button component using CVA
const Button: React.FC<ButtonProps> = ({ text, variant, colorScheme, onClick }) => {
  return (
    <button onClick={onClick} className={buttonStyles({ variant, colorScheme })}>
      {text}
    </button>
  );
};

export default Button;
