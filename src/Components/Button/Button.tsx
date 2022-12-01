import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'destructive' | 'monochrome';
  modifier?: 'plain' | 'outline';
  size?: 'slim' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  // ... other props that a default button can have (onClick, disabled, etc.)
}

function Button({
  children,
  size = 'medium',
  variant = 'default',
  fullWidth,
  // disabled will not work here because it's a reserved word for the button element
  modifier,
  loading,
  ...props // disabled, onClick, etc. are passed here to the button element
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'relative rounded-md',
        variant === 'default' &&
          'border border-gray-400 bg-white text-text shadow-button hover:border-red-300',
        variant === 'monochrome' && 'border border-gray-400 bg-white text-text',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'destructive' && 'bg-destructive text-white',

        // Modifiers
        modifier === 'outline' &&
          'border border-current bg-transparent shadow-[0_0_0_1px_currentColor]',
        modifier === 'outline' &&
          variant === 'destructive' &&
          'text-destructive',
        modifier === 'outline' && variant === 'primary' && 'text-primary',

        modifier === 'plain' &&
          'border-none bg-transparent px-2 py-1 text-sm shadow-none',
        modifier === 'plain' && variant === 'destructive' && 'text-destructive',
        modifier === 'plain' && variant === 'primary' && 'text-primary',

        // Sizes overrides
        size === 'slim' && 'text-sm',
        size === 'medium' && 'text-sm',
        size === 'large' && 'text-base',
        modifier !== 'plain' && size === 'slim' && 'px-3 py-[3px]',
        modifier !== 'plain' && size === 'medium' && 'px-4 py-2',
        modifier !== 'plain' && size === 'large' && 'px-6 py-3',
        fullWidth && 'w-full',

        // Disabled
        props.disabled && 'bg-surfaceDisabled text-textDisabled',
        props.disabled && variant === 'default' && ' border-borderDisabled',
      )}
      {...props}
    >
      <span
        className={classNames(
          'leading-[1.25rem]',
          loading && 'text-transparent',
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            />
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
}

export default Button;
