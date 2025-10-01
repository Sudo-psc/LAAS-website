import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  highlighted?: boolean;
}

export default function Card({ children, className, hover = false, highlighted = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 shadow-md border-2',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        highlighted ? 'border-orange-400 relative' : 'border-gray-100',
        className
      )}
    >
      {children}
    </div>
  );
}
