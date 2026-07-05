import type { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
