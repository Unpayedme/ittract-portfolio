import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-2 md:py-14 lg:py-22 lg:mx-60 md:mx-30 sm:mx-20 mx-4", className)} {...props}>
      {children}
    </section>
  )
}