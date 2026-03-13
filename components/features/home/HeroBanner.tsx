import { Section } from "@/components/common/Section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/common/ProfileImage";

export function HeroBanner(){
    return(
        <Section className="">
            <div className="container mx-auto flex lg:flex-row items-center gap-3 flex-col md:gap-1 ">

                <div className="flex-1 items-center flex justify-center mb-5">
                    <ProfileImage />
                </div>
                
                <div className="flex-1 flex flex-col gap-3">
                    <h1 className="text-foreground sm:text-2xl lg:text-5xl md:text-4xl text-xl font-bold">Hi, I`m John Vincent</h1>
                    <p className="text-muted-foreground text-lg">A dedicated software developer building modern, responsive digital products. From web applications to custom software, I focus on delivering clean code and captivating interfaces that drive user engagement.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/projects" className="">
                            <Button variant={"destructive"} className="h-10 w-50">View Projects</Button>
                        </Link>
                        <Link href="/contact" className="">
                            <Button variant={"destructive"} className="h-10 w-50">Contact</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}