import { ReactNode } from "react";

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`space-y-4 text-sm ${className}`}>{children}</section>
  );
}
