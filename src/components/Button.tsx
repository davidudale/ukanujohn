import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-forest-900 text-white hover:bg-forest-800 active:bg-forest-950 focus:ring-forest-700 shadow-sm hover:shadow',
    secondary: 'bg-solar-500 text-charcoal-950 font-semibold hover:bg-solar-400 active:bg-solar-600 focus:ring-solar-400 shadow-sm hover:shadow',
    outline: 'border-2 border-forest-900 text-forest-900 hover:bg-forest-50 active:bg-forest-100 focus:ring-forest-800',
    ghost: 'text-forest-900 hover:bg-forest-50 active:bg-forest-100 focus:ring-forest-800',
    white: 'bg-white text-forest-900 hover:bg-slate-100 active:bg-slate-200 focus:ring-white shadow-sm hover:shadow'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};

