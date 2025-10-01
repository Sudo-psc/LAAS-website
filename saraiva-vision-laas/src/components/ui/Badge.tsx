import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'popular' | 'economia' | 'premium' | 'anvisa' | 'primeiro';
  className?: string;
}

export default function Badge({ children, variant = 'popular', className }: BadgeProps) {
  const variants = {
    popular: 'bg-blue-100 text-blue-800 border-blue-200',
    economia: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
    premium: 'bg-gradient-to-r from-amber-500 to-amber-600 text-white',
    anvisa: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white',
    primeiro: 'bg-gradient-to-r from-green-500 to-green-600 text-white animate-pulse'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
