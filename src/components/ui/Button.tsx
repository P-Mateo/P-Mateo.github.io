import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
}>;

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white shadow-soft hover:-translate-y-0.5',
  secondary: 'border border-border bg-surfaceElevated text-text hover:-translate-y-0.5 hover:border-accent/50',
  ghost: 'text-muted hover:text-text',
};

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`);
  };

  const classes = `firefly-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variantClasses[variant]} ${className}`;

  if (props.href) {
    return (
      <a className={classes} onMouseMove={handlePointerMove} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onMouseMove={handlePointerMove} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
