import cn from 'classnames';

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: Readonly<CardDescriptionProps>) {
  return <div className={cn(className)}>{children}</div>;
}
