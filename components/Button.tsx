import { cva } from "class-variance-authority";
import React from "react";
import { ReactNode } from "react";

const buttonCva = cva([
  'py-1',
  'px-2',
  'duration-[50ms]',
  'pl-3',
  'rounded',
  'flex',
  'items-center',
  'gap-2',
  'shadow-sm',
  'relative',
  'top-0',
  'active:top-[2px]',
  'active:border-b-[2px]',
  'active:shadow-none',
], {
  variants: {
    variant: {
      secondary: [
        'bg-gray-100',
        'border-gray-300',
        'border-b-4',
      ],
      primary: [
        'bg-yellow-300',
        'border-yellow-400',
        'border-b-4',
      ],
      outline: [
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      ],
    },
  },
});

export type Props = React.PropsWithChildren<{
  icon?: ReactNode
  secondary?: boolean
  outline?: boolean 
}> & React.HTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement>(({ children, secondary = false, icon = null, outline, ...rest }: Props, ref) => {
  let variant: 'primary' | 'secondary' | 'outline' = 'primary';

  if (secondary) {
    variant = 'secondary';
  }

  if (outline) {
    variant = 'outline';
  }

  return (
    <div>
      <button {...rest} className={buttonCva({ variant, class: rest.className })} ref={ref}>
        {children}
        {icon}
      </button>
    </div>
  );
});
