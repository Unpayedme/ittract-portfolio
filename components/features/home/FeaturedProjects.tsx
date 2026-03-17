import { Section } from "@/components/common/Section";
import { feature_projects } from "@/constant/project";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { MyCard } from "@/components/common/Card";

export function FeaturedProjects() {
    return (
        <Section>
            <div className="container mx-auto flex flex-col gap-10 border-t-2 border-b-2 border-slate-200 py-20">

                <SectionHeader 
                    title="Featured Projects" 
                    description="A collection of web applications and system visualizations defined by technical logic and clean execution."
                    className=""
                />

                <div className="flex gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {
                        feature_projects.map((data, index) => (
                            <MyCard key={index} props={data} />
                        ))
                    }
                </div>
                <div className="items-center flex justify-center">
                    <Link href={"/projects"}>
                        <Button className="h-8">View All Projects</Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}