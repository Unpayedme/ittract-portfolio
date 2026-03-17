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
import { project_data, categories, Project_type } from "@/constant/project";
import Link from "next/link"
import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import Image from "next/image";
import { MyCard } from "@/components/common/Card";

export function ProjectSection() {
    const [Filter , setFilter] = useState("All")
    const [ inputValue, setInputValue ] = useState("");

    const filteredProjects = project_data.filter((project) => {
        const matchesSearch = project.title.toLowerCase().startsWith(inputValue.toLowerCase())
        const matchesCategory = Filter === "All" || project.category.includes(Filter);
        return  matchesSearch && matchesCategory;   
    });

    console.log("filtered data: ",filteredProjects)

    return (
        <Section>
            <div className="container mx-auto flex flex-col gap-3 mb-20">

                <SectionHeader
                    title="My Projects"
                    description="Building functional digital experiences with a focus on refined aesthetics and clean code."
                    className=""
                />
    
                <div>
                    <InputGroup className="">
                        <InputGroupInput placeholder="Search..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="flex gap-2 mb-10  flex-wrap">
                    <div>
                        <Button variant="outline" onClick={() => setFilter("All")} className="h-8">all</Button>
                    </div>
                    {
                        categories.map((data, index) => (
                            <div className="" key={index}>
                                <Button variant="outline" onClick={() => setFilter(data.category || "All")} className="h-8">
                                    {data.category.toLowerCase()}
                                </Button>
                            </div>
                        ))
                    }
                </div>
                {
                    (filteredProjects.length > 0) ?
                        <div className="container mx-auto flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
                            {
                                filteredProjects.map((data, index) => (
                                    <MyCard key={index} props={data} />
                                ))
                            }

                        </div>
                        :
                        <div className="text-muted-foreground text-center mt-30 mb-70">
                            Project in progress. New works arriving soon...
                        </div>
                }
            </div>
        </Section>
    );
}