"use client";

import { Section } from "@/components/common/Section"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
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
import { Badge } from "@/components/ui/badge"
import { SearchIcon, Mail } from "lucide-react";
import { project_data, categories } from "@/constant/project";
import Link from "next/link"
import { useState, useEffect} from "react";

export function ProjectSection() {
    let projectData  = project_data;
    const [ pdata, setPData ] = useState(projectData);
    
    // function filterByCategory(data: string[], cat: string ){
    //     let filteredData = data.filter(data => data.catagory.include());
    // }
    

    return (
        <Section>
            <div className="container mx-auto flex flex-col gap-3">
                <div className="items-center">
                    <h1 className="text-foregroud font-extrabold text-3xl text-center">My Projects</h1>
                    <p className="text-muted-foreground text-center text-xm">Building functional digital experiences with a focus on refined aesthetics and clean code.</p>
                </div>
                <div>
                    <InputGroup className="">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="flex gap-2 mb-10">
                    <div>
                        <Link href="/projects">
                            <Button variant="outline">ALL</Button>
                        </Link>
                    </div>
                    {
                        categories.map((data, index) => (
                            <div className="" key={index}>                            
                                <Button variant="outline">{data.category.toUpperCase()}</Button>
                            </div>
                        ))
                    }
                </div>
                {
                    project_data.length > 0 ?
                        <div className="container mx-auto flex grid grid-cols-3 gap-4 ">
                            {
                                project_data.map((data, index) => (
                                    <Card className="relative mx-auto w-full max-w-sm pt-0 transition-all hover:shadow-xl duration-500 hover:scale-103" key={index}>
                                        <div className="absolute inset-0 z-30 aspect-video" />
                                        <img
                                            src={data.imageURL ? data.imageURL : "https://avatar.vercel.sh/shadcn1"}
                                            alt={`project: ${data.imageURL}`}
                                            className="relative z-20 aspect-video w-full object-cover brightness-100 dark:brightness-40"
                                        />
                                        <CardHeader className="flex flex-col flex-1">
                                            <CardTitle className="font-bold">{data.title}</CardTitle>
                                            <CardDescription className="text-xm text-muted-foreground flex-1     ">
                                                {data.description}
                                            </CardDescription>
                                            <CardAction className="flex gap-2">
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

                        </div>
                        :
                        <div className="text-muted-foreground text-center mt-30">
                            Project in progress. New works arriving soon...
                        </div>
                }
            </div>
        </Section>
    );
}