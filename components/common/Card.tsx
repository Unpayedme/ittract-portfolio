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
import { Project_type } from "@/constant/project";
import Link from "next/link"
import { SectionHeader } from "@/components/common/SectionHeader";
import Image from "next/image";
type MyCardProps = {
    props: Project_type
}

export function MyCard( { props }:  MyCardProps ) {

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 transition-all hover:shadow-xl duration-500 hover:scale-103">
            <div className="absolute inset-0 z-30 aspect-video" />
            <Image
                src={props.imageURL ? props.imageURL : "https://avatar.vercel.sh/shadcn1"}
                alt={`project: ${props.imageURL}`}
                width={500}
                height={500}
                className="relative z-20 aspect-video w-full object-cover brightness-100 dark:brightness-40"
            />
            <CardHeader className="flex flex-col flex-1">
                <CardTitle className="font-bold">{props.title}</CardTitle>
                <CardDescription className="text-xm text-muted-foreground flex-1">
                    {props.description}
                </CardDescription>
                <CardAction className="flex my-2 gap-2 flex-wrap">
                    {
                        props.category.map((arrayData, arrayDataIndex) => (
                            <Badge variant="secondary" key={arrayDataIndex}>{arrayData}</Badge>
                        ))
                    }
                </CardAction>
            </CardHeader>
            <CardFooter className="">
                <Link href={props.link} target="_blank">
                    <Button className="w-full">View Projects</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}