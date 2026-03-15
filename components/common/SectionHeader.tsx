import { cn } from "@/lib/utils";

type SectionHeaderType = {
    title: string;
    description: string;
    className?: string;

} 

export function SectionHeader( {title , description ,className }: SectionHeaderType ){
    return(
        <div className={cn("flex gap-3 flex-col", className)} >
            <h1 className="text-foreground text-xl md:text-5xl font-extrabold">{title}</h1>
            <p className="text-muted-foreground text-xm md:text-sm">
                {description}
            </p>
        </div>
    );
}