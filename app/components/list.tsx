import { ReactNode } from "react";

export function List({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul className={`list-['>'] list-inside space-y-4 ${className}`}>
      {children}
    </ul>
  );
}
