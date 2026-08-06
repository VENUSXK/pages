interface CaptionProps {
  children: string;
  className?: string;
}

export function Caption({ children, className = "" }: CaptionProps) {
  return (
    <p className={`my-4 text-center text-base text-gray-200 ${className}`}>
      {children}
    </p>
  );
}
