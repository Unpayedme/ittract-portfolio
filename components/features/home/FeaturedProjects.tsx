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

export function FeaturedProjects() {
    return (
        <Section>
            <div className="container mx-auto flex flex-col gap-10 border-t-2 border-b-2 border-slate-200 py-20 flex-1 w-full">
                <div className="">
                    <h1 className="text-center lg:text-5xl font-extrabold">Featured Projects</h1>
                </div>
                <div className="flex gap-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {
                        feature_projects.map((data, index) => (
                            <Card className="relative mx-auto w-full max-w-sm pt-0 transition-all hover:shadow-xl duration-500 hover:scale-103 flex flex-col gap-3" key={index}>
                                <div className="absolute inset-0 z-30 aspect-video" />
                                <img
                                    src={data.imageURL ? data.imageURL : "https://avatar.vercel.sh/shadcn1"}
                                    alt={`project: ${data.imageURL}`}
                                    className="relative z-20 aspect-video w-full object-cover brightness-100 dark:brightness-40 "
                                />
                                <CardHeader className="flex flex-col flex-1">
                                    <CardTitle className="font-bold">{data.title}</CardTitle>
                                    <CardDescription className="text-xs text-muted-foreground flex-1">
                                        {data.description}
                                    </CardDescription>
                                    <CardAction className="flex gap-2 grid grid-cols-2">
                                        {
                                            data.category.map((arrayData, arrayDataIndex) => (
                                                <Badge variant="secondary" key={arrayDataIndex}>{arrayData}</Badge>
                                            ))
                                        }
                                    </CardAction>
                                </CardHeader>
                                <CardFooter className="">
                                    <Link href={data.link} target="_blank">
                                        <Button className="w-full">View Projects</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))
                    }
                    <div className="items-center flex justify-center">
                        <Link href={"/projects"}>
                            <Button className="h-8">View All Projects</Button>
                        </Link>     
                    </div>
                </div>

            </div>
        </Section>
    );
}